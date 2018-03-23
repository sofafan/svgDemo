/**
 * Created by fan on 2018/3/23.
 */
const SVG_NS = 'http://www.w3.org/2000/svg';

const svgData = [{
		"name": "vis",
		"type": 'downstream',
		"children": [{"name":"axis","children":[{"name":"Axes","size":1302,"type":"downstream"},{"name":"Axis","size":24593,"type":"downstream"},{"name":"AxisGridLine","size":652,"type":"downstream"},{"name":"AxisLabel","size":636,"type":"downstream"},{"name":"CartesianAxes","size":6703,"type":"downstream"}],"type":"downstream"},{"name":"controls","children":[{"name":"AnchorControl","size":2138,"type":"downstream"},{"name":"ClickControl","size":3824,"type":"downstream"},{"name":"Control","size":1353,"type":"downstream"},{"name":"ControlList","size":4665,"type":"downstream"},{"name":"DragControl","size":2649,"type":"downstream"},{"name":"ExpandControl","size":2832,"type":"downstream"},{"name":"HoverControl","size":4896,"type":"downstream"},{"name":"IControl","size":763,"type":"downstream"},{"name":"PanZoomControl","size":5222,"type":"downstream"},{"name":"SelectionControl","size":7862,"type":"downstream"},{"name":"TooltipControl","size":8435,"type":"downstream"}],"type":"downstream"},{"name":"data","children":[{"name":"Data","size":20544,"type":"downstream"},{"name":"DataList","size":19788,"type":"downstream"},{"name":"DataSprite","size":10349,"type":"downstream"},{"name":"EdgeSprite","size":3301,"type":"downstream"},{"name":"NodeSprite","size":19382,"type":"downstream"},{"name":"render","children":[{"name":"ArrowType","size":698,"type":"downstream"},{"name":"EdgeRenderer","size":5569,"type":"downstream"},{"name":"IRenderer","size":353,"type":"downstream"},{"name":"ShapeRenderer","size":2247,"type":"downstream"}],"type":"downstream"},{"name":"ScaleBinding","size":11275,"type":"downstream"},{"name":"Tree","size":7147,"type":"downstream"},{"name":"TreeBuilder","size":9930,"type":"downstream"}],"type":"downstream"},{"name":"events","children":[{"name":"DataEvent","size":2313,"type":"downstream"},{"name":"SelectionEvent","size":1880,"type":"downstream"},{"name":"TooltipEvent","size":1701,"type":"downstream"},{"name":"VisualizationEvent","size":1117,"type":"downstream"}],"type":"downstream"},{"name":"legend","children":[{"name":"Legend","size":20859,"type":"downstream"},{"name":"LegendItem","size":4614,"type":"downstream"},{"name":"LegendRange","size":10530,"type":"downstream"}],"type":"downstream"},{"name":"operator","children":[{"name":"distortion","children":[{"name":"BifocalDistortion","size":4461,"type":"downstream"},{"name":"Distortion","size":6314,"type":"downstream"},{"name":"FisheyeDistortion","size":3444,"type":"downstream"}],"type":"downstream"},{"name":"encoder","children":[{"name":"ColorEncoder","size":3179,"type":"downstream"},{"name":"Encoder","size":4060,"type":"downstream"},{"name":"PropertyEncoder","size":4138,"type":"downstream"},{"name":"ShapeEncoder","size":1690,"type":"downstream"},{"name":"SizeEncoder","size":1830,"type":"downstream"}],"type":"downstream"},{"name":"filter","children":[{"name":"FisheyeTreeFilter","size":5219,"type":"downstream"},{"name":"GraphDistanceFilter","size":3165,"type":"downstream"},{"name":"VisibilityFilter","size":3509,"type":"downstream"}],"type":"downstream"},{"name":"IOperator","size":1286,"type":"downstream"},{"name":"label","children":[{"name":"Labeler","size":9956,"type":"downstream"},{"name":"RadialLabeler","size":3899,"type":"downstream"},{"name":"StackedAreaLabeler","size":3202,"type":"downstream"}],"type":"downstream"},{"name":"layout","children":[{"name":"AxisLayout","size":6725,"type":"downstream"},{"name":"BundledEdgeRouter","size":3727,"type":"downstream"},{"name":"CircleLayout","size":9317,"type":"downstream"},{"name":"CirclePackingLayout","size":12003,"type":"downstream"},{"name":"DendrogramLayout","size":4853,"type":"downstream"},{"name":"ForceDirectedLayout","size":8411,"type":"downstream"},{"name":"IcicleTreeLayout","size":4864,"type":"downstream"},{"name":"IndentedTreeLayout","size":3174,"type":"downstream"},{"name":"Layout","size":7881,"type":"downstream"},{"name":"NodeLinkTreeLayout","size":12870,"type":"downstream"},{"name":"PieLayout","size":2728,"type":"downstream"},{"name":"RadialTreeLayout","size":12348,"type":"downstream"},{"name":"RandomLayout","size":870,"type":"downstream"},{"name":"StackedAreaLayout","size":9121,"type":"downstream"},{"name":"TreeMapLayout","size":9191,"type":"downstream"}],"type":"downstream"},{"name":"Operator","size":2490,"type":"downstream"},{"name":"OperatorList","size":5248,"type":"downstream"},{"name":"OperatorSequence","size":4190,"type":"downstream"},{"name":"OperatorSwitch","size":2581,"type":"downstream"},{"name":"SortOperator","size":2023,"type":"downstream"}],"type":"downstream"},{"name":"Visualization","size":16540,"type":"downstream"}]
	}]
	, upstremData =  [{
		"name": "vis",
		"type":"upstream",
		"children": [{"name":"axis","children":[{"name":"Axes","size":1302,"type":"upstream"},{"name":"Axis","size":24593,"type":"upstream"},{"name":"AxisGridLine","size":652,"type":"upstream"},{"name":"AxisLabel","size":636,"type":"upstream"},{"name":"CartesianAxes","size":6703,"type":"upstream"}],"type":"upstream"},{"name":"controls","children":[{"name":"AnchorControl","size":2138,"type":"upstream"},{"name":"ClickControl","size":3824,"type":"upstream"},{"name":"Control","size":1353,"type":"upstream"},{"name":"ControlList","size":4665,"type":"upstream"},{"name":"DragControl","size":2649,"type":"upstream"},{"name":"ExpandControl","size":2832,"type":"upstream"},{"name":"HoverControl","size":4896,"type":"upstream"},{"name":"IControl","size":763,"type":"upstream"},{"name":"PanZoomControl","size":5222,"type":"upstream"},{"name":"SelectionControl","size":7862,"type":"upstream"},{"name":"TooltipControl","size":8435,"type":"upstream"}],"type":"upstream"},{"name":"data","children":[{"name":"Data","size":20544,"type":"upstream"},{"name":"DataList","size":19788,"type":"upstream"},{"name":"DataSprite","size":10349,"type":"upstream"},{"name":"EdgeSprite","size":3301,"type":"upstream"},{"name":"NodeSprite","size":19382,"type":"upstream"},{"name":"render","children":[{"name":"ArrowType","size":698,"type":"upstream"},{"name":"EdgeRenderer","size":5569,"type":"upstream"},{"name":"IRenderer","size":353,"type":"upstream"},{"name":"ShapeRenderer","size":2247,"type":"upstream"}],"type":"upstream"},{"name":"ScaleBinding","size":11275,"type":"upstream"},{"name":"Tree","size":7147,"type":"upstream"},{"name":"TreeBuilder","size":9930,"type":"upstream"}],"type":"upstream"},{"name":"events","children":[{"name":"DataEvent","size":2313,"type":"upstream"},{"name":"SelectionEvent","size":1880,"type":"upstream"},{"name":"TooltipEvent","size":1701,"type":"upstream"},{"name":"VisualizationEvent","size":1117,"type":"upstream"}],"type":"upstream"},{"name":"legend","children":[{"name":"Legend","size":20859,"type":"upstream"},{"name":"LegendItem","size":4614,"type":"upstream"},{"name":"LegendRange","size":10530,"type":"upstream"}],"type":"upstream"},{"name":"operator","children":[{"name":"distortion","children":[{"name":"BifocalDistortion","size":4461,"type":"upstream"},{"name":"Distortion","size":6314,"type":"upstream"},{"name":"FisheyeDistortion","size":3444,"type":"upstream"}],"type":"upstream"},{"name":"encoder","children":[{"name":"ColorEncoder","size":3179,"type":"upstream"},{"name":"Encoder","size":4060,"type":"upstream"},{"name":"PropertyEncoder","size":4138,"type":"upstream"},{"name":"ShapeEncoder","size":1690,"type":"upstream"},{"name":"SizeEncoder","size":1830,"type":"upstream"}],"type":"upstream"},{"name":"filter","children":[{"name":"FisheyeTreeFilter","size":5219,"type":"upstream"},{"name":"GraphDistanceFilter","size":3165,"type":"upstream"},{"name":"VisibilityFilter","size":3509,"type":"upstream"}],"type":"upstream"},{"name":"IOperator","size":1286,"type":"upstream"},{"name":"label","children":[{"name":"Labeler","size":9956,"type":"upstream"},{"name":"RadialLabeler","size":3899,"type":"upstream"},{"name":"StackedAreaLabeler","size":3202,"type":"upstream"}],"type":"upstream"},{"name":"layout","children":[{"name":"AxisLayout","size":6725,"type":"upstream"},{"name":"BundledEdgeRouter","size":3727,"type":"upstream"},{"name":"CircleLayout","size":9317,"type":"upstream"},{"name":"CirclePackingLayout","size":12003,"type":"upstream"},{"name":"DendrogramLayout","size":4853,"type":"upstream"},{"name":"ForceDirectedLayout","size":8411,"type":"upstream"},{"name":"IcicleTreeLayout","size":4864,"type":"upstream"},{"name":"IndentedTreeLayout","size":3174,"type":"upstream"},{"name":"Layout","size":7881,"type":"upstream"},{"name":"NodeLinkTreeLayout","size":12870,"type":"upstream"},{"name":"PieLayout","size":2728,"type":"upstream"},{"name":"RadialTreeLayout","size":12348,"type":"upstream"},{"name":"RandomLayout","size":870,"type":"upstream"},{"name":"StackedAreaLayout","size":9121,"type":"upstream"},{"name":"TreeMapLayout","size":9191,"type":"upstream"}],"type":"upstream"},{"name":"Operator","size":2490,"type":"upstream"},{"name":"OperatorList","size":5248,"type":"upstream"},{"name":"OperatorSequence","size":4190,"type":"upstream"},{"name":"OperatorSwitch","size":2581,"type":"upstream"},{"name":"SortOperator","size":2023,"type":"upstream"}],"type":"upstream"},{"name":"Visualization","size":16540,"type":"upstream"}]
	}]
