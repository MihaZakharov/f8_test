import { card_json } from './data.js'; // подключаю модуль для получение даннх JSON

let card = [];

var content;

//класс карточки, описывающий свойства
class Card {
   constructor(header,img,text1,text2,price,desc) {
     this.header = header;
     this.img = img;
     this.text1 = text1;
     this.text2 = text2;
     this.price = price;
     this.desc = desc;
   }

//фукция создает шаблон карточки
async  getContent(){
  //alert(card.header);
  let content = `
    <img src=".\\img\\${this.img}" alt="Brunlees Court">
    <h3>${this.header}</h3>
    <p id="samplepara">${this.text1}</p>
    <p>${this.text2} <b>	&#163;${this.price}</b></p>
    <p id="desc">${this.desc}</p>
   `;
  return content;
}


}


//функция по полученным данным из JSON создает шаблоны карточки и отображает их на странице
function openList(){
    //получаю узел строк, в него буду вставлять карточки
    let elem = document.getElementById("rows");
    //Прохожу по JSON
    for (var key in card_json.cards){
      let card = new Card(
        card_json.cards[key].header,
        card_json.cards[key].img,
        card_json.cards[key].text1,
        card_json.cards[key].text2,
        card_json.cards[key].price,
        card_json.cards[key].desc
      );
      //Получаю контент
      card.getContent().then(result => {
        var divNode = document.createElement("div");
        divNode.innerHTML = result;
        divNode.className = 'row';
        elem.appendChild(divNode);
      });
    } //for
}

//вначале создам листенер для кнопки и повешаю на него обработаку открытия си
 function addLstr()  {
   document.querySelector("#btn").addEventListener("click", openList)
 }

 addLstr();
