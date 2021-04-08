//Quiz page

let userAnswer = { '1': '', '2': '', '3': '', '4': '', '5': '' };
const solution = { '1': 'choice1', '2': 'choice2', '3': 'choice4', '4': 'choice2', '5': 'choice3' };

const $container = document.querySelector('.test-container');
const $button = document.querySelector('.submit-button');
const $hidden = document.querySelectorAll('.hidden');




window.addEventListener('load', function() {
  let radiobuttons = document.querySelectorAll('[role=radio]');
  for(let i = 0; i < radiobuttons.length; i++ ) {
    let rb = radiobuttons[i];
    rb.addEventListener('click', clickRadioGroup);
  }});
  function firstRadioButton(node) {
    let first = node.parentNode.firstChild;
    while(first) {
      if (first.nodeType === Node.ELEMENT_NODE) {
        if (first.getAttribute("role") === 'radio') return first;
      }
      first = first.nextSibling;
    }
    return null;
  }
  
  function nextRadioButton(node) {
    let next = node.nextSibling;
    while(next) {
      if (next.nodeType === Node.ELEMENT_NODE) {
        if (next.getAttribute("role") === 'radio') return next;
      }
      next = next.nextSibling;
    }
    return null;
  }
  
  function getImage(node) {
    let child = node.firstChild;
    while(child) {
      if (child.nodeType === Node.ELEMENT_NODE) {
        if (child.tagName === 'IMG') return child;
      }
      child = child.nextSibling;
    }
    return null;
  }
  
  function setRadioButton(node, state) {
    state == 'true' ? node.setAttribute('aria-checked', 'true') : node.setAttribute('aria-checked', 'false')
    }
  
  function clickRadioGroup(e) {
    let type = e.type;
    if (type === 'click') {
      let node = e.currentTarget;
      let radioButton = firstRadioButton(node);
      while (radioButton) {
        setRadioButton(radioButton, "false");
        radioButton = nextRadioButton(radioButton);
      }
      setRadioButton(node, "true");
      e.preventDefault();
      // event.stopPropagation();
    }
  }
  
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