;

let canvas = document.querySelector('#svg-canvas')
	, initHeight = 900
	, initWidth = 1600
	, centerPoint = [initWidth / 2, initHeight / 2]
	, svgNode = createSvg()
	, nodeArr = []
	, upstreamArr = []
	, initCount = 0
	, aniTime = 1000
	, fps = 16
	, interval = 1000 / fps
	, aniTimes = aniTime / interval
	, textFontSize = 12     //文字大小
	, textRectHeight = 12    //文字节点大小
	, textRectWidth = 120
	, btnNodeRadious = 5    //点击按钮半径大小
	, lineNodeWidth = 200   //点击按钮间的距离大小
	, levelHeight = {}      //设置每个层级的高度最后大小
	, aniFlag = true
	, heightOffest = 0
	, widthOffest = initWidth / 2
	, upstreamLength = svgData[0].children.length
;



getPosition(svgData, nodeArr);
getPosition(upstremData, upstreamArr);


//绘画逻辑
initDraw(nodeArr, svgNode);
initDraw(upstreamArr, svgNode);

//添加节点
canvas.append(svgNode);


//===============================================================函数方法===============================================================
/**
 * 创建SVG节点
 * @return {Element} 创建完成的SVG节点
 */
function createSvg() {
	let svg = document.createElementNS(SVG_NS, 'svg');
	svg.setAttribute('width', initWidth);
	svg.setAttribute('height', initHeight);
	svg.setAttribute('xmlns', "http://www.w3.org/2000/svg");
	svg.setAttribute('version', "1.1");
	
	return svg;
}

