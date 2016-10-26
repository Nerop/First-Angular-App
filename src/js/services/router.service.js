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

    .when('/successful', {
        templateUrl: 'src/templates/successful.html',
        controller: 'successfulController'
    })

    .when('/5stars', {
        templateUrl: 'src/templates/5stars.html',
        controller: '5starsController'
    })

    .when('/me', {
        templateUrl: 'src/templates/me.html',
        controller: 'meController'
    });
});
