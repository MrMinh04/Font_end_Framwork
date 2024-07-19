myApp.controller('categoryEdit', function($scope, $http, $routeParams){
    console.log('categoryEdit');
    $scope.category = {
        id: "",
        ten: ""
    }
    $http({
        method: "GET",
        url: "http://localhost:3000/category/" + $routeParams.id,
    }).then(function (res) {
        $scope.category = res.data;
    })

    $scope.onClickSubmit = function() {
        $http({
            method: "PUT",
            url: "http://localhost:3000/category/" + $routeParams.id,
            data: $scope.category
        }).then(function(){
            alert('Chỉnh sửa thành công!');
            window.location.href = "#!category/list";
        })
    }
})