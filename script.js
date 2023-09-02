// document.body.style.backgroundImage = "url(confFlowerPics/rendered/rose/rose-rot.png)";

let leftButton = document.getElementById("arrow-left");
let rightButton = document.getElementById("arrow-right");
let flowerName = document.getElementById("flower-name");
let addButton = document.getElementById("add-button");


let colBox1 = document.getElementById("color-first");
let colBox2 = document.getElementById("color-second");
let colBox3 = document.getElementById("color-third");


let bodyColor = document.body.style.backgroundColor;

let flowersList = [
    {
        name: 'Rose',
        src: "confFlowerPics/rendered/rose/rose-rot.png",
        colors: ['rgb(183,40,67)', 'rgb(203,95,0)', 'rgb(255,255,255)'],
        colorPic: ["confFlowerPics/rendered/rose/rose-rot.png", "confFlowerPics/rendered/rose/rose-orange.png", "confFlowerPics/rendered/rose/rose-weiß.png"],
    },
    {
        name: 'Tulpe',
        src: "confFlowerPics/rendered/tulpe/tulpe-lila.png",
        colors: ['rgb(174,92,205)', 'rgb(251,0,31)', 'rgb(254,188,255)'],
        colorPic: ["confFlowerPics/rendered/tulpe/tulpe-lila.png", "confFlowerPics/rendered/tulpe/tulpe-rot.png", "confFlowerPics/rendered/tulpe/tulpe-rosa.png"],
    },
    {
        name: 'Lilien',
        src: "confFlowerPics/rendered/flower3.png",
        colors: [],
        colorPic: [],
    },
    {
        name: 'Vergissmeinnicht',
        src: "confFlowerPics/rendered/flower4.png",
        colors: [],
        colorPic: [],
    },
    {
        name: 'Ringelblume',
        src: "confFlowerPics/rendered/flower5.png",
        colors: [],
        colorPic: [],
    },
    {
        name: 'Alpenveilchen',
        src: "confFlowerPics/rendered/flower1.png",
        colors: [],
        colorPic: [],
    },
    {
        name: 'Narzisse',
        src: "confFlowerPics/rendered/flower2.png",
        colors: [],
        colorPic: [],
    },
];

let i = 0;
let q = 0;


// if (document.body.style.backgroundColor == "black") {
//     document.body.style.backgroundColor = "red";
// }

function setColors(flower) {

    if (flower.colors.length) {
        colBox1.style.backgroundColor = flower.colors[0];
        colBox2.style.backgroundColor = flower.colors[1];
        colBox3.style.backgroundColor = flower.colors[2];
    } else {
        colBox1.style.backgroundColor = "transparent";
        colBox2.style.backgroundColor = "transparent";
        colBox3.style.backgroundColor = "transparent";
    }
}

function pressLeftArrow() {
    i--;
    if(i < 0) {
        i = flowersList.length - 1;
    }
    document.slide.src = flowersList[i].src;
    flowerName.innerHTML = flowersList[i].name;

    setColors(flowersList[i])
}
function pressRightArrow() {
    i++;
    if(i > flowersList.length - 1) {
        i = 0;
    }
    document.slide.src = flowersList[i].src;
    flowerName.innerHTML = flowersList[i].name;

    setColors(flowersList[i])
}


function changeColor1() {

    if(flowersList[i].colorPic.length) {
        document.slide.src = flowersList[i].colorPic[0];
    }
}
function changeColor2() {

    if(flowersList[i].colorPic.length) {
        document.slide.src = flowersList[i].colorPic[1];
    }
}
function changeColor3() {

    if(flowersList[i].colorPic.length) {
        document.slide.src = flowersList[i].colorPic[2];
    }
}

let cartList = [];

// function addToArray() {
    

//     addToCart();
// }

function addFlowerToCart() {

    if(q < 21) {
        cartList.push(flowersList[i]);
        if(q > 2) {
            let newDiv = document.createElement("div");
            newDiv.innerHTML = `<div class="box" id="cart-box${q}"></div>`;
            document.getElementById("cart-box-section").appendChild(newDiv);
            document.getElementById(`cart-box${q}`).style.backgroundImage = `url(${cartList[q].src})`;
        }
        else {
            document.getElementById(`cart-box${q}`).style.backgroundImage = `url(${cartList[q].src})`;
        }
        q++;
        console.log(cartList);
    }
    else {
        alert("You cannot have more than 21 flowers in your bouquet");
    }
}


function deleteFlower() {

    if(q > 3) {
        document.getElementById("cart-box-section").lastChild.remove();
        q--;
        cartList.length = q;
        console.log(q);
        console.log(cartList);
    }
    else if(q <= 3 && q > 0) {
        q--;
        document.getElementById(`cart-box${q}`).style.backgroundImage = `none`;
        cartList.length = q;
    }
    else {
        alert("CART IS EMPTY");
    }
    
}

let boxes = document.getElementsByClassName('box');
let substractButton = document.getElementById("substract");
// function createDiv() {

//     q++;

//     let newDiv = document.createElement("div");

//     newDiv.innerHTML = `<div class="box" id="cart-box${q}"></div>`;
//     document.getElementById("cart-box-section").appendChild(newDiv);
//     // newDiv.className = "box";
//     console.log(newDiv);  
// }

leftButton.addEventListener("click", pressLeftArrow)
rightButton.addEventListener("click", pressRightArrow)

// addButton.addEventListener("click", addToArray)
addButton.addEventListener("click", addFlowerToCart)

colBox1.addEventListener("click", changeColor1)
colBox2.addEventListener("click", changeColor2)
colBox3.addEventListener("click", changeColor3)

// boxes.addEventListener("click", deleteFlower)

// for (let s = 0; s < boxes.length; s++) {
//     boxes[s].addEventListener('click', deleteFlower)
// }

substractButton.addEventListener("click", deleteFlower)

// colBox2.addEventListener("click",)
// colBox3.addEventListener("click",)


