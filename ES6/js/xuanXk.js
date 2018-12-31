 /* ES6 */
 let ali =document.getElementById('tab').getElementsByTagName('li');
 let oCon =document.getElementById('content').getElementsByTagName('ul');
   for(let i = 0;i < ali.length;i++){
       ali[i].onclick = ()=>{
           for(let i=0;i<ali.length;i++){
               ali[i].className = "";
           }
           ali[i].className = "current";
           for(let i=0;i<oCon.length;i++){
               oCon[i].style.display='none';  
           }
           oCon[i].style.display='block';
       }
   }; 

    /* let fn=()=>{
        console.log('hello');
    }
    fn(); */
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