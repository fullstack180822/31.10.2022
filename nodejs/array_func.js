
const list1 = [1,4,8,20,30]
const over_18 = list1.filter(e => e > 18);
console.log(over_18);

const under_18 = list1.filter(e => e < 18);
console.log(under_18);

console.log(list1.every(e => e > 18));
console.log(list1.every(e => e > 0));

console.log([1,2,3,4].map(e => e * e))
console.log([1,2,3,4].map(e => ` ${e} `))
console.log([1,2,3,4].map(e => e * e).map(e => `${e} is ${e % 2 == 0 ? 'zugi' : 'e-zugi'}`))

// c = prompt();
// while (c > 0) { 
//     c = prompt();
// }

// c = 0
// do {
//     c = prompt()
// }
// while (c > 0)

const list3 = [ [4, 5, -6], [2, -5, -9, 11, 14], [-3, 7 , -88, 99], [1] ]
for (let element_list of list3) {
    for (let e of element_list.sort((a,b) => a - b)) {
        console.log(e)
    }
    console.log('---------');
}


