var f = new Promise((resolve,reject)=>{setTimeout(function () {resolve(5)},0)});
console.log(f);
f.then((rez)=>{console.log(rez)});
// let f=()=>4;
// console.log(f());
// const fa = async ()=>{setTimeout(()=>{yield 1},0)};
// var fv = fa();
// console.log(fv);
