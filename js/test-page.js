//Quiz page

let userAnswer = [];

const $container = document.querySelector('.container');

const $button = document.querySelector('.submit');

const $mpChoiceQ1 = document.querySelector('.q1');
const $mpChoiceQ2 = document.querySelector('.q2');
const $mpChoiceQ3 = document.querySelector('.q3');
const $mpChoiceQ4 = document.querySelector('.q4');
const $mpChoiceQ5 = document.querySelector('.q5');
const $solQ1 = document.querySelector('.solution1');
const $solQ2 = document.querySelector('.solution2');
const $solQ3 = document.querySelector('.solution3');
const $solQ4 = document.querySelector('.solution4');
const $solQ5 = document.querySelector('.solution5');
const $hidden = document.querySelectorAll('.hidden');

let $solution = [$solQ1, $solQ2, $solQ3, $solQ4, $solQ5];

$mpChoiceQ1.onchange = e => {
  e.target.className === 'choice1' ? userAnswer.push('ok') : userAnswer.push('no');
  return userAnswer;
};
$mpChoiceQ2.onchange = e => {
  e.target.className === 'choice2' ? userAnswer.push('ok') : userAnswer.push('no');
  return userAnswer;
};
$mpChoiceQ3.onchange = e => {
  e.target.className === 'choice4' ? userAnswer.push('ok') : userAnswer.push('no');
  return userAnswer;
};
$mpChoiceQ4.onchange = e => {
  e.target.className === 'choice2' ? userAnswer.push('ok') : userAnswer.push('no');
  return userAnswer;
};
$mpChoiceQ5.onchange = e => {
  e.target.className === 'choice3' ? userAnswer.push('ok') : userAnswer.push('no');
  return userAnswer;
};

$button.onclick = () => {
  for (let i = 0; i < 5; i++) {
    if (userAnswer[i] !== 'ok') {
      $solution[i].style.display = 'block';
    }
  }
  // console.log(userAnswer);
  // $hidden.style.display = 'block';
}