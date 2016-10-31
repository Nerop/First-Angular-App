scotchApp.controller('adminController', function ($scope) {

    $('select').material_select();
    $('.change-user').change(function () {
        if ($( ".change-user :selected" ).val() === '1'){
            location.href = "#me";
        }
        else if ($( ".change-user :selected" ).val() === '2'){
            location.href = "#admin";
        }
        else if ($( ".change-user :selected" ).val() === '3'){
            location.href = "#contentmanager";
        }
        else {
            location.href = "#hotelsowner";
        }
    });

    $scope.message = 'hello, its me - mario';
});
