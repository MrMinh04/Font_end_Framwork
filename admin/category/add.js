myApp.controller('categoryAdd', function($scope, $http){
    console.log('categoryAdd');
    $scope.category = {
        id:"",
        ten: ""
    }
    $scope.onClickSubmit = function() {
        $http({
            method: "POST",
            url: "http://localhost:3000/category",
            data: $scope.category
        }).then(function(){
            alert('Thêm mới thành công!');
            window.location.href = "#!category/list";
        })
    }
})