app.controller('singleViewController', function($scope, $routeParams) {
    $scope.matchDetail = JSON.parse($routeParams.x);
    $scope.roundDetail = $routeParams.y;
    $scope.matchWon;

    if ($scope.matchDetail.score1 > $scope.matchDetail.score2) {
        $scope.matchWon = $scope.matchDetail.team1.name;
    } else if ($scope.matchDetail.score2 > $scope.matchDetail.score1) {
        $scope.matchWon = $scope.matchDetail.team2.name;
    } else {
        $scope.matchWon = "Draw";
    }
});