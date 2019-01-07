
/* import命令输入的变量都是只读的，因为它的本质是输入接口 */
import {a,b,c,aa,bb,cc,f,l,year} from "./base";
/* import * as Base from "./base";

console.log({a,b,c});
console.log({aa,bb,cc})
console.log(Base.f,Base.l,Base.year);
Base.show();
Base.hide();
Base.get();
Base.g();
Base.s();

import box, { demo, count } from "./login";
box(); //给回调函数命名为box
demo();
console.log({count}); */

function setName(element){
    element.textContent = `我是${f},我是${l},我的年龄${year}`
}
setName(box);