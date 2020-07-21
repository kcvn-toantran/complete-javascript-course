/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
// var scores, roundScore, activePlayer, isGamePlaying;
// scores = [0,0];
// roundScore = 0;
// activePlayer = 1;
// isGamePlaying = true;

// var dice = Math.floor(Math.random() * 6) + 1;

// // document.querySelector('#current-' + activePlayer).textContent = dice;

// var x = document.querySelector('#score-0').textContent;
// console.log(x);
// document.querySelector('.dice').style.display = 'none';
// document.getElementById('score-0').textContent = '0';
// document.getElementById('score-1').textContent = '0';
// document.getElementById('current-0').textContent = '0';
// document.getElementById('current-1').textContent = '0';

// if(isGamePlaying){
//     document.querySelector('.btn-roll').addEventListener('click', function(){
//         //Do something here
//         // 1. Random number
//         var dice = Math.floor(Math.random() * 6) + 1;
    
//         // 2. Display result
//         var diceDom = document.querySelector('.dice');
//         diceDom.style.display = 'block';
//         diceDom.src = 'dice-' + dice + '.png';
    
//         // 3. Update roundScore IF rolled number was NOT a 1
//         if( dice !==1 ){
//             roundScore += dice;
//             document.getElementById('current-' + activePlayer).textContent = roundScore;
//         }else {
//             roundScore = 0;
//             document.getElementById('current-' + activePlayer).textContent = '0';
//             // Turn to next player
//             document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
//             nextPlayer();
//         }
//         console.log(activePlayer + ':' + roundScore);
//     });
//     document.querySelector('.btn-hold').addEventListener('click', function(){
//         // Update score of active player with roll score
//         scores[activePlayer] +=  roundScore;
//         document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
//         if( scores[activePlayer] >= 20){
//             wonGame();
//         }else{
//         // Move to next player turn
//         nextPlayer();
//         }        
//     });
// }

// function nextPlayer(){
//     roundScore = 0;
//     document.getElementById('current-' + activePlayer).textContent = '0';
//     document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
//     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//     // document.getElementById('current-' + activePlayer).textContent = '0';
//     document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
// }

// function wonGame(){
//     document.getElementById('name-' + activePlayer).textContent = 'Winner!';
//     document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
//     isGamePlaying = false;
// }

/****
 * Function and Object
 */

 // FUNCTION contructor

//  var john = {
//      name: 'John',
//      yearOfBirth: 1990,
//      job: 'teacher'
//  };

//  var Person = function(name, yearOfBirth, job){
//      this.name = name;
//      this.yearOfBirth = yearOfBirth;
//      this.job = job;
//     //  this.calculateAge = function(){
//     //      console.log(2016 - this.yearOfBirth);
//     //  }
//  }

//  Person.prototype.calculateAge = function () {
//     console.log(2016 - this.yearOfBirth);
//  }

//  Person.prototype.lastName = 'Smith';

//  var john = new Person('John', 1990, 'teacher');
//  var jane = new Person('Jane', 1969, 'designer');
//  var mark = new Person('Mark', 1948, 'retired');

//  john.calculateAge();
//  mark.calculateAge();
//  jane.calculateAge();

//  console.log(john.lastName);
//  console.log(jane.lastName);
//  console.log(mark.lastName);


// Object.create

// var personProto = {
//     calculateAge: function(){
//         console.log(2016- this.yearOfBirth);
//     }
// };

// var john = Object.create(personProto);

// Primitives vs objects


// // Primitives
// var a = 23;
// var b = a;

// a = 46;
// console.log(a);
// console.log(b);

// // Object
// var obj1 = {
//     name: 'John',
//     age: 26
// };

// var obj2 = obj1;

// obj1.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);

// // Functions
// var age = 27;
// var obj = {
//     name: 'Jonas',
//     city: 'Lisbon'
// };

// function change(a,b){
//     a = 30;
//     b.city = 'San Francisco';
// }

