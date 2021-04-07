// Main page

$selectLists = document.querySelector('.select-list');

const toggleProperty = e => {
  if (e.target.style.cssText === 'z-index: 0;') {  
    e.target.previousElementSibling.style.setProperty('z-index', 1)
  } else if (e.target.style.cssText === 'z-index: 1;') {  
    e.target.style.setProperty('z-index', 0)
  }
}

$selectLists.onclick = e => {
  if (e.target === $selectLists) return;
  toggleProperty(e);
}