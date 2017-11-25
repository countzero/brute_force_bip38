brute-force BIP38
=================

A brute-force decoder of BIP38 encoded private keys for the CLI.

[![asciicast](https://asciinema.org/a/142270.png)](https://asciinema.org/a/142270?autoplay=1)

## Installation

### Install dependencies

Download and install the latest version from:

* [Node.js LTS](https://nodejs.org/en/download/) (installs 'node' and 'npm')

### Clone repository

Clone the *brute-force BIP38* repository to a nice place on your machine via:

    git clone https://github.com/stadtwerk/company_communication_core.git

### Build

Fire up your console at the project location and execute:

    npm install
    npm link

## Configuration

1. Edit the [config.json](./config.json) and paste the `publicAddress` and `encryptedPrivateKey` values of your BIP38 encoded key.
2. Edit the [secrets.js](./secrets.js) so that it will return an array of all secrets you want to test on your BIP38 encoded key.

Example: You can have all combinations for each position. Let say you password could be "SecrEt!insecure" but you don't know each letter that is capitalize. You can set all possibilities for each position:

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
3 - Edit the [secrets.js] to hide all log secrets combinations. Set logSecrets to false, default is true. 


## Start

Fire up your console at the project location and execute:

    brutebip38

The application will now utilize all available CPUs to test each secret against your BIP38 encoded private key. Invalid secrets are logged out to [invalid_secrets.json](./invalid_secrets.json). If a valid secret has been found it will be logged out to [valid_secret.json](./valid_secret.json).

License
-------
*brute-force BIP38* is released under the [MIT license](https://opensource.org/licenses/MIT).
