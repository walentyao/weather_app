import {CardWather} from "./CardWather";
import getWeather from "./apiWather";

const container = document.querySelector('.content');
const inputCity = document.querySelector('#input');
const button = document.querySelector('#btn');

const arrayCard = [];

async function handlerClick(event) {

    event.preventDefault();
    const errorCard = document.querySelector('.error-card');
    if (errorCard){
        errorCard.remove();
    }
    try {
        const weather = await getWeather(inputCity.value);
        const newCard = new CardWather(weather);
        container.appendChild(newCard.card);
        arrayCard.push(newCard);
    }
    catch (error){
        const errorCard = document.createElement('div');
        errorCard.classList.add('error-card');
        errorCard.id = 'errorCard';
        errorCard.textContent = error.message;
        const header = document.querySelector('.header');
        header.appendChild(errorCard);
    }
}

async function handlerUpdateCard(){
    for (let element of arrayCard){
        const weather = await getWeather(element.city);
        element.updateCard(weather);
    }
}

button.addEventListener('click', handlerClick);
setInterval(handlerUpdateCard,300000);

