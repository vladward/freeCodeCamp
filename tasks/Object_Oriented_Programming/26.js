/*
Use an IIFE to Create a Module
 */

let funModule = (function () {
    return {
        isCuteMixin: function(obj) {
            obj.isCute = function() {
                console.log('cute')
            };
        },
        singMixin: function(obj) {
            obj.sing = function() {
                console.log("Singing to an awesome tune");
            };
        }
    }
})()
