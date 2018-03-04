app.controller('matchView', function($scope, $http) {
    $scope.year = ["English Premier League 2015/16", "English Premier League 2016/17"];
    $scope.roundName = ["Select Round", "Play-Off um 1 Premierleague-Platz:", "Matchday 1", "Matchday 2", "Matchday 3", "Matchday 4", "Matchday 5", "Matchday 6", "Matchday 7", "Matchday 8", "Matchday 9", "Matchday 10", "Matchday 11", "Matchday 12", "Matchday 13", "Matchday 14", "Matchday 15", "Matchday 16", "Matchday 17", "Matchday 18", "Matchday 19", "Matchday 20", "Matchday 21", "Matchday 22", "Matchday 23", "Matchday 24", "Matchday 25", "Matchday 26", "Matchday 27", "Matchday 28", "Matchday 29", "Matchday 30", "Matchday 31", "Matchday 32", "Matchday 33", "Matchday 34", "Matchday 35", "Matchday 36", "Matchday 37", "Matchday 38"];
    $scope.team = ["Select Team", "Leicester City", "Arsenal", "Manchester City", "Tottenham Hotspur", "Manchester United", "Southampton", "Liverpool", "West Ham United", "Stoke City", "Swansea", "Chelsea", "Watford", "Crystal Palace", "Everton", "Bournemouth", "West Bromwich Albion", "Newcastle United", "Norwich", "Sunderland", "Aston Villa", "Burnley", "Hull City", "Middlesbrough"];
    $scope.score = ["Select Score", 0, 1, 2, 3, 4, 5, 6, 7];

    $scope.selectedYear = "English Premier League 2015/16";
    $scope.selectedRound = "Select Round";
    $scope.selectedTeam = "Select Team";
    $scope.selectedScore = "Select Score";

    $http.get("https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json")
        .then(function(response) {
            $scope.rounds = response.data.rounds;
        });

    $scope.changeme = function() {
        if ($scope.selectedYear === "English Premier League 2016/17") {
            $http.get("https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json")
                .then(function(response) {
                    $scope.rounds = response.data.rounds;
                    for (ro in $scope.rounds) {
                        if ($scope.selectedRound === $scope.rounds[ro].name) {
                            var newRound = new Array($scope.rounds[ro]);
                            $scope.rounds = newRound;
                            break;
                        }
                    }
                });
        } else {
            $http.get("https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json")
                .then(function(response) {
                    $scope.rounds = response.data.rounds;
                    for (ro in $scope.rounds) {
                        if ($scope.selectedRound === $scope.rounds[ro].name) {
                            var newRound = new Array($scope.rounds[ro]);
                            $scope.rounds = newRound;
                            break;
                        }
                    }
                });
        }
    };
});