/**
 * 初始化展示节点的位置
 * @param data {Array} 树原数据
 * @param arr {Array} 处理的数据
 */
function getPosition(data, arr) {
	//获取初始位置
	initPosition([], data, arr, 0);
	
	//确认节点高度
	confirmItemHeight(arr, true);
	
	//确定各个节点的位置
	setNodeHeight(arr, true);
	console.log(arr);
	
	//设置SVG的高度和宽度
	if(arr[0].height > initHeight){
		svgNode.setAttribute('height', arr[0].height);
	}
	
	
	initHeight = arr[0].height;
}


function initDraw(arr, svgNode) {
	arr.forEach(function (item, index) {
		let gNode = create('g',{
				'class': item.nodeName,
				'transform': `translate(${item.level * lineNodeWidth + widthOffest}, ${item.verticalCenterPoint})`
			})
			, pointNode = create('circle', {
				'cx': item.hasOwnProperty('type') && item.type === 'upsream' ? -10 : 10,
				'cy': 0,
				'r': 5,
				'stroke': '#df6070',
				'stroke-width': '1',
				'fill': item.isExpand ? 'transparent' : '#b1c4dd',
				'class': item.nodeName,
			})
//				, controlPoint = getControlPoint(item, true)
			, lineNode
		;
		
		
		//原点添加事件
		pointNode.addEventListener('click', (e) => {
			let levelArr = e.target.classList[0].split('-')
				, dataArr = levelArr.length > 1 && parseInt(levelArr[1]) > upstreamLength - 1 ? upstremData : nodeArr
				
				, item = getNodeItem(levelArr, dataArr)
			;
			
			if(aniFlag && item.hasOwnProperty('children') && item.children.length !== 0){
				//单点信息折叠
				expendFlexTree(item, e.target);
			}
			
		});
		
		if(item.level !== 0){
			let bigOffest = item.hasOwnProperty('type') && item.type === 'upstream' ? 5: 15
				, smallOffest = item.hasOwnProperty('type') && item.type === 'upstream' ? 15 : 5
				, startPoint = [item.parent.level * lineNodeWidth + bigOffest + widthOffest, item.parent.verticalCenterPoint]
				, endPoint = [item.level * lineNodeWidth + smallOffest + widthOffest, item.verticalCenterPoint]
				, controlPoint = genControlPoint(startPoint, endPoint)
			;
			lineNode = create('path', {
				'd': `M ${startPoint[0]} ${startPoint[1]} C ${controlPoint.c1[0]} ${controlPoint.c1[1]} ${controlPoint.c2[0]} ${controlPoint.c2[1]} ${endPoint[0]} ${endPoint[1]}`,
				'stroke': '#ccc',
				'stroke-width': '1',
				'fill': 'none',
				'class':item.nodeName
			});
			svgNode.appendChild(lineNode)
		}
		
		gNode.appendChild(pointNode);
		svgNode.appendChild(gNode);
		if(item.hasOwnProperty('children') && item.children.length !== 0  && item.isExpand){
			initDraw(item.children, svgNode);
		}
	});
}


