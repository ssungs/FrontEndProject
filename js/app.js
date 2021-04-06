$selectLists = document.querySelector('.select-list');


$selectLists.onclick = e => {
  if (e.target === $selectLists) return;
  [...$selectLists.children].forEach($selectList => {
    $selectList.classList.toggle('hide', $selectList === e.target);
  });
}