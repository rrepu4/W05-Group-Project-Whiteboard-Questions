console.log('Hello!');

//1. A fucntion the reverses a string
console.log('%cReverse string using Reverse() method: ','font-weight:bold');
let avar = "Rohit Repu";
console.log('%cOriginal String is: ','font-weight:bold',  avar);
let bvar = avar.split('').reverse().join('');
console.log('%cReversed String is: ','font-weight:bold', bvar);
console.log('\n');

//1.a Reverse string using for loop
let original = "rohit repu";
let reversed = "";
for (let i = original.length - 1; i >= 0; i--) {
    reversed += original[i];
}
console.log('%cReverse String using for loop: ','font-weight:bold');
console.log('%cOriginal String is: ','font-weight:bold',original);
console.log('%cReversed String is: ','font-weight:bold', reversed);
console.log('\n');

//2. Fizz - Buzz
let cvar = 15;

console.log(cvar);
console.log(takeNumber(cvar));
console.log('\n');

function takeNumber(x){
//console.log(x);
if(x % 15 == 0){return 'FizzBuzz';}
else if(x % 3 == 0){return 'Fizz';}
else if(x % 5 == 0 ){return 'Buzz';}
else { return x;}
}


//3. Leap Year 
let varYear = '2024';
//takeYear(varYear);
console.log('Year entered is: ', varYear);
console.log('Is it a leap year?', takeYear(varYear));
console.log('\n');
function takeYear(paraYear){
if (paraYear % 400 == 0){return true;}
else if (paraYear % 100 == 0){return false;}
else if (paraYear % 4 == 0){return true;}
else { return false;}
}

// 4. BLT
//let ingredientsArray = ['bread','bacon','lettuce','tomatoes','onions','bread'];
let ingredients1 = ['bread','bacon','lettuce','tomatoes','onions','bread'];

console.log('The ingredients are:');
for (let i=0; i < ingredients1.length; i++)
    {
         console.log(i+1+'. '+ingredients1[i]);
    }
    //console.log('Total ingredients ', ingredients1.length);
    console.log('\n');
    let ivar = 0;
    Hasbreadbothsides(ingredients1);

  
    function Hasbreadbothsides(ingredients4){
       // console.log('is BLT?');
//console.log(ingredients4[0]);
//console.log(ingredients4[ingredients4.length - 1]);


        if(ingredients4[0] === "bread" && ingredients4[ingredients4.length - 1] === "bread"){
           // console.log('Has first and last item as bread');
            isBLT(ingredients4);
        }

    }
   
    function isBLT(ingredients5)
    {
        for (let item of ingredients5) {

         
            if (item === "bacon") {
               // console.log('has bacon');
                ivar++;
              }
              else if (item === "lettuce") {
               // console.log('has lettuce');
                ivar++;
              }
              else if (item === "tomatoes") {
               // console.log('has tomatoes');
                ivar++;
              }
            
        }
        
//console.log(ivar);
    }
    //console.log(ivar);
    if (ivar == 3){
        console.log('%cis a BLT Sandwich', 'color:grey');
    }
    else{
        console.log('%cIS NOT A BLT Sandwich','color:red');
    }