/**
 * 初始化展示节点的位置
 * @param parentData {Object} 父节点
 * @param data {Array} 当前节点同级节点合集
 * @param arr {Object} 当前节点上级节点添加的子集节点
 * @param level {number} 当前的节点级别
 */
function initPosition(parentData, data, arr, level) {
	for(let index = 0; index < data.length; index++) {
		let item = data[index]
			, positionItem = {}
		;
		
		Object.assign(positionItem, {
			range: [],
			verticalCenterPoint: 0,
//				level: level,
			name: item.name,
			height: textRectHeight,
			children: [],
			parent: parentData,
			isExpand: true,
			newHeight: textRectHeight,
			newVerCenPoint: 0,
			type: item.type,
		});
		
		if(parentData.length !== 0){
			// positionItem.type = item.type;
			positionItem.level = positionItem.type === 'upstream' ? level - 1 : level + 1;
			// positionItem.nodeName = parentData.nodeName + '-'+ index;
			positionItem.nodeName = parentData.nodeName + '-'+ (positionItem.type === 'upstream' ? index + upstreamLength : index);
		}
		else{
			positionItem.level = 0;
			positionItem.nodeName = "0";
		}

//			positionItem.nodeName = level === 0 ? "0" : parentData.nodeName + '-'+ index;
		
		arr.push(positionItem);
		if(item.hasOwnProperty('children') && item.children.length){
			initPosition(positionItem, item.children, positionItem.children, positionItem.level);
		}
	}
}


