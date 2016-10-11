scotchApp.controller('roomController', function ($scope) {
    $scope.message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni veritatis quaerat culpa sapiente maiores ducimus voluptatem voluptatibus dolor impedit quibusdam temporibus cumque sit natus, ad iusto reprehenderit eum, at. Voluptatibus!';
    $('.modal-trigger').leanModal({dismissible: false});
    $('select').material_select();
    $('.btn-order').click(function () {
         $('#modal1').closeModal();
    });
});
