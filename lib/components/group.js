/**
 * Constructor
 */

var group = {
    objects : [],
    type : [],
    objectNumArray : [],

    u_xformMatrix : null,

    setObject : function(obj){
        this.objects.push(obj);
    },

    update : function(){

    },

    draw : function(gl){
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        // ----------------------------------------

        var start = 0;
        for(var ii = 0; ii < this.objects.length; ii++ ){
            //console.log(this.objects[ii].mat.elements);
            gl.uniformMatrix4fv(this.u_xformMatrix, false, this.objects[ii].mat.elements);
            gl.drawArrays(gl.TRIANGLES, start, start + this.objects[ii].number);

            start += this.objectNumArray[ii];
        }

    }

};


/**
 * Export
 */
module.exports = group;
