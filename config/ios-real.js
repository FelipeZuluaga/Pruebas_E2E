const {configBuild} = require("@testing/wdio-config");
const {config} = require("./base.conf");
const {join} = require("path");

exports.device = {
    "appium:deviceName": "iPhone XS",
    "appium:platformVersion": "14",
    "platformName": "iOS",
    "appium:automationName": "XCUITest",
    //"app": join(__dirname, "../bin/glomo-co-test_glomo-co_bbva-colombia-nostore.ipa"),
    "appium:app": "galateapp://16377",
    "appium:autoAcceptAlerts": "true",
    maxInstances: 1
};
exports.config = configBuild(config, {
    capabilities: [exports.device],
}, process.env.GRID_USER ? {} : {
    port: 4723,
    services: ['appium']
});
