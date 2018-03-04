app.filter('teamFilter', function() {
    return function(matchArray, searchTeam) {
        var newMatchList = new Array();
        if (searchTeam === "Select Team") {
            newMatchList = matchArray;
        } else {
            for (x in matchArray) {
                if ((matchArray[x].team1.name.indexOf(searchTeam) > -1) || (matchArray[x].team2.name.indexOf(searchTeam) > -1)) {
                    newMatchList.push(matchArray[x]);
                }
            }
        }
        return newMatchList;
    }
});