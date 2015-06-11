app.controller('MainController', ['$scope', function($scope) {
  $scope.title = "This Month's Bestsellers";
  $scope.promo = 'The most popular books this month.';
  $scope.products = [{
    name: 'The Old Man and the Sea ',
    price: 8,
    pubdate: new Date('1967', '03', '08'),
    cover: 'https://joegleason1982.files.wordpress.com/2011/03/theoldmanandthesea.jpg',
    likes: 0,
    dislikes: 0

  }, {
    name: 'Tintin: Le Lotus Bleu',
    price: 8,
    pubdate: new Date('1995', '08', '01'),
    cover: 'http://www.images-booknode.com/book_cover/265/full/les-aventures-de-tintin---le-lotus-bleu-264973.jpg',
    likes: 0,
    dislikes: 0
  }, {
    name: 'Harry Potter & The Prisoner of Azkaban',
    price: 11.99,
    pubdate: new Date('1999', '07', '08'),
    cover: 'http://upload.wikimedia.org/wikipedia/en/b/b4/Harry_Potter_and_the_Prisoner_of_Azkaban_(US_cover).jpg',
    likes: 0,
    dislikes: 0
  }, {
    name: 'Ready Player One',
    price: 7.99,
    pubdate: new Date('2011', '08', '16'),
    cover: 'http://upload.wikimedia.org/wikipedia/en/a/a4/Ready_Player_One_cover.jpg',
    likes: 0,
    dislikes: 0

  }];
  $scope.plusOne = function(index) {
    $scope.products[index].likes += 1;
  };
  $scope.minusOne = function(index) {
    $scope.products[index].dislikes += 1;
  };

}]);
