/**
 * Constructor
 */

function Triangle(x, y, rad) {
    var xPos = x / window.innerWidth - 1;
    var yPos = y / window.innerHeight - 1;

    this.vertices = [];
    this.rad = rad;

    var theta, xx, yy;
    for(var ii = 0; ii < 3; ii++){
        theta = ii / 3 * 2 * Math.PI;
        xx    = this.rad / window.innerWidth * Math.cos(theta);
        yy    = this.rad / window.innerHeight * Math.sin(theta);

        this.vertices.push(xx, yy);
    }

    this.verticesArray = new Float32Array(this.vertices);
}

Triangle.prototype = {
    x   : null,
    y   : null,
    rad : null,
    number : 3
};

/**
 * Export
 */
module.exports = Triangle;
