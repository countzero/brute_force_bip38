module.exports = (function () {

    var positions = [];
    var secrets = [];
    var logSecrets = true;
   
    positions = [
        ['s', 'S'],
        ['e', 'E','&'],
        ['c', 'c'],
        ['r', 'R'],
        ['e', 'E'],
        ['t', 't'],
        ['1','!',''],
        ['_','',' '],
        ['insecure']
      
    ];

    combinations = function (pos, c, soFarSecret) {
        if (pos == c.length) {
            if(logSecrets)
                console.log(soFarSecret);
            secrets = secrets.concat(soFarSecret);
            return;            
        }
        for (var i = 0; i != c[pos].length; i++) {
            combinations(pos + 1, c, soFarSecret + c[pos][i]);
        }
    }

    combinations(0, positions, '', 0);

    return secrets;

}());
