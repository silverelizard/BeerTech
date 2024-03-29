﻿function PasswordCtrl($scope, $http) {
    $scope.email = "";
    $scope.msg = "";
    $scope.sent = false;

    $scope.PasswordRequest = function () {
        if ($scope.email != null && $scope.email != "") {
            var xsrf = $.param({ email: $scope.email });
            $http({
                method: 'POST',
                url: '/User/PasswordResetRequest',
                data: xsrf,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).success(function (data, status, headers, config) {
                $scope.msg = data.msg;
                $scope.sent = true;
            });
        }
    }
}