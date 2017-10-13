'use strict';

var combinations = require('./combinations');

module.exports = (function() {

    var secrets = [],
        prefixedSecrets = [],
        suffixedSecrets = [],
        paddedSecrets = [],
        passwords = [
            'insecure',
            'secret',
        ],
        letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                   'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        dividers = ['|', '&', '+', '-', '_', ' ', ''];


    secrets = passwords;

    secrets = secrets.concat(combinations(passwords, '!!'));

    secrets = secrets.concat(combinations(dividers, passwords[0] + '!' + passwords[1]));
    secrets = secrets.concat(combinations(dividers, passwords[1] + '!' + passwords[0]));

    secrets.forEach(function(secret) {

        prefixedSecrets = prefixedSecrets.concat(combinations(letters, '!!-' + secret));
        prefixedSecrets = prefixedSecrets.concat(combinations(numbers, '!' + secret));
        prefixedSecrets = prefixedSecrets.concat(combinations(numbers, '!-' + secret));
        prefixedSecrets = prefixedSecrets.concat(combinations(numbers, '0!-' + secret));
    });

    secrets.forEach(function(secret) {

        suffixedSecrets = suffixedSecrets.concat(combinations(numbers, secret + '-!'));
        suffixedSecrets = suffixedSecrets.concat(combinations(numbers, secret + '-0!'));
    });


    secrets = secrets.concat(prefixedSecrets);
    secrets = secrets.concat(suffixedSecrets);

    return secrets;

}());
