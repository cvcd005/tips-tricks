// For example we want change text in all div on <p>text</p>
//<body>
//   <p>Boom</p>
//   text
//   <div>Bam</div>
// </body>
//const elements = prettify(document);
// <body>
//   <p>Boom</p>
//   text
//   <div><p>Bam</p></div>
// </body>

const prettify = (html) => {
  const div = document.querySelectorAll('div');//получаем список всех дивов
  div.forEach(el => { //идем по коллекции дивов
    let text = ''; //загатовка
    let nodes = el.childNodes;//получаем список всех нод входящих в div// если использовать просто children текстовый узел не попадет
    for (let i = 0; i < nodes.length; i++) {//цикл по списку нод ищем текстовые узлы
      if (nodes[i].nodeType === 3) { // если это текстовый узел
        text = nodes[i].nodeValue;//забирам его значение
        if (text.trim().length > 0) {//проверка на пустую строку перенос строки и прочую хрень
          let newNode = document.createElement('p');//если все ок создаем новую ноду
          newNode.innerHTML = text;//присваиваем старый текст
          el.replaceChild(newNode, nodes[i]);//меняем текстовую ноду div на новую ноду <p>text</p>
        }
      }
    }
  })
};
