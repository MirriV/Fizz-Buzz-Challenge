

  for (let x=1 ; x<=100; x++){

    if (x%15===0){
      console.log("FizzBuzz");
    }
    else if((x%3)===0){
      console.log("Fizz");
    }
    else if((x%5)===0){
      console.log("Buzz");
    }
    else{
      console.log(x);
    }
  
  }

/*for (let i=1; i<=100; i++) {

 // are always divisible by 15
 // Therefore, "FizzBuzz" is printed in place of that number
 if (i%15 == 0) {
 document.write("FizzBuzz" + " ");
 }
// "Fizz" is printed in place of numbers
 // that are divisible by 3
 else if ((i%3) == 0) {
 document.write("Fizz" + " ");
 }
// "Buzz" is printed in place of numbers
 // that are divisible by 5
 else if ((i%5) == 0) {
 document.write("Buzz" + " ");
 }
// If none of the above conditions are satisfied,
 // the number is printed
 else {
 document.write(i + " ");
 }
}*/