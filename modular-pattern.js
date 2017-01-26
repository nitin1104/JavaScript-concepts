var myModule = (function (window){
    
// Understanding Scope and ‘this’

    var nav = document.querySelector('.nav');
    var _toggleNav = function () {        
        console.log(this);
        setTimeout(function () {
            console.log(this);
        }, 1000);
    };

    nav.addEventListener('click', _toggleNav, false);

    function _calculateLetterSpacing (fontSize, lineHeight) {

        var theCalculation = fontSize * lineHeight / 1000;

        var letterSpacing = theCalculation.toFixed(2);
        
        console.log('Letter Spacing', letterSpacing);
        
        return letterSpacing;
    }

    return {
        myFunction: function () {
            console.log('My Function from IIFE');
        },
        toExpose: _calculateLetterSpacing
    }

})(window);

myModule.myFunction();
myModule.toExpose(16, 24);