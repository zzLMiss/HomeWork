'use strict';

/* ES6 */
var ali = document.getElementById('tab').getElementsByTagName('li');
var oCon = document.getElementById('content').getElementsByTagName('ul');

var _loop = function _loop(i) {
    ali[i].onclick = function () {
        for (var _i = 0; _i < ali.length; _i++) {
            ali[_i].className = "";
        }
        ali[i].className = "current";
        for (var _i2 = 0; _i2 < oCon.length; _i2++) {
            oCon[_i2].style.display = 'none';
        }
        oCon[i].style.display = 'block';
    };
};

for (var i = 0; i < ali.length; i++) {
    _loop(i);
};
/* js */
/* window.onload=function(){
    var oBtn =document.getElementById('tab').getElementsByTagName('li');
    var oCon =document.getElementById('content').getElementsByTagName('ul');
    for(var i=0;i<oBtn.length;i++){
        oBtn[i].index = i;
        oBtn[i].onmousemove=function(){
            for(var i=0;i<oBtn.length;i++){
                oBtn[i].className='';
                this.className='current';
            }
            for(var a=0;a<oCon.length;a++){
                oCon[a].style.display='none';
                oCon[this.index].style.display='block';
            }
        }
    }
} */