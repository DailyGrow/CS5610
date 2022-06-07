function getNumber(){
    let num;
    do{
        num=prompt("Enter a number");
    }while(isNaN(num));
    return num;
}

let number=getNumber();
let radius=document.querySelector("#radius");
radius.innerText+=number;

function calculateArea(rad){
    let area=Math.PI*rad*rad;
    return area;
}

let area=calculateArea(number);
let result=document.querySelectorAll("#result");
result.innerText+=area;

let shoppingItems =['bread','cheese','green pepper'];

let list=document.querySelector('.shopping');
function updateShoppingList(items){
    for(let item of items){
        let listItem=document.createElement("li");
        listItem.textContent=item;
        list.append(listItem);
    }
}

updateShoppingList(shoppingItems);

//radius.style="color:red";
//radius.setAttribute('class','paragraph');
//radius.classList.add('paragraph');//toggle

function squareList(){
    list.classList.add('squareList')
}

squareList();

function greenItem(){
    let listItems=document.querySelectorAll('.shopping li');
    for(let item of listItems){
        if(item.textContent.includes('green')){
            item.classList.add('greenItem')
        }
    }
    
}

greenItem();

let updateImageButton=document.querySelector('#updateImage');
updateImageButton.textContent=localStorage.getItem('buttonText')||"Click ME!";
function changeButtonText(){
    if(updateImageButton.textContent==='Click Me!'){
        updateImageButton.textContent="Clicked!";
        localStorage.setItem('buttonText','Clicked!');
    }
    else{
        updateImageButton.textContent="Click Me!";
        localStorage.setItem('buttonText','Click Me!');
    }
}
updateImageButton.addEventListener('click',changeButtonText);

function changeImageShoppingCart(){
    let shoppingCartImage=document.querySelector('#shoppingCart');
    shoppingCartImage.src="images/shoppingCart.png";
    shoppingCartImage.alt="shopping Cart Icon";
    shoppingCartImage.width=50;
    shoppingCartImage.height=50;
}

updateImageButton.addEventListener('click',changeImageShoppingCart,{once:true});

let buttons=document.querySelectorAll('img ~ button');
for(let button of buttons){
    button.addEventListener('mouseover',changeButtonColor);
}
function changeButtonColor(event){
    event.target.style.backgroundColor=event.target.textContent;

}
