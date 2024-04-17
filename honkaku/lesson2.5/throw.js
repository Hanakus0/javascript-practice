let x = 1;
let y = 0;

try {
  // if(y === 0) {
  //   throw new Error('0除算');
  // }
  let z = x / y;
  console.log(z);
} catch(e) {
  console.log(e.message);
}