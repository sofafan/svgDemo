

function genRandomPoint(range){
	let r = range || 500;

	return [parseInt(Math.random() * r), parseInt(Math.random() * r)];
}

function getSAndE(){
	let points = [];

	points.push(genRandomPoint())
	points.push(genRandomPoint())

	return {
		start: points[0]
		, end: points[1]
	};
}

//get contril
function genControlPoint(start, end){
	let x1 = start[0];
	let x2 = end[0];
	let y1 = start[1];
	let y2 = end[1];

	let deltaX = x2 - x1;
	let deltaY = y2 - y1;

	let c1 = [];
	let c2 = [];

	if(deltaX === 0){
		if(deltaY > 0){
			let offsetX = Math.abs(deltaY / 2);
			c1[0] = x1 - offsetX;
			c2[0] = x2 + offsetX;
			c1[1] = y1;
			c2[1] = y2;
		} else if(deltaY < 0) {
			let offsetX = Math.abs(deltaY / 2);
			c1[0] = x1 + offsetX;
			c2[0] = x2 - offsetX;
			c1[1] = y1;
			c2[1] = y2;
		} else {
			c1[0] = c2[0] = x1;
			c1[1] = c2[1] = y1;
		}
	} else {
		let slope = deltaY / deltaX;
		if(slope >= -1 && slope <= 1){
			let middleX = deltaX / 2 + x1;
			c1[0] = c2[0] = middleX;
			c1[1] = y1;
			c2[1] = y2;
		} else {
//             let middleY = deltaY / 2 + y1;
//             c1[1] = c2[1] = middleY;
//             c1[0] = x1;
//             c2[0] = x2;

//             优化一版
//             let middleY = deltaY / 2 + y1;
//             c2[1] = y2;
//             c1[1] = y1
//             c1[0] = x2;
//             c2[0] = x1;

//              优化二版
				let middleX = deltaX * (Math.abs(1 / slope) / 2) + x1;
				c1[0] = c2[0] = middleX;
				c1[1] = y1;
				c2[1] = y2;
		}
	}

	return {
		// c1: c1.join(' ')
		// , c2: c2.join(' ')
		c1: c1
		, c2: c2
	}
}

function insertDom(str){
	let node = document.createElement('div');
	node.style.cssText = `
		width: 1000px;
		height: 600px;
		border: 1px solid black;
		display: block;
		position: absolute;
	`

	node.innerHTML = str;
	document.body.appendChild(node);
}

function genSVGStr(n, total){

//     let line = getSAndE();
//     let line = genEndPoint([500,300], 200)
	let line = genSplitCircleEndPoint([500,300], 200, n, total)

	let offset = [];
	if(line.start[0] > line.end[0]){
		offset.push(-50);
	} else {
		offset.push(50)
	}

//     let curve = genControlPoint(line.start, line.end);    
	let curve = genOffsetControl(line.start, line.end, {
		s:offset
		, e: offset
	})

	line.start = line.start.join(' ');
	line.end = line.end.join(' ');

	let h = parseInt(n * (360 / total));

	let str = `<?xml version="1.0" standalone="no"?>

	<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
	"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

	<svg width="100%" height="100%" version="1.1"
	xmlns="http://www.w3.org/2000/svg">


	<!--<path d="M${line.start} L${line.end}" style="fill: transparent;stroke:rgba(0,0,255,0.5);stroke-width:2"/>-->

	<!--<path d="M${line.start} C${curve.c1} ${curve.c2} ${line.end}"  style="fill: transparent;stroke:rgba(255,0,0,0.5);stroke-width:2"/>-->
	<path d="M${line.start} C${curve.c1} ${curve.c2} ${line.end}"  style="fill: transparent;stroke:hsla(${h},100%,50%,0.5);stroke-width:1"/>

	</svg>
	`

	return str;
}

function genFinalResult(n){
	for(let i = 0; i < n; i++){
		insertDom(genSVGStr(i, n));
	}
}

function genEndPoint(start, r){
	let ra = Math.random() * Math.PI * 2;
	let y = start[1] + r * Math.sin(ra);
	let x = start[0] + r * Math.cos(ra);
	return {
		start: start
		, end: [x, y]
	}
}

function genSplitCircleEndPoint(start, r, i, total){
	let singleRa = 2 * 314 / total;
	let nowRa = singleRa * i / 100;
	let y = start[1] + r * Math.sin(nowRa);
	let x = start[0] + r * Math.cos(nowRa);
	return {
		start: start
		, end: [x, y]
	}
}

/**
op = {
	s: [offsetX, offsetY]
	, e: [offsetX, offsetY]
}
*/
function genOffsetControl(start, end, op){
	start[0] += op.s[0] || 0;
	start[1] += op.s[1] || 0;
	end[0] += op.e[0] || 0;
	end[1] += op.e[1] || 0;
	return genControlPoint(start, end);
}
//c1开始点 c2结束点