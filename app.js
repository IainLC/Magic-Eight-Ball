userName= "Iain";
randomNumber = Math.floor(Math.random() * 8);
eightball = "";
userQuestion ="should I bother trying to learn how to code?";


userName ? console.log(`Hello! ${userName}!`) : console.log('hello!');

console.log(`User ${userName} whats to know: ${userQuestion}.`);

console.log('the eightball makes it known:')
switch (randomNumber) {
  case 1:
  eightball = 'It is certain';
  break;
  case 2:
  eightball ='It is decidedly so';
  break;  
  case 3:
  eightball ='Reply hazy try again';
  break;  
  case 4:
  eightball ='Cannot predict now';
  break;  
  case 5:
  eightball ='Do not count on it';
  break;  
  case 6:
  eightball ='My sources say no';
  break;
  case 7:
  eightball ='Outlook not so good';
  break;
  case 8:
  eightball ='Signs point to yes';
  break;
  default:
  eightball ='something went wrong.';
  break;
};
console.log(eightball);


console.log('the eightball reckons:')
if (randomNumber === 0 ){
  console.log ('It is certain');
} else if (randomNumber === 1 ){ 
	console.log ('It is decidedly so');
} else if (randomNumber === 2) {
  console.log ('Reply hazy try again');
} else if ( randomNumber === 3 ) {
  console.log ('Cannot predict now');
} else if (randomNumber === 4) { 
  console.log ('Do not count on it');
} else if (randomNumber === 5) {
  console.log ('My sources say no');
} else if (randomNumber === 6) {
  console.log ('Outlook not so good');
} else if (randomNumber === 7) {
  console.log ('Signs point to yes');
}

