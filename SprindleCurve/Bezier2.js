define('Bezier2', ['kit', 'Bezier', 'Matrix', 'Vector'], function(kit, Bezier, Matrix, Vector){
	var Bezier2 = function(start, controls, end){
		this.name = 'Bezier2';

		// var self = new Bezier(start, controls, end);
		this.startPoint = [];
		this.endPoint = [];
		this.controlPoints = [];

		// 矩阵表示
		this.tMatrix;				// t的矩阵表示，是行矩阵,以二次贝塞尔曲线为例：[1, t, t^2];
		this.coefficientMatrix;		// 参数矩阵
		this.pointMatrix;			// 起始点控制点终止点的矩阵形式
		this.splitMatrix;			// 由分割点z计算得到的
		this.FirsetDerivateMatrix;
		// Bezier.apply(this, arguments);
		this.init(start, controls, end);
		// return self;
	}

	Object.assign(Bezier2.prototype, Bezier.prototype);

	// Bezier2.constructor = Bezier2;

	Bezier2.prototype.init = function(start, control, end){

			this.setStartPoint(start);
			this.setEndPoint(end);
			this.setControlPoints(control);

			this.initCoefficientMatrix();
			this.initPointMatrix();

	}

	Bezier2.prototype.setStartPoint = function(p){
		if(kit.typeOf(p) !== 'array'){
			throw '请输入起始点坐标.';
		}
		this.startPoint[0] = p[0];
		this.startPoint[1] = p[1];
		if(p.length === 3){
			this.startPoint[2] = p[2];
		}
	}

	Bezier2.prototype.setEndPoint = function(p){
		if(kit.typeOf(p) !== 'array'){
			throw '请输入结束点坐标.';
		}
		this.endPoint[0] = p[0];
		this.endPoint[1] = p[1];
		if(p.length === 3){
			this.endPoint[2] = p[2];
		}
	}

	Bezier2.prototype.setControlPoints = function(p){
		if(kit.typeOf(p) !== 'array'){
			throw '请输入控制点坐标.';
		}
		this.controlPoints[0] = p[0];
		this.controlPoints[1] = p[1];
		if(p.length === 3){
			this.controlPoints[2] = p[2];
		}
	}

	Bezier2.prototype.initCoefficientMatrix = function(){
		this.coefficientMatrix = new Matrix(3, 3, [
				 1,  0,  0,
				-2,  2,  0,
				 1, -2,  1
			]);
	}

	Bezier2.prototype.getNormals = function(t){
		if(this.startPoint.length===3){
			this.get3DNormals(t);
		} else {
			var vector = this.getTangents(t);

			return [vector[1] * -1, vector[0]];
		}

	}

	Bezier2.prototype.getTangents = function(t){
		var x = -1 * 2 * (1 - t) * this.startPoint[0] + 2 * ((1 - t) -  t) * this.controlPoints[0] + 2 * t * this.endPoint[0];
		var y = -1 * 2 * (1 - t) * this.startPoint[1] + 2 * ((1 - t) -  t) * this.controlPoints[1] + 2 * t * this.endPoint[1];
		var z;
		var vector = [x, y];
		if(this.startPoint.length === 3){
			z = -1 * 2 * (1 - t) * this.startPoint[2] + 2 * ((1 - t) -  t) * this.controlPoints[2] + 2 * t * this.endPoint[2];
			vector.push(z);
		}

		return vector;
	}

	Bezier2.prototype.get3DNormals = function(t){

	}

	Bezier2.prototype.get3DTangents = function(t){

	}

	Bezier2.prototype.getFirstXComponentDerivate = function (t) {
		
	}

	Bezier2.prototype.getFirstYComponentDerivate = function (t) {
		
	}

	Bezier2.prototype.getFirstXComponentDerivate = function (t) {
		
	}

	Bezier2.prototype.getFirstYComponentDerivate = function (t) {
		
	}

	Bezier2.prototype.getFirstDerivateMatrix = function(t){
		this.FirsetDerivateMatrix = new Matrix(1, 3, [0, 1, 2 * t]);
	}

	Bezier2.prototype.getBoundingBox = function(){

	}

	Bezier2.prototype.getTightBox = function(){
		
	}

	// return [t0, t1...]
	Bezier2.prototype.intersectWithLine = function(a, b){
		var p0 = this.startPoint;
		var p1 = this.controlPoints;
		var p2 = this.endPoint;
		var a1 = (a * p0[0] - p0[1] - 2 * a * p1[0] + 2 * p1[1] + a * p2[0] - p2[1]);
		var b1 = (-2 * a * p0[0] + 2 * p0[1] + 2 * a * p1[0] - 2 * p1[1]);
		var c1 = a * p0[0] - p0[1] + b;

		var delta = b1 * b1 - 4 * a1 * c1

		if(delta >= 0){
			var poiRoot = (-1 * b1 + Math.sqrt(delta)) / (2 * a1);
			var negRoot = (-1 * b1 - Math.sqrt(delta)) / (2 * a1);

			if(delta==0){
				if(poiRoot>1 || poiRoot < 0){
					return [];
				}
				return [poiRoot];
			}

			if(poiRoot>1 || poiRoot < 0){
				if(negRoot>1 || negRoot < 0){
					return [];
				}

				return [negRoot];
			}

			if(negRoot>1 || negRoot < 0){
				if(poiRoot>1 || poiRoot < 0){
					return [];
				}

				return [poiRoot];
			}
			return [poiRoot, negRoot];
		} else {

			return [];
		}
	}

	return Bezier2;

})