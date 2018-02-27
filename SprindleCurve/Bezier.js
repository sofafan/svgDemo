define('Bezier', ['kit', 'Matrix', 'Vector'], function(kit, Matrix, Vector){

	var Bezier = function(start, control, end){
		this.name = 'Bezier';
		
		this.x;
		this.y;
		this.t;
		this.startPoint;
		this.endPoint;
		this.controlPoints = [];

		// 矩阵表示
		this.tMatrix;				// t的矩阵表示，是行矩阵,以二次贝塞尔曲线为例：[1, t, t^2];
		this.coefficientMatrix;		// 参数矩阵
		this.pointMatrix;			// 起始点控制点终止点的矩阵形式
		this.splitMatrix;			// 由分割点z计算得到的

		this.init(start, control, end);
	}

	Bezier.prototype = {
		init: function(start, control, end){

			this.setStartPoint(start);
			this.setEndPoint(end);
			this.setControlPoints(control);

			this.initCoefficientMatrix();
			this.initPointMatrix();

		}

		, initTMatrix: function(t){
			var ele = [];
			var ele_len = this.controlPoints.length / this.startPoint.length + 2;

			for(var i = 0; i < ele_len; i++){
				ele.push(Math.pow(t, i));
			}

			this.tMatrix = new Matrix(1, ele_len, ele);
			return this.tMatrix;
		}

		, initCoefficientMatrix: function(){
			var matrixRowLength = this.controlPoints.length / this.startPoint.length + 2;
			var matrixColLength = matrixRowLength;
			var ele = [];
			for(var i = 0; i < matrixRowLength;i++){
				for(var j = 0; j < matrixColLength; j++){
					if(i>=j){
						var flag = Math.pow(-1, i - j);
						var c1 = PerAndCom.Combination(j, matrixRowLength - 1);
						var c2 = PerAndCom.Combination(i - j, matrixRowLength - 1 - j);
						ele.push(flag * c1 * c2);
					}else{
						ele.push(0);
					}
				}
			}
  
			this.coefficientMatrix = new Matrix(matrixRowLength, matrixColLength, ele);

			return this.coefficientMatrix;
		}

		, initPointMatrix: function(){
			var ele = [];
			var self = this;
			ele = ele.concat(self.startPoint);
			// for(var i = 0 ;i < self.controlPoints.length; i++){
			ele = ele.concat(self.controlPoints);
			// }
			ele = ele.concat(self.endPoint);

			self.pointMatrix = new Matrix(self.controlPoints.length + 2, self.startPoint.length, ele);

			return self.pointMatrix;

		}

		// isSub 为true 为上半段，为FALSE为下半段
		, initSplitMatrix: function(z){
			var z_ele = [];
			var row = this.controlPoints.length / this.startPoint.length + 2;
			for(var i = 0; i < row; i++){
				for(var j = 0; j < row; j++){
					if(i === j){
						z_ele.push(Math.pow(z, i));
					} else {
						z_ele.push(0);
					}
				}
			}

			var processMatrix = new Matrix(row, row, z_ele);
			var c1 = this.coefficientMatrix.inverse();
			c1 = new Matrix(c1.row, c1.col, c1.elements);
			var c2 = processMatrix;
			c2 = new Matrix(c2.row, c2.col, c2.elements);
			var c3 = this.coefficientMatrix;
			c3 = new Matrix(c3.row, c3.col, c3.elements);

			this.subCurvesMatrix = c1.multiplyBy(c2).multiplyBy(c3);

			this.supCurvesMatrix = reverseAndRight(this.subCurvesMatrix);

			function reverseAndRight(mat){
				if(mat.row !== mat.col){
					return false;
				}

				var new_ele = [];
				for(var i = mat.row - 1; i >= 0; i--){
					for(var j = 0; j < mat.col; j++){
						new_ele.push(mat.elements[i * mat.col + j]);
					}
				}

				for(var i = 1; i < mat.row; i++){
					for(var k = mat.col - i - 1; k >= 0; k--){
						var tmp = new_ele[i * mat.col + (k + i) % (mat.col)];
						new_ele[i * mat.col + (k + i) % (mat.col )] = new_ele[i * mat.col + k];
						new_ele[i * mat.col + k] = tmp;
					}
				}

				return new Matrix(mat.row, mat.col, new_ele);


			}

		}


		// 基础配置

		, setStartPoint: function(point){
			this.startPoint = kit.clone(point);
			// this.init();
		}

		, getStartPoint: function(){
			return kit.clone(this.startPoint);
		}

		, setEndPoint: function(point){
			this.endPoint = kit.clone(point);
			// this.init();
		}

		, getEndPoint: function(){
			return kit.clone(this.endPoint);
		}

		, setControlPoints: function(points){
			this.controlPoints = kit.clone(points);
			// this.init();
		}

		, getControlPoints: function(){
			return kit.clone(this.controlPoints);
		}

		// 方法
		// return {Bezier, Bezier};
		, splitInto2Curve: function(t){
			this.initSplitMatrix(t);
			var sub = this.subCurvesMatrix.multiplyBy(this.pointMatrix);
			var sup = this.supCurvesMatrix.multiplyBy(this.pointMatrix);

			var subObj = {
				start:[]
				, controlPoints:[]
				, end:[]
			}

			var supObj = {
				start:[]
				, controlPoints:[]
				, end:[]
			}
			for(var i = 0; i < sub.elements.length; ){
				for(var j = 0; j < sub.col;j++,i++){
					if(i<sub.col){
						subObj.start.push(sub.elements[i]);
						supObj.start.push(sup.elements[i]);
						continue;
					}

					if(sub.elements.length - i <= sub.col){
						subObj.end.push(sub.elements[i]);
						supObj.end.push(sup.elements[i]);
						continue;
					}

					subObj.controlPoints.push(sub.elements[i]);
					supObj.controlPoints.push(sup.elements[i]);
				}

			}

			return [new Bezier(subObj.start, subObj.controlPoints, subObj.end), new Bezier(supObj.start, supObj.controlPoints, supObj.end)]

		}

		, splitCurves: function(tList){
			if(tList.length == 1){
				return this.splitInto2Curve(tList[0]);
			}

			tList.sort(function(a, b){
				return a - b;
			})

			var t = tList[0];
			tList.shift();

			tList = tList.map(function(item){
				return (item - t) / (1 - t);
			})

			var tmp = this.splitInto2Curve(t);

			return [tmp[0]].concat(tmp[1].splitCurves(tList));

		}

		, getCoordinates: function(t){

		}

		, getCoordinatesByY: function(){

		}

		, getCoordinatesByX: function(){

		}


	}

// 排列组合
// Combination: 应用于计算组合 
// Permutation: 用于计算排列
	var PerAndCom = {
		Combination: function(m, n){
			return PerAndCom.Permutation(m, n) / factorial(m);
		}

		, Permutation: function(m, n){
			if(n < m){
				throw 'n should not greater than m.';
			}
			return factorial(n) / (factorial(n - m))
		}
	}

	var factList = {0:1, 1:1}
	function factorial(n){
		if(factList[n]){
			return factList[n];
		}

		factList[n] = factorial(n-1) * n;
		return factList[n];
	}
	return Bezier;




})