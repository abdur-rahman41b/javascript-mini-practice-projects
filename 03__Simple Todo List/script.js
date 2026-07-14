let input = document.querySelector('.input')
let listsContainer = document.querySelector('.lists-container')
let crossBtn = document.querySelector('.cross')
let addBtn = document.querySelector('.btn')


let lists = []

function renderList(arr) {
  listsContainer.innerHTML = ""

  arr.map((obj) => {
    let newElem = document.createElement("div");
    newElem.className = "item";
    newElem.innerHTML = `
          <div class="name">${obj.text}</div>`;

    let btnElem = document.createElement("button");
    btnElem.className = "cross";
    btnElem.innerText = "x";
    newElem.appendChild(btnElem);
    btnElem.onclick = () => {
      // property method
      handleRemoveList(obj.id);
    };

    listsContainer.append(newElem);
  
  })
}
renderList(lists)

function handleAddList() {
  let obj = {
    id: Date.now(),
    text: input.value
  }
  lists.unshift(obj)
  renderList(lists)
  input.value = ''
}

function handleRemoveList(id) {
  let filteredList = lists.filter(obj => {
    return obj.id !== id
  })
  lists = filteredList
  renderList(lists)
}


addBtn.addEventListener('click', handleAddList) // passing reference of function









