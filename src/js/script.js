// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function ($routeProvider) {
    $routeProvider

    // route for the home page
    .when('/', {
        templateUrl: 'src/templates/home.html',
        controller: 'mainController'
    })

    // route for the about page
    .when('/about', {
        templateUrl: 'src/templates/about.html',
        controller: 'aboutController'
    })

    // route for the contact page
    .when('/contact', {
        templateUrl: 'src/templates/contact.html',
        controller: 'contactController'
    })

    .when('/hotel', {
        templateUrl: 'src/templates/hotel.html',
        controller: 'hotelController'
    })

    .when('/room', {
        templateUrl: 'src/templates/room.html',
        controller: 'roomController'
    })


    .when('/me', {
        templateUrl: 'src/templates/me.html',
        controller: 'meController'
    });
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

scotchApp.controller('aboutController', function ($scope) {
    $scope.message = 'Look! I am an about page.';
});

scotchApp.controller('contactController', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

scotchApp.controller('meController', function ($scope) {
    $scope.message = 'hello, its me - mario';
});

scotchApp.controller('hotelController', function ($scope) {
    $scope.message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni veritatis quaerat culpa sapiente maiores ducimus voluptatem voluptatibus dolor impedit quibusdam temporibus cumque sit natus, ad iusto reprehenderit eum, at. Voluptatibus!';
});

scotchApp.controller('roomController', function ($scope) {
    $scope.message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni veritatis quaerat culpa sapiente maiores ducimus voluptatem voluptatibus dolor impedit quibusdam temporibus cumque sit natus, ad iusto reprehenderit eum, at. Voluptatibus!';
});
