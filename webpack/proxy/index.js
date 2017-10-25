'use strict';

const fs = require('fs');
const path = require('path');

let configFileName = 'config.js';
let configFileRelativePath = `./${configFileName}`;

// cached config, will be updated whenever config.js changes
let proxyConfig = {};

fs.watch(path.join(__dirname, configFileName), updateProxyConfig);

updateProxyConfig();

function createProxyConfig(newConfig) {
    const config = {
        context: '/'
    };

    return Object.assign({}, config, newConfig);
}

function updateProxyConfig() {
    delete require.cache[require.resolve(configFileRelativePath)];

    try {
        const newProxyConfig = require(configFileRelativePath);

        proxyConfig = createProxyConfig(newProxyConfig);
    } catch (proxyConfigReadError) {
        console.error(proxyConfigReadError);
    }
}

module.exports = {
    get: function () {
        return proxyConfig;
    }
};
