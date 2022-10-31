const x = 1
switch (x > 5) {
    case 1: console.log('1') // x == 1 ?
    break;
    case 2: console.log('2') // x == 2 ?
    break;
    case 3: console.log('3')
    break;
    case 4: console.log('4')
    break;            
}

switch (true) {
    case x < -1: console.log('1') // x == 1 ?
    break;
    case x == 2: console.log('2') // x == 2 ?
    break;
    case x == 3: console.log('3')
    break;
    case x == 4: console.log('4')
    break;    
}