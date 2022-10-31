////////////////////////////////////////
//
// this is how to readline from the keyboard (like prompt in hTML page)
// chinese !!!!! 
// we will learn later in the course .......
////////////////////////////////////////
var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const main = async() => {


    const prompt = async (msg) => {
        const answer = await new Promise(resolve => {
            rl.question(msg, resolve)
        })
        return answer
    }    
///////////////////////////////////////////


    // your program here ...............
    const a1 = await prompt('number1 ?')
    const a2 = await prompt('number1 ?')

   
    console.log(a1)
    console.log(a2)


///////////////////////////////////////
    // close the program
    rl.close()
}

main()
///////////////////////////////////////