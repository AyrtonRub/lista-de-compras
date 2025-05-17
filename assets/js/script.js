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
    actions.appendChild(del);
    li.appendChild(actions);

    return li;
  }

  //vetor para armazenamento dos itens
  const shoppingList = [
    {
      nameItem: 'teste',
      create: new Date(),
      completed: false,
    },
    {
      nameItem: 'teste 2',
      create: new Date(),
      completed: false,
    },
  ];

  //função para renderizar os itens na tela

  function renderLi() {
    list.textContent = "";
    shoppingList.forEach((item) => {
      list.appendChild(createLi(item.nameItem));
    });
  }

  renderLi();


  //função para adicionar items a lista de compras

  function addItem() {
    if (nameItem.value) {
      shoppingList.push({
        nameItem: nameItem.value,
        create: new Date(),
        completed: false,
      });
      renderLi()
    } else {
      nameItem.focus();
    }
  }
  
  function del() {
    
  }

   btn.onclick = addItem;
  
})();
