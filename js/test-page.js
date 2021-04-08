//Quiz page

let userAnswer = { '1': '', '2': '', '3': '', '4': '', '5': '' };
const solution = { '1': 'choice1', '2': 'choice2', '3': 'choice4', '4': 'choice2', '5': 'choice3' };

const $container = document.querySelector('.test-container');
const $button = document.querySelector('.submit-button');
const $hidden = document.querySelectorAll('.hidden');

const findId = (e, id) => {
  e.target.classList.contains(solution[`${id}`]) ? 
  userAnswer[`${id}`] = 'currect' : userAnswer[`${id}`] = 'wrong';
  console.log(userAnswer);
}

$container.onclick = e => {
  if (!e.target.classList.contains('test-choice')) return;
  const { id } = e.target.parentNode;
  findId(e, id);
}

$button.onclick = () => {
  for (let i = 1; i < 6; i++) {
    userAnswer[`${i}`] === 'wrong' ? [...$hidden][`${i}`].style.setProperty('display', 'block')
                                   : [...$hidden][`${i}`].style.setProperty('display', 'none');
  }
  window.scrollTo({top: 0, behavior: 'smooth'});
}
