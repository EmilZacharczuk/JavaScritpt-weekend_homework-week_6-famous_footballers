document.addEventListener('DOMContentLoaded', () => {

  const newItemForm = document.querySelector('#new-form');
  newItemForm.addEventListener('submit', handleNewItemFormSubmit);

  const deleteButton = document.querySelector('#delete-all');
  deleteButton.addEventListener("click", handleDeleteButtonClick);
});

const handleNewItemFormSubmit = function () {
  event.preventDefault()
  console.log(event.target.club.value)

    const footballerListItem = document.createElement('li');

    const footballerName = document.createElement('h1');
    footballerName.textContent = event.target['footballer-name'].value;
    footballerListItem.appendChild(footballerName)

    const club = document.createElement('h2');
    club.textContent = event.target.club.value;
    footballerListItem.appendChild(club);

    const position = document.createElement('h3');
    position.textContent = event.target.position.value;
    footballerListItem.appendChild(position);

  console.log(footballerListItem)

  const footballerList = document.querySelector('#footballers-list');
  footballerList.appendChild(footballerListItem)

  event.target.reset()
}

const handleDeleteButtonClick = function (event) {
  const footballerList = document.querySelector('#footballers-list');
  footballerList.innerHTML = '';
}
