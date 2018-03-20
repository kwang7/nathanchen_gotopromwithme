var OAR = true;

var OARmed = [2,6,9];
var swissmed = [5,6,4];

var data = OARmed;

var drawDot = function( xc,yc,rad,color){
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", xc);
    circle.setAttribute("cy", yc);
    circle.setAttribute("r", rad);
    circle.setAttribute("fill", color);
    svg.appendChild(circle);
}

var draw3 = function(e){
    drawDot(250,100,3232523,"#FFD700");
    drawDot(100,300,250392859023,"#C0C0C0");
    drawDot(300,300,2385093285092385,"#CD7F32");

    
}
var swich = function(e){
    svg.innerHTML = "";
    if (OAR) {
	data = OARmed;
	OAR = !OAR;
    }
    else{
	data = swissmed;
	OAR = !OAR;
    }
    draw3();
    
    d3.selectAll("circle").data(data).attr("r",
					   function(d){
					       console.log(d);
					       return 10 * d;
					   });
    
}

var buton = document.getElementById("switch");
buton.addEventListener("click", swich);

var svg = document.getElementById("vimage");