/**
 * 确认节点高度
 * @param arr{Array} 单个节点的子节点
 * @param flag{Boolean} 单个节点的子节点
 */
function confirmItemHeight(arr, flag) {
	let heightStr = flag ? 'height' : 'newHeight';
	arr.forEach(function (item) {
		if(!item.isExpand){
			item[heightStr] = textRectHeight;
		}
		setParentHeight(item.level, item, flag);
		if(item.hasOwnProperty('children') && item.children.length !== 0 && item.isExpand){
			confirmItemHeight(item.children, flag);
		}
	})
}


/**
 * 设置父级节点的高度
 * @param level {number} 当前的层级
 * @param item {Object} 当前的节点
 * @param flag {Boolean} 设置中心点还是点击后新的中心点
 */
function setParentHeight(level, item, flag) {
	let heightContent = 0
		, heightStr = flag ? 'height' : 'newHeight'
	;
	if(level !== 0){
		let addNum = item.type === 'upstream' ? 1 : -1;
		item.parent.children.forEach(function (node) {
			heightContent += node[heightStr];
		});
		item.parent[heightStr] = heightContent;
		setParentHeight(level + addNum, item.parent, flag);
	}
}

/**
 * 設置節高度範圍和其中心點位置
 * @param arr {Array} 需要计算的数组
 * @param flag {Boolean} 设置中心点还是点击后新的中心点
 */
function setNodeHeight(arr, flag) {
	let initHeight = arr[0].level === 0 ? heightOffest : arr[0].parent.range[0]
		, centerPoint = flag ? 'verticalCenterPoint' : 'newVerCenPoint'
		, heightStr = flag ? 'height' : 'newHeight'
	;
	
	// if(!flag) console.log(heightOffest);
	
	
	arr.forEach(function (item) {
		item.range = [initHeight, initHeight + item[heightStr]];
		item[centerPoint] = initHeight + item[heightStr] / 2;
		initHeight += item[heightStr];
		if(item.hasOwnProperty('children') && item.children.length !==0){
			setNodeHeight(item.children, flag);
		}
	});
}

/**
 * 根据节点位置信息获取节点
 * @param arr {Object} 节点位置信息
 * @param obj {Object} 取节点的数组信息
 */
function getNodeItem(arr, obj) {
	let item = obj;
	for(let i = 0; i < arr.length;i++){
		let index = item.hasOwnProperty('type') && item.type === 'upstream' && i !== 0 ? parseInt(arr[i]) - upstreamLength : parseInt(arr[i]);
		if(i !== 0){
			item = item.children[index]
		}
		else{
			item = item[index];
		}
	}
	return item;
}

/**
 * 折叠数据
 */
