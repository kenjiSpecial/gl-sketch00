/**
 * Constructor
 */

var ksMat = require("ks-matrix");

function Triangle( gl, program, x, y, rad, col ) {
    //var curCol = {r: col.r, g: col.g, b: col.b};

    var xPos = 2 * x / window.innerWidth - 1;
    var yPos = 1 - 2 * y / window.innerHeight;

    this.vertices = [];
    this.rad = rad;

    var theta, xx, yy;
    for(var ii = 0; ii < 3; ii++){
        theta = ii / 3 * 2 * Math.PI;
        xx    = this.rad / window.innerWidth * Math.cos(theta);
        yy    = this.rad / window.innerHeight * Math.sin(theta);

        this.vertices.push(xx, yy, col[0], col[1], col[2]);
    }

    this.x = xPos;
    this.y = yPos;

    this.mat  = new ksMat.Matrix4();
    this.mat.translate(this.x, this.y, 0);

    this.verticesArray = new Float32Array(this.vertices);

    // ====================

    var vertexColorBuffer = gl.createBuffer();
    if(!vertexColorBuffer){
        console.log("Failed to create the buffer object."); return;
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, vertexColorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.verticesArray, gl.STATIC_DRAW);

    var FSIZE = this.verticesArray.BYTES_PER_ELEMENT;

    var a_Position = gl.getAttribLocation( program, "a_Position" );
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, FSIZE * 5, 0);
    gl.enableVertexAttribArray(a_Position);

    var a_Color = gl.getAttribLocation( program, 'a_Color' );
    gl.vertexAttribPointer(a_Color, 3, gl.FLOAT, false, FSIZE * 5, FSIZE * 2);
    gl.enableVertexAttribArray(a_Color);  // Enable the assignment of the buffer object

    gl.bindBuffer(gl.ARRAY_BUFFER, null);
}

Triangle.prototype = {
    number : 3,

    x   : null,
    y   : null,


    rad : null,
    verticesArray : null,

    update : function(){
        //this.mat =

        //return this.mat;
    }
};

/**
 * Export
 */
module.exports = Triangle;
