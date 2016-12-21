scotchApp.controller('hotelsownerController', function ($scope) {

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

    $('#btn-request-report').leanModal({
        dismissible: false
    });
    $('#btn-request-report').click(function () {
        console.log('jasd');
        $('#modal5').modal('open');
    });

    $scope.message = 'hello, its me - mario';
});
