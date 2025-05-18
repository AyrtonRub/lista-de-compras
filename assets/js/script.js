(function () {
  const nameItem = document.querySelector("#item");
  const btn = document.querySelector("button");
  const list = document.querySelector("#list");

  function createTag(tagName, className) {
    const element = document.createElement(tagName);
    if (className) {
      element.classList.add(className);
    }

    return element;
  }

  function createLi(nameItem) {
    const li = createTag("li");
    const inputWrapper = createTag("div", "input-wrapper");
    li.appendChild(inputWrapper);
    const input = createTag("input");
    input.setAttribute("type", "checkbox");
    inputWrapper.appendChild(input);
    const p = createTag("p");
    p.textContent = nameItem;
    inputWrapper.appendChild(p);
    const actions = createTag("div", "actions");
    const del = createTag("div");
    del.setAttribute("id", "del");
    del.setAttribute("data-action", "iDel");
    actions.appendChild(del);
    li.appendChild(actions);

    return li;
  }

  const listItems = [
    {
      name: "teste",
      completed: false,
      create: new Date(),
    },
    {
      name: "teste 2",
      completed: false,
      create: new Date(),
    },
  ];

  function renderLi() {
    list.textContent = "";
    listItems.forEach((item) => {
      list.appendChild(createLi(item.name));
    });
  }

  renderLi();

  function addItem() {
    if (nameItem.value) {
      listItems.push({
        name: nameItem.value,
        completed: false,
        create: new Date(),
      });
      renderLi()
    } else {
      nameItem.focus()
    }
  }

  const close = document.querySelector('#close')

  close.addEventListener('click', function () {
    const inform = document.querySelector('.information')
      inform.style.display = 'none'
  })

  function clickUl(e) {
    const dataAction = e.target.getAttribute('data-action')


    if (!dataAction) return;

    let currentLi = e.target

    while (currentLi.nodeName !== "LI") {
      currentLi = currentLi.parentElement;
    }

  
    const lis = [...document.querySelectorAll('li')]

    const index = lis.indexOf(currentLi)

    const actions = {
      iDel: function() {
        listItems.splice(index, 1)
        const inform = document.querySelector('.information')
        inform.style.display = 'flex'
        renderLi()
      }
    }

    if(actions[dataAction]) {
      actions[dataAction]()
    }

    
  }

  list.addEventListener("click", clickUl);
  btn.addEventListener('click', addItem)
})();