function expendFlexTree(item, node) {
	//1.获取哪些要叠
	//2.折叠的参数是什么
	//3.注意清空
	let nodeName = item.nodeName
		, pathArr = document.getElementsByTagName('path')
		, gArr = document.getElementsByTagName('g')
		, flexExpendArr = []
		, objArr = []
		, gNodeArr = []
		, gObjArr = []
		, fillColor = node.attributes['fill'].value === 'transparent' ? '#b1c4dd' : 'transparent'
	;
	
	item.isExpand = !item.isExpand;
	node.setAttribute('fill', fillColor);
	
	//确认节点高度
	confirmItemHeight(nodeArr, false);
	confirmItemHeight(upstreamArr, false);
	
	if(nodeArr[0].newHeight < initHeight){
		heightOffest = (initHeight - nodeArr[0].newHeight) / 2;
	}
	else{
		heightOffest = 0;
	}
	
	//确定各个节点的位置
	setNodeHeight(nodeArr, false);
	setNodeHeight(upstreamArr, false);
	
	//处理路径数组
	for(let i = 0;i < pathArr.length;i++){
		
		
		let pathItem = pathArr[i]   //单个的节点对象
			, pathObj = {
				count: 0,
				endPoint: [],
				startPoint: [],
				nowPoint: [],
				gapPoint: [],
			}
			, bigOffest = item.hasOwnProperty('type') && item.type === 'upstream' ? 15 : 15
			, smallOffest = item.hasOwnProperty('type') && item.type === 'upstream' ? 5 : 5
			, className = pathItem.classList
			, dataArr = className[0].split('-').length > 1 && parseInt(className[0].split('-')[1]) > upstreamLength -1 ? upstreamArr : nodeArr
			, childItem = getNodeItem(className[0].split('-'), dataArr)
			, newSContolPoint = [childItem.parent.level * lineNodeWidth + bigOffest  + widthOffest,childItem.parent.newVerCenPoint]
			, newEContolPoint = [childItem.level * lineNodeWidth + smallOffest  + widthOffest, childItem.newVerCenPoint]
			, newContolPoint = genControlPoint(newSContolPoint, newEContolPoint)
			, indexArr = [1, 2, 4, 5, 6, 7, 8, 9]
		;
		
		
		flexExpendArr.push(pathArr[i]);
		pathObj.startPoint = pathArr[i].attributes['d'].value.split(' ');
		if(className.length !==0 && className[0].indexOf(nodeName) > -1 && isChildNode(nodeName, className[0]) && isFlex(childItem).item === item){
//			if(className.length !==0 && className[0].indexOf(nodeName) > -1 && isChildNode(nodeName, className[0]) && (className !== nodeName && )){
			if(!item.isExpand){
				pathObj.endPoint = ['M',item.level * lineNodeWidth + bigOffest  + widthOffest,item.newVerCenPoint, 'C',item.level * lineNodeWidth + bigOffest  + widthOffest,item.newVerCenPoint, item.level * lineNodeWidth + bigOffest  + widthOffest,item.newVerCenPoint,item.level * lineNodeWidth + bigOffest  + widthOffest,item.newVerCenPoint];
			}
			else{
				pathObj.endPoint = ['M',newSContolPoint[0], newSContolPoint[1], 'C',newContolPoint.c1[0] ,newContolPoint.c1[1],newContolPoint.c2[0] ,newContolPoint.c2[1], childItem.level * lineNodeWidth + 5 , childItem.newVerCenPoint];
			}
		}
		else if(isFlex(childItem).flag){
			pathObj.endPoint = ['M',newSContolPoint[0], newSContolPoint[1], 'C',newContolPoint.c1[0] ,newContolPoint.c1[1],newContolPoint.c2[0] ,newContolPoint.c2[1], newEContolPoint[0] , newEContolPoint[1]];
		}
		else{
//				pathObj.endPoint = ['M',item.level * lineNodeWidth + 15 ,item.newVerCenPoint, 'Q',item.level * lineNodeWidth + 15 ,item.newVerCenPoint,item.level * lineNodeWidth + 15 ,item.newVerCenPoint];
			pathObj.endPoint = ['M',childItem.parent.level * lineNodeWidth + bigOffest  + widthOffest,childItem.parent.newVerCenPoint, 'C',childItem.parent.level * lineNodeWidth + bigOffest  + widthOffest,childItem.parent.newVerCenPoint, childItem.parent.level * lineNodeWidth + bigOffest  + widthOffest,childItem.parent.newVerCenPoint,childItem.parent.level * lineNodeWidth + bigOffest  + widthOffest,childItem.parent.newVerCenPoint];
		}
		for(let j = 0; j < indexArr.length;j++){
			pathObj.nowPoint.push(parseInt(pathObj.startPoint[indexArr[j]]));
			pathObj.gapPoint.push((parseInt(pathObj.endPoint[indexArr[j]]) - parseInt(pathObj.startPoint[indexArr[j]])) / aniTimes);
		}
		
		objArr.push(pathObj);
		pathObj = {
			count: 0,
			endPoint: [],
			startPoint: [],
			nowPoint: [],
			gapPoint: [],
		};
		
		childItem.verticalCenterPoint = childItem.newVerCenPoint;
		childItem.height = childItem.newHeight;
	}
	
	//处理g节点
	for(let i = 0;i < gArr.length;i++){
		let className = gArr[i].classList
			, gAniObj = {
				count: 0,
				endPoint: [],
				startPoint: [],
				nowPoint: [],
				gapPoint: [],
			}
			, dataArr = className[0].split('-').length > 1 && parseInt(className[0].split('-')[1]) > upstreamLength -1 ? upstreamArr : nodeArr
			, childItem = getNodeItem(className[0].split('-'), dataArr)
			, startPoint = getTransformPoint(gArr[i].attributes['transform'].value)
		;
		
		gNodeArr.push(gArr[i]);
		gAniObj.startPoint = [startPoint[0], startPoint[1]];
		console.log('ddddddd');
		console.log(childItem);
		if(className.length !==0 && className[0].indexOf(nodeName) > -1 && isChildNode(nodeName, className[0])  && isFlex(childItem).item === item){
			if(!item.isExpand){
				gAniObj.endPoint = [item.level * lineNodeWidth + widthOffest, item.verticalCenterPoint];
				gAniObj.startR = 5;
				gAniObj.endR = 0;
			}
			else{
				gAniObj.endPoint = [childItem.level * lineNodeWidth + widthOffest, childItem.verticalCenterPoint];
				gAniObj.startR = 0;
				gAniObj.endR = 5;
			}
		}
		else if(isFlex(childItem).flag){
			gAniObj.endPoint = [childItem.level * lineNodeWidth + widthOffest, childItem.newVerCenPoint];
			gAniObj.startR = 5;
			gAniObj.endR = 5;
		}
		else{
			gAniObj.endPoint = [childItem.level * lineNodeWidth + widthOffest, childItem.newVerCenPoint];
			gAniObj.startR = 0;
			gAniObj.endR = 0;
		}
		console.log('eeeeeeee');
		// if(childItem.nodeName === "0-13"){
		//
		// }
		for(let i = 0; i <=1;i++){
			gAniObj.gapPoint.push((gAniObj.endPoint[i] - gAniObj.startPoint[i]) / aniTimes);
			gAniObj.nowPoint.push(gAniObj.startPoint[i]);
		}
		gAniObj.gapR = (gAniObj.endR - gAniObj.startR) / aniTimes;
		gAniObj.nowR = gAniObj.startR;
		
		gObjArr.push(gAniObj);
		gAniObj = {
			count: 0,
			endPoint: [],
			startPoint: [],
			nowPoint: [],
			gapPoint: [],
		}
	}
	
	
	console.log(nodeArr);
	window.flexExpendArr = flexExpendArr;
	window.objArr = objArr;
	window.gObjArr = gObjArr;
	window.gNodeArr = gNodeArr;
//		console.log(flexExpendArr, objArr,'first');
	
	requestAnimationFrame(update);
	console.log(node.onclick);
}

