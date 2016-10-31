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

    .when('/404', {
        templateUrl: 'src/templates/404.html',
        controller: '404Controller'
    })

    .when('/4stars', {
        templateUrl: 'src/templates/4stars.html',
        controller: '4starsController'
    })

    .when('/3stars', {
        templateUrl: 'src/templates/3stars.html',
        controller: '3starsController'
    })

    .when('/paris', {
        templateUrl: 'src/templates/paris.html',
        controller: 'parisController'
    })

    .when('/germany', {
        templateUrl: 'src/templates/germany.html',
        controller: 'germanyController'
    })

    .when('/admin', {
        templateUrl: 'src/templates/admin.html',
        controller: 'adminController'
    })

    .when('/contentmanager', {
        templateUrl: 'src/templates/contentmanager.html',
        controller: 'contentmanagerController'
    })

    .when('/hotelsowner', {
        templateUrl: 'src/templates/hotelsowner.html',
        controller: 'hotelsownerController'
    })

    .when('/me', {
        templateUrl: 'src/templates/me.html',
        controller: 'meController'
    });
});
