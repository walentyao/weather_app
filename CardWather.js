export class CardWather {

    elementCity
    elementTemp
    elementImage
    elementDesc
    elementCountry

    constructor({city, temp, image, desc, country}) {
        this.city = city;
        this.temp = temp;
        this.image = image;
        this.desc = desc;
        this.country = country;
        this.card = this.createCard();
    }

    createCard(){
        this.elementCity = document.createElement('h2');
        this.elementTemp = document.createElement('div');
        this.elementImage = document.createElement('img');
        this.elementDesc = document.createElement('div');
        this.elementCountry = document.createElement('span');

        this.elementCity.textContent = this.city;
        this.elementTemp.textContent = this.temp;
        this.elementCountry.textContent = this.country;
        this.elementDesc.textContent = this.desc;
        this.elementImage.src = this.image;
        this.elementImage.alt = 'wather';
        const elementC = document.createElement('sup');
        elementC.textContent = '°c';
        this.elementTemp.appendChild(elementC);

        this.elementTemp.classList.add('card-value');
        this.elementImage.classList.add('card-image');
        this.elementDesc.classList.add('card-description');
        this.elementCity.classList.add('card-city');


        const divCardWather = document.createElement('div');
        divCardWather.classList.add('card-weather');
        divCardWather.appendChild(this.elementTemp);
        divCardWather.appendChild(this.elementImage);

        const divCard = document.createElement('div');
        divCard.classList.add('card');
        this.elementCity.appendChild(this.elementCountry);
        divCard.appendChild(this.elementCity);
        divCard.appendChild(divCardWather);
        divCard.appendChild(this.elementDesc);

        return divCard;
    }

    updateCard({city, temp, image, desc, country}){
        this.elementCity.textContent = city;
        this.elementTemp.textContent = temp;
        this.elementCountry.textContent = country;
        this.elementDesc.textContent = desc;
        this.elementImage.src = image;
    }
}