function update(){
	let flexExpendArr = window.flexExpendArr
		,objArr = window.objArr
		, gObjArr = window.gObjArr
		, gNodeArr = window.gNodeArr
	;
	aniFlag = false;
	objArr.forEach(function (item, index) {
		let cPoint01X = item.nowPoint[2] + item.gapPoint[2]
			, cPoint01Y = item.nowPoint[3] + item.gapPoint[3]
			, cPoint02X = item.nowPoint[4] + item.gapPoint[4]
			, cPoint02Y = item.nowPoint[5] + item.gapPoint[5]
			, ePointX = item.nowPoint[6] + item.gapPoint[6]
			, ePointY = item.nowPoint[7] + item.gapPoint[7]
			, sPointX = item.nowPoint[0] + item.gapPoint[0]
			, sPointY = item.nowPoint[1] + item.gapPoint[1]
			, newPath = ['M', sPointX ,sPointY, 'C', cPoint01X, cPoint01Y, cPoint02X, cPoint02Y, ePointX, ePointY]
		;
		
		item.nowPoint = [sPointX,sPointY , cPoint01X, cPoint01Y, cPoint02X, cPoint02Y, ePointX, ePointY];
		flexExpendArr[index].setAttribute('d',newPath.join(' '));
		cPoint01X = null;
		cPoint01Y = null;
		cPoint02X = null;
		cPoint02Y = null;
		ePointX = null;
		ePointY = null;
		sPointY = null;
		sPointY = null;
		newPath = [];
	});
	
	gObjArr.forEach(function (item, index) {
		let pointX = item.nowPoint[0] + item.gapPoint[0]
			, pointY = item.nowPoint[1] + item.gapPoint[1]
			, r = item.nowR + item.gapR
			, transformStr = `translate(${pointX}, ${pointY})`
		;
		item.nowR = r;
		item.nowPoint = [pointX, pointY];
		gNodeArr[index].setAttribute('transform', transformStr);
		gNodeArr[index].children[0].setAttribute('r', r);
		pointX = null;
		pointY = null;
		transformStr = null;
	});
	
	initCount += 1;
	
	if(initCount < aniTimes){
		requestAnimationFrame(update);
	}
	else{
		window.flexExpendArr = [];
		window.objArr = [];
		window.gArr = [];
		window.gObjArr = [];
		
		objArr = [];
		flexExpendArr = [];
		gObjArr = [];
		gArr = [];
		initCount = 0;
		aniFlag = true;
	}
}

