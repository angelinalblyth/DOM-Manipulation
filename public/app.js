var app = function(){

var newCat = document.createElement("ul");
newCat.classList.add("cat");

var catName = document.createElement('li');
catName.innerText = 'Name: Mitzy';

var favouriteFood = document.createElement('li');
favouriteFood.innerText = 'Favourite food: Tuna';

var catImageHolder = document.createElement('li');
catImageHolder.innerText = '';

var catImage = document.createElement('img');
catImage.src = "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg";

catImageHolder.appendChild(catImage);
newCat.appendChild(catName);
newCat.appendChild(favouriteFood);
newCat.appendChild(catImageHolder);




var cats = document.querySelector('#cats');

 cats.appendChild(newCat);

}
window.onload = app;
