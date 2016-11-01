scotchApp.controller('adminController', function ($scope) {

    $('select').material_select();
    $('.change-user').change(function () {
        if ($(".change-user :selected").val() === '1') {
            location.href = "#me";
        } else if ($(".change-user :selected").val() === '2') {
            location.href = "#admin";
        } else if ($(".change-user :selected").val() === '3') {
            location.href = "#contentmanager";
        } else {
            location.href = "#hotelsowner";
        }
    });

    $('#btn-update-delete').leanModal({
        dismissible: false
    });
    $('#btn-update-delete').click(function () {
        console.log('jasd');
        $('#modal2').modal('open');
    });

    $scope.message = 'hello, its me - mario';
});
