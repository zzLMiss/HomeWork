/* 模块功能主要由两个命令构成：export和import。
    export命令用于规定模块的对外接口，
    import命令用于输入其他模块提供的功能。 */
/* 第一种 */
export let a = 10;
export let b = 20;
export let c = 30;

/* 第二种 */
let aa ="hello";
let bb ="world";
let cc = "ES6";
/* 第三种 */
let firstName = "老王";
let lastName ="老宋";
let year = 1987;
export {
    aa,
    bb,
    cc,
    firstName as f,
    lastName as l,
    year,
    getStyle as g,
    setStyle as s
}

/* 第四种 */
export function show() {
    console.log("111");
}
export function hide() {
    console.log("222");
}
export function get() {
    console.log("get");
}

/* 第五种 */
function getStyle(){
    console.log("获取样式");
}
function setStyle(){
    console.log("设置样式");
}