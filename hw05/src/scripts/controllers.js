var shopcatApp = angular.module('fastShopApp', []);

shopcatApp.controller('fastShopCtrl', function ($scope) {
  $scope.shops = [
    {'name': '15.6" [Home] Ноутбук DNS (0164783) (HD)',
     'price': '20 490 руб.',
 	  'imgurl': 'src/img/1.jpg'},
    {'name': '17.3" [Gamer] Ноутбук DNS (0801153) (HD+)',
     'price': '33 990 руб.',
 	  'imgurl': 'src/img/2.jpg'},
 	  {'name': 'Компьютер DNS Prestige XL [0800795]',
     'price': '59 990 руб.',
 	  'imgurl': 'src/img/3.jpg'},
  ];

  $scope.cart = [];
  $scope.postfix = ' руб.';
  $scope.itemsPriceSum = 0;

  $scope.addToCart = function (shop) {
  	this.cart.push(shop);
  	$scope.itemsPriceSum += getNumbers(shop.price);
  }

  $scope.removeFromCart = function (shop) {
  	var cart = $scope.cart, i;
  	for (i = 0; i < cart.length; i++) {
  		if (JSON.stringify(cart[i]) === JSON.stringify(shop)) {
  			$scope.itemsPriceSum -= getNumbers(shop.price);
  			return cart.splice(i, 1);
  		}
  	}
  }

  function getNumbers(str) {
  	return str.replace(/[^0-9]/g, '') * 1;
  }

});
