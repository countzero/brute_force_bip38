brute-force BIP38
=================

A helper to decode BIP38 encoded private keys.

## Installation

### Install dependencies

Download and install the latest version from:

* [Node.js LTS](https://nodejs.org/en/download/) (installs 'node' and 'npm')

### Build

Fire up your console at the project location and execute:

    npm install && npm link

## Configuration

1. Edit the [config.json](./config.json) and paste the `publicAddress` and `encryptedPrivateKey` values of your BIP38 encoded private key you want to decode.
2. Edit the [secrets.js](./secrets.js) so that it will return an array of all secrets you want to test on your BIP38 encoded private key.

## Start

Fire up your console at the project location and execute:

    brutebip38

License
-------
*brute-force BIP38* is released under the [MIT license](https://opensource.org/licenses/MIT).
