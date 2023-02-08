const { configBuild } = require("@testing/wdio-config");
const { config } = require("./base.conf");
const { join } = require("path");
exports.device = {

    //Emulador - sauceLabs
    'appium:app': 'galateapp://16355',
    //'appium:app': join(__dirname, "../bin/glomo-co-prod-signed.apk"),
    platformName: "Android",
    platformVersion: "11.0",
    'appium:deviceName': "Samsung Galaxy S20 WQHD GoogleAPI Emulator",
    'appium:automationName': "UiAutomator2",

    //Pruebas locales
    
    /*platformName: "Android",
    "appium:platformVersion": "version Android",
    "appium:version": "1.22.3",
    "appium:deviceName": "nombre dispositivo",
    "appium:appPackage": "com.bbva.GEMA.global",
    "appium:appActivity": "com.bbva.GEMA.module.splash.HomeActivity",
    "appium:noReset": "true",
    "appium:autoGrantPermissions": "true"*/

};

exports.config = configBuild(config, {
    capabilities: [exports.device],
}, process.env.GRID_USER ? {} : {
    port: 4723,
    services: ['appium']
});