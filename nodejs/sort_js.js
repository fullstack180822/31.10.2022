
const list1 = [ 1, 100, 2, 200, 3, -1]

// sort func
function my_sort(a, b) {
    // return +1 or higher -- a is smaller    --> a, b
    // return 0 -- they are the same       --> a,b / b, a
    // return -1 or lower-- b is smaller   --> b, a
    // if (a > b) { 
    //     return 1
    // }
    // else if (a < b) {
    //     return -1
    // }
    // else
    //     return 0;
    return a - b;
}

//list1.sort( my_sort )

list1.sort( function (a, b) { return a - b; } )
list1.sort( (a, b) => a - b  )

function my_for_each( x ) { 
    console.log(`** ${x} **`)
}
list1.forEach( my_for_each )
list1.forEach( console.log )

for(let x of list1) {
    console.log(`** ${x} **`)
}

list1.forEach( my_for_each )

console.log(list1);

list1.forEach( x => console.log(`-- ${x} **`) )

// 1, 10, 10 
// 1, 10, 2, 10
// a, az, z

// create a list of numbers (minus and plus numbers )
// sort the list by the numeric logic above)
// print the items using forEach when the item is minus print M number , positive P number , for 0 Zero
// [-10,-20,0, 1, 3]
// M -10
// M -20
// Zero
// P 1
// P 3

// *Bonus:
// list1 = [ { name: 'moshe', age: 33, weight: 70},
//           { name: 'danny', age: 18, weight: 80},
//           { name: 'rina', age: 20, weight: 60}]
// sort this list 3 times + print:
// by age, by weight, **etgar++: by name -- (hint: write 3 sort methods)


