app.filter('scoreFilter', function() {
    return function(matchArray, searchScore) {
        var newMatchScoreList = new Array();
        if (searchScore === "Select Score") {
            newMatchScoreList = matchArray;
        } else {
            for (y in matchArray) {
                if ((matchArray[y].score1 === searchScore) || (matchArray[y].score2 === searchScore)) {
                    newMatchScoreList.push(matchArray[y]);
                }
            }
        }
        return newMatchScoreList;
    }
});