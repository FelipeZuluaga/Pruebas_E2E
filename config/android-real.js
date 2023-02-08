const { configBuild } = require("@testing/wdio-config");
const { config } = require("./base.conf");
const { join } = require("path");
//Dispositivo real - sauceLabs
exports.device = {
    
  "platformName": "Android",
  'appium:platformVersion': '11',
  "appium:deviceName": "Samsung Galaxy S20",
  "appium:app": "galateapp://16355",
  "sauce:options": {
    "resigningEnabled": "false"
  },
  maxInstances: 1
};

exports.config = configBuild(config, {
  capabilities: [exports.device],
}, process.env.GRID_USER ? {} : {
  port: 4723,
  services: ['appium']
});