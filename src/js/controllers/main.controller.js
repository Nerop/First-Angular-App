scotchApp.controller('mainController', function ($scope) {

    function showResultsOfSearch(query) {
        switch (query.toUpperCase()) {
        case '5 ЗВЕЗД':
            location.href = '#5stars';
            break;
        case '4 ЗВЕЗДЫ':
            location.href = '#4stars';
            break;
        case '3 ЗВЕЗДЫ':
            location.href = '#3stars';
            break;
        case 'ПАРИЖ':
            location.href = '#paris';
            break;
        case 'ГЕРМАНИЯ':
            location.href = '#germany';
            break;
        default:
            location.href = '#404';
            break;
        }

    }

    $('.close-search').click(function () {
        $('#search').val('');
    });

    $("#search").keypress(function (event) {
        if (event.which == 13) {
            var queryString = ($(this).val());
            // console.log($(this).val());
            showResultsOfSearch(queryString);
            event.preventDefault();
        }
    });

});
