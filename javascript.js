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
