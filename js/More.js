let section1 = document.getElementById('main_Id');
let container = document.createElement('div');
container.classList = 'container';
let row = document.createElement('div');
row.classList = 'row';
section1.appendChild(container);

function createCard(text, img, description) {
    let col = document.createElement('div');
    col.classList = 'col';
    container.appendChild(row);
    row.appendChild(col);
    let card = document.createElement('div');
    card.classList = 'card';
    let headText = document.createElement('div');
    headText.classList = 'headText';
    let h1 = document.createElement('h1');
    h1.classList = 'h1';
    headText.appendChild(h1);
    card.appendChild(headText);
    let cardText = document.createTextNode(text);
    h1.appendChild(cardText);
    col.appendChild(card);
    let cardImg = document.createElement('img');
    cardImg.setAttribute('src', img);
    card.appendChild(cardImg);
    let cardContent = document.createElement('div');
    cardContent.classList = 'cardContent';
    let p = document.createElement('p');
    cardContent.appendChild(headText);
    cardContent.appendChild(p);
    
    card.appendChild(cardContent);
    let des = document.createTextNode(description);
    p.appendChild(des);
   



}

createCard('Packing up', '../img/Screenshottt.jpg', 'Moving companies offer packing services where they carefully pack belongings into boxes, ensuring items are protected during transit. They have expertise in efficiently packing various items, from fragile glassware to bulky furniture');
createCard('Loading', '../img/Screenshot.jpg', 'Once everything is packed, movers load the boxes and furniture onto their moving trucks. They utilize proper lifting techniques and equipment to safely handle heavy items and optimize space in the truck.');
createCard('Transportation', '../img/truck.jpg', 'Moving companies transport belongings from the old location to the new one. They have a fleet of moving trucks in various sizes to accommodate different volumes of items and distances of relocation.');
createCard('Unload', '../img/unload.jpg', 'Upon arrival at the destination, movers unload the items from the truck and place them in the designated areas of the new home or office.');
createCard('Unpacking', '../img/unloading.jpg', ' Some moving companies offer unpacking services where they unpack boxes and set up furniture in the new location. This can save individuals time and effort during the settling-in process.');
createCard('Specialized services', '../img/movePiano.jpg', 'Some moving companies offer specialized services such as handling delicate or valuable items, moving pianos or antiques, and providing international relocation assistance.');


