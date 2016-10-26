scotchApp.controller('mainController', function ($scope) {

    function showResultsOfSearch(query) {
        switch(query) {
            case '5 звезд':
                console.log(5);
                location.href = '#5stars';
                break;
            default:
                console.log('nothing');
                break;
        }

    }

    $("#search").keypress(function (event) {
        if (event.which == 13) {
            var queryString = ($(this).val());
            // console.log($(this).val());
            showResultsOfSearch(queryString);
            event.preventDefault();
        }
    });

});
