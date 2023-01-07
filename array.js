const a= [3,4,5,1,2];
console.log(a);

const arr= new Array(4,3,1,7,9,5);
console.log(arr);

arr.push(105);
console.log(arr);
// 4 start from below
arr.unshift(89);
console.log(arr);

arr.pop()
console.log(arr)

arr.shift()
console.log(arr)

// a.includes(43)
console.log( a.includes(43))


let p= [4,6,7,2,6]
let q= [2,6,8,22,32]
let r= [...p,...q]
console.log(r)
let s= q.concat(p);
console.log(s)

//for loop
for(var i=0; i<5; i++){
    console.log(i);
}

//for of
for(let t of p){
    console.log(t)
}

//there is also forEach , but yk my lazyness

let joining= [1,24,64,23]
console.log(joining.join())
// to remove these coma's use below empty string method

console.log(joining.join(''))

let filter= p.filter(number=> number>4)
console.log(filter)

let map= q.map(number=> number*3)
console.log(map)

