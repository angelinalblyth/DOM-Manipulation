// var app = function(){
//
// var newCat = document.createElement("ul");
// newCat.classList.add("cat");
//
// var catName = document.createElement('li');
// catName.innerText = 'Name: Mitzy';
//
// var favouriteFood = document.createElement('li');
// favouriteFood.innerText = 'Favourite food: Tuna';
//
// var catImageHolder = document.createElement('li');
// catImageHolder.innerText = '';
//
// var catImage = document.createElement('img');
// catImage.src = "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg";
//
// catImageHolder.appendChild(catImage);
// newCat.appendChild(catName);
// newCat.appendChild(favouriteFood);
// newCat.appendChild(catImageHolder);
//
// var cats = document.querySelector('#cats');
//
// cats.appendChild(newCat);
//
// }



var CATS_ARRAY = [
  {name: 'Mitzy', favouriteFood: 'Tuna', catImage: 'http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg'},
  {name: 'Fluffy', favouriteFood: 'Snow Ball', catImage: 'http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg'}
]

//Changing the above code to single responsibility.
var app = function(){
  for(var cat of CATS_ARRAY){
    addCat(cat.name, cat.favouriteFood, cat.catImage);
  }
}



var addCat = function(name, favouriteFood, catImage){
  var addName = createCatName(name);
  var addFavouriteFood = createCatsFavouriteFood(favouriteFood);
  var addCatImage = createCatImage(catImage);
  var catImageHolder = createCatImageHolder();
  var catul = createCat()

  appendElements(addName, addFavouriteFood, catImageHolder, addCatImage, catul);
}

var createCat = function(){
  var newCat = document.createElement('ul');
  newCat.classList.add('cat');
  return newCat;
}

var createCatName = function(newName){
  var catName = document.createElement('li');
  catName.innerText = newName;
  return catName;
}

var createCatsFavouriteFood = function(favouriteFood){
  var catsFavouriteFood = document.createElement('li');
  catsFavouriteFood.innerText = favouriteFood;
  return catsFavouriteFood;
}

var createCatImageHolder = function(){
  var catImageHolder = document.createElement('li');
  catImageHolder.innerText = '';
  return catImageHolder;
}

var createCatImage = function(catImage){
  var newCatImage = document.createElement('img');
  newCatImage.src = catImage;
  return newCatImage;
}

var appendElements = function(addName, addFavouriteFood,catImageHolder, addCatImage, catul){

var newCats = document.querySelector('#cats');

  catImageHolder.appendChild(addCatImage);
  catul.appendChild(addName);
  catul.appendChild(addFavouriteFood);
  catul.appendChild(catImageHolder);
  newCats.appendChild(catul);
}

window.onload = app;
