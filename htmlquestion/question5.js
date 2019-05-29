function load() {

    let obj = [
        {title: 'Mens Watches - Buy Watches for Men Online in India | Myntra', src: 'img/p1img.jpg'},
        {title: 'Black Link Watch | Men\'s - 45mm | Classic Series | MVMT', src: 'img/p2img.jpg'},
        {title: 'Black Tan Watch | Men\'s - 45mm | Classic Series | MVMT', src: 'img/p3img.jpg'},
        {title: 'Watches - Buy Wrist Watches for Men & Women Online | Myntra', src: 'img/p4img.jpg'},
        {title: 'Watches: Buy Wrist Watches for Men online at best prices in India', src: 'img/p5img.jpg'},
        {title: 'Automatic Watches - TISSOT® Canada', src: 'img/p6img.png'},
        {title: 'Moscone', src: 'img/p7img.jpg'},
        {title: 'Frankie - Dark Sandalwood & Smoke - Minimalist Wooden Watch by JORD', src: 'img/p8img.png'},
        {title: 'Mens Watches - Buy Watches for Men Online in India | Myntra', src: 'img/p1img.jpg'},
        {title: 'Black Link Watch | Men\'s - 45mm | Classic Series | MVMT', src: 'img/p2img.jpg'},
        {title: 'Black Tan Watch | Men\'s - 45mm | Classic Series | MVMT', src: 'img/p3img.jpg'},
        {title: 'Watches - Buy Wrist Watches for Men & Women Online | Myntra', src: 'img/p4img.jpg'},
        {title: 'Watches: Buy Wrist Watches for Men online at best prices in India', src: 'img/p5img.jpg'},
        {title: 'Automatic Watches - TISSOT® Canada', src: 'img/p6img.png'},
        {title: 'Moscone', src: 'img/p7img.jpg'},
        {title: 'Frankie - Dark Sandalwood & Smoke - Minimalist Wooden Watch by JORD', src: 'img/p8img.png'}
    ]

    let cont = document.getElementById('app-container');

    for(let i=0;i<obj.length;i++) {
        cont.appendChild(createCard(obj[i]));
    }

}

function createCard(obj) {
    let card = document.createElement('div');
    card.classList.add('card-container');
    let img = document.createElement('img');
    img.setAttribute('src', obj.src);
    img.classList.add('product-image');
    let producttitle = document.createElement('span');
    producttitle.classList.add('product-title');
    producttitle.appendChild(document.createTextNode(obj.title));
    card.appendChild(img);
    card.appendChild(producttitle);
    return card;
}

load();