// change(age, obj);
// console.log(age);
// console.log(obj.city);

// Lectures: Passing functions as argument

// var years = [1990, 1965, 1937, 2005, 1998];


// function arrayCalc(arr, fn){
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++){
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }
// function calculateAge(el){
//     return 2016-el;
// }
// function isFullAge(el){
//     return el >= 18;
// }

// function maxHeartate(el){
//     if(el >=18 && el<=81){
//         return Math.round(206.9-(0.67*el));
//     }else{
//         return -1;
//     }
// }
// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge);
// var rates = arrayCalc(ages,maxHeartRate);
// console.log(ages);
// console.log(fullAges);
// console.log(rates);

// Lectures: Functions returning funcstions
// function interviewQuestion(job){
//     if(job === 'designer'){
//         return function(name){
//             console.log(name + ', can you please explain what UX design is ?');
//         }
//     }else if (job ==='teacher'){
//         return function(name){
//             console.log('What subject do you teach, ' + name + '?');
//         }
//     }else {
//         return function(name){
//             console.log('Hello ' + name +' ,what do you do?');
//         }
//     } 
// }

// var teacherQuestion = interviewQuestion('teacher');
// teacherQuestion('John');

// var designerQuestion = interviewQuestion('designer');
// designerQuestion('John');
// designerQuestion('Jane');
// designerQuestion('Mark');
// designerQuestion('Mike');

// interviewQuestion('teacher')('Kane');

//Lecture: IIFE (Immediately Invoked Function Expression)

// function game(){
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();

// (function() {
//     var score = Math.random() * 10;
//     console.log(score > 5);
// })();
// console.log(score);

// Lecture: Bind, call and apply

// var john = {
//     name: 'John',
//     age: 26,
//     job: 'teacher',
//     presentation: function(style, timeOfDay){
//         if(style === 'formal'){
//             console.log('Good ' + timeOfDay + ' Ladies and gentlement! I\'m ' +
//             this.name + ', I\m a ' +
//             this.job + ' and I\'m ' +
//             this.age + ' years old.');
//         }else if (style === 'friendly'){
//             console.log('Hey! What\'s up? I\'m ' +
//             this.name +  ', I\'m a ' +
//             this.job + ' and I\'m ' +
//             this.age + ' years old. Have a nice ' +
//             timeOfDay + '.');
//         }
//     }
// };

// var emily = {
//     name: 'Emily',
//     age: 35,
//     job: 'designer'
// };

// john.presentation('formal', 'morning');
// john.presentation.call(emily, 'friendly', 'afternoon');


// var johnFriendly = john.presentation.bind(john,'friendly');
// johnFriendly('morning');
// johnFriendly('night');

// var emilyFormal = john.presentation.bind(emily, 'formal');
// emilyFormal('afternoon');

// john.presentation.apply(emily, ['friendly', 'afternoon']);

// var johnFriendly = john.presentation.bind(john,'friendly');
// var emilyFormal = john.presentation.bind(emily, 'formal');
// johnFriendly('morning');
// johnFriendly('tonight');
// emilyFormal('afternoon');


// ////
// var years = [1990, 1965, 1937, 2005, 1998];


// function arrayCalc(arr, fn){
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++){
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }
// function calculateAge(el){
//     return 2016-el;
// }
// function isFullAge(limit, el){
//     return el >= limit;
// }

// var ages = arrayCalc(years, calculateAge);
// var fullJapan = arrayCalc(ages, isFullAge.bind(this,20));
// console.log(ages);
// console.log(fullJapan);

var Question = function(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
};

question1 = new Question('What\'s your city?', ['Boston', 'NewYork'], 1);
question2 = new Question('What\'s is your favourite food?', ['Spageti', 'Pizza'], 0);
question3 = new Question('How old are you?', [25, 36, 42], 2);

var questions = [question1, question2, question3];

var rand = Math.floor(Math.random() * Math.floor(3));
console.log(questions[rand]);









