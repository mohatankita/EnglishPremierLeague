app.controller('statsController', function($scope, $http) {
    $scope.year = ["English Premier League 2015/16", "English Premier League 2016/17"];
    $scope.selectedYear = "English Premier League 2015/16";

    $http.get("https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json")
        .then(function(response) {
            getMatchStats(response);
        });

    $scope.changeme = function() {
        if ($scope.selectedYear === "English Premier League 2016/17") {
            $http.get("https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json")
                .then(function(response) {
                    getMatchStats(response);
                });
        } else {
            $http.get("https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json")
                .then(function(response) {
                    getMatchStats(response);
                });
        }
    };

    getMatchStats = function(response) {
        $scope.rounds = response.data.rounds;
        $scope.teamNames = [];
        $scope.teamFilter = [];
        for (ro in $scope.rounds) {
            for (team in $scope.rounds[ro].matches) {
                $scope.teamNames.push($scope.rounds[ro].matches[team].team1.name, $scope.rounds[ro].matches[team].team1.name);
            }
        }
        $scope.teamFilter = $scope.teamNames.filter(function(value, index, array) {
            return (index == array.indexOf(value));
        });
        console.log($scope.teamFilter);

        $scope.teamStats = [];
        for (stat in $scope.teamFilter) {
            $scope.teamStats.push({
                teamname: $scope.teamFilter[stat],
                matchesPlayed: 0,
                matchesWon: 0,
                matchesLost: 0,
                matchesDraw: 0,
                totalGoals: 0,
                goalsAgainst: 0,
                goalsDiff: 0
            });
        }
        console.log($scope.teamStats);

        for (stat in $scope.teamFilter) {
            for (ro in $scope.rounds) {
                for (team in $scope.rounds[ro].matches) {
                    if ($scope.rounds[ro].matches[team].team1.name === $scope.teamFilter[stat]) {
                        $scope.teamStats[stat].totalGoals += $scope.rounds[ro].matches[team].score1;
                        $scope.teamStats[stat].goalsAgainst += $scope.rounds[ro].matches[team].score2;
                        $scope.teamStats[stat].matchesPlayed++;
                        if ($scope.rounds[ro].matches[team].score1 > $scope.rounds[ro].matches[team].score2) {
                            $scope.teamStats[stat].matchesWon++;
                        } else if ($scope.rounds[ro].matches[team].score1 < $scope.rounds[ro].matches[team].score2) {
                            $scope.teamStats[stat].matchesLost++;
                        } else {
                            $scope.teamStats[stat].matchesDraw++;
                        }
                    }
                    if ($scope.rounds[ro].matches[team].team2.name === $scope.teamFilter[stat]) {
                        $scope.teamStats[stat].totalGoals += $scope.rounds[ro].matches[team].score2;
                        $scope.teamStats[stat].goalsAgainst += $scope.rounds[ro].matches[team].score1;
                        $scope.teamStats[stat].matchesPlayed++;
                        if ($scope.rounds[ro].matches[team].score1 > $scope.rounds[ro].matches[team].score2) {
                            $scope.teamStats[stat].matchesLost++;
                        } else if ($scope.rounds[ro].matches[team].score1 < $scope.rounds[ro].matches[team].score2) {
                            $scope.teamStats[stat].matchesWon++;
                        } else {
                            $scope.teamStats[stat].matchesDraw++;
                        }
                    }
                }
            }
            $scope.teamStats[stat].goalsDiff = $scope.teamStats[stat].totalGoals - $scope.teamStats[stat].goalsAgainst;
        };
    };
});