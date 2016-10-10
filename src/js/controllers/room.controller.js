scotchApp.controller('roomController', function ($scope) {
    $scope.message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni veritatis quaerat culpa sapiente maiores ducimus voluptatem voluptatibus dolor impedit quibusdam temporibus cumque sit natus, ad iusto reprehenderit eum, at. Voluptatibus!';
    $('.order').click(function () {
        $('#myModal').hide();
        $('.modal-backdrop').hide();
    });

});
