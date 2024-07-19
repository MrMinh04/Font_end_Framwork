myApp.controller('Register', function($scope, $http){
    $scope.account = {
        tel:"",
        email: "",
        address:"",
        id: "",
        pass: ""
    }
    $scope.onClickSubmit = function() {
        $http({
            method: "POST",
            url: "http://localhost:3000/account",
            data: $scope.account
        }).then(function(){
            alert('Thêm mới thành công!');
            window.location.href = "#!login";
        })
    }
    var userId = window.sessionStorage.getItem('userId');
    $scope.userId = userId;
    console.log(userId);
})