console.info('Welcome to the dessert maker v1.0.');

var currentFruit = null;
var currentDessert = null;

var images = {
  fruits: {
    apple: 'img/Apple.jpg',
    orange: 'img/Orange.jpg',
    banana: 'img/Banana.jpg'
  },
  desserts: {
    icecream: 'img/IceCream.jpg',
    cake: 'img/Cake.jpg',
    pie: 'img/Pie.jpg'
  },
  mixes: {
    apple: {
      icecream: 'img/AppleIceCream.jpg',
      cake: 'img/AppleCake.jpg',
      pie: 'img/ApplePie.jpg'
    },
    orange: {
      icecream: 'img/OrangeIceCream.jpg',
      cake: 'img/OrangeCake.jpg',
      pie: 'img/OrangePie.jpg'
    },
    banana: {
      icecream: 'img/BananaIceCream.jpg',
      cake: 'img/BananaCake.jpg',
      pie: 'img/BananaPie.jpg'
    }
  }
};

var apple = document.querySelector('.Fruit--apple');
apple.addEventListener('click', function() {
  console.log('Apple clicked.');
 })

  // update image in fruit holder

var orange = document.querySelector('.Fruit--orange');
orange.addEventListener('click', function() {
console.log('Orange Clicked.');
  })

var banana = document.querySelector('.Fruit--banana');
banana.addEventListener('click', function() {
console.log('Banana Clicked.');
  })

var icecream = document.querySelector('.Dessert--icecream');
icecream.addEventListener('click', function(e) {
console.log('Ice Cream Clicked.');
  })

var cake = document.querySelector('.Dessert--cake');
cake.addEventListener('click', function() {
console.log('Cake Clicked.');
        })

var pie = document.querySelector('.Dessert--pie');
pie.addEventListener('click', function() {
console.log('Pie Clicked.');
            })

var selectedFruit = document.querySelector('Holder--fruit');
var selectedDessert = document.querySelector('Holder--dessert');
var selectedResult = document.querySelector('Holder--result');

var fruitImg = document.createElement('img');
var dessertImg = document.createElement('img');
var resultImg = document.createElement('img');

for 
