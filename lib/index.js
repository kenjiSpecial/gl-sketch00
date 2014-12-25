/**
 * beefy-fun
 *
 * @package gl-sketch00
 * @author Kenji Saito <k.saito.1985@gmail.com>
 */
var ksGl = require("ks-gl-initializer");

var Circle = require("./components/circle");
var Triangle = require("./components/triangle");
var Rectangle = require("./components/rectangle");
var group = require("./components/group");

var canvas = document.getElementById("c");
var gl = ksGl.setupWebGL(canvas, { width: window.innerWidth, height: window.innerHeight });

if(!gl){
    return;
}

var program = ksGl.createProgramFromScripts(gl, ["vertex-shader", "fragment-shader"]);
gl.useProgram(program);

var triangle = new Triangle(gl, program, 100, 100, 200, [1.0, 1.0, 0.0]);
//var triangle2 = new Triangle(gl, program, 500, 300, 100, [1.0, 0.0, 0.0]);

// Pass the rotation matrix to the vertex shader
var u_xformMatrix = gl.getUniformLocation(program, 'u_xformMatrix');
group.u_xformMatrix = u_xformMatrix;
group.setObject(triangle);
//group.setObject(triangle2);

var request;
loop();

function loop(){
    group.update();
    group.draw(gl);

    request = requestAnimationFrame(loop);

}

