scotchApp.controller('contentmanagerController', function ($scope) {

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

    $('#btn-report').leanModal({
        dismissible: false
    });
    $('#btn-report').click(function () {
        console.log('jasd');
        $('#modal3').modal('open');
    });

    $('#btn-add-hotel').leanModal({
        dismissible: false
    });
    $('#btn-add-hotel').click(function () {
        console.log('jasd');
        $('#modal4').modal('open');
    });

    $scope.message = 'hello, its me - mario';
});
