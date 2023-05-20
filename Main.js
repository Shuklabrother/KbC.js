var score = 0;
console.log(`1.What is full form of HTML?`);
console.log(`a. Hyper text markup language`);
console.log(`b. Hyper text transfer protocol`);
console.log(`c. Hyper text language`);
console.log(`d.Hyder text markup language`);
var ans = prompt('Enter Ans')
if (ans=='a'){
    console.log('You won 100 points ');
    score+=100;
}
else{
  console.log('You lose 100 points ');
  score-=100;
}
console.log('Your points ', score)