function getTransformPoint(str) {
	let num1 = str.split("(")
		, num2 = num1[1].split(")")
		, result = num2[0].split(',')
		, arr = []
	;
	arr = [parseInt(result[0]), parseInt(result[1])];
	return arr;
}

function isChildNode(parentName, childName) {
	let flag = true;
	if(childName.length > parentName.length){
		for(let i = 0; i <= parentName.length;i++){
			if(i !== parentName.length){
				if(childName[i] !== parentName[i]) flag = false;
			}
			else{
				if(childName[i] !== '-') flag = false;
			}
		}
	}
	else{
		flag = false;
	}
	return flag;
}

function isFlex(item) {
	let flag = item.hasOwnProperty('parent') && item.parent.length !== 0
//            , flexFlag = true
		, obj = {
			flag : true,
			item: {}
		}
	;
	if(flag){
		if(item.parent.isExpand === false){
			obj.flag = false;
			obj.item = item.parent
		}
		else{
			obj = isFlex(item.parent)
		}
	}
	
	
	return obj;
}

function getRadiusX(radius, height) {
	let heightOffest = Math.abs(height - centerPoint[1]);
	
	return Math.sqrt(Math.pow(radius, 2) - Math.pow(heightOffest, 2));
}

function clone(o) {
	var type = typeOf(o)
	if(['number', 'string', 'boolean', 'null', 'undefined', 'regexp'].indexOf(type)>-1){
		return o;
	}else if(type==='array'){
		var t = []
		for(var i=0, l=o.length; i<l; i++){
			t.push(clone(o[i]))
		}
		return t
	}else if(type==='object'){
		var t = {}
		for(var k in o){
			if(k !== 'parent'){
				t[k] = clone(o[k])
			}
			else{
				t[k] = t[k];
			}
			
		}
		return t
	}
}

function typeOf(o) {
	return Object.prototype.toString.call(o).slice(8, -1).replace(/^[A-Z]+/, function (m) {
		return m.length === 1 ? m.toLowerCase() : m.slice(0, -1).toLowerCase() + m.slice(-1);
	});
}



/**
 * 创建svg相关元素
 * @param tag   svg标签
 * @param attr  svg元素属性
 * @return {Element}
 */
function create(tag, attr) {
	if(!document.createElementNS) return;//防止IE8报错
	
	let svgElement = document.createElementNS(SVG_NS, tag);
	for(let key in attr) {
		svgElement.setAttribute(key, attr[key]);
	}
	return svgElement;
}