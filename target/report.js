$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/dataTable.feature");
formatter.feature({
  "name": "To validate the login functionality for FB pag",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To verify the login with dataTables list",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is in facebook Login",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStepsClass.user_is_in_facebook_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to enter username and  password and click the login button",
  "rows": [
    {
      "cells": [
        "suresh@gmail.com",
        "1234"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStepsClass.user_has_to_enter_username_and_password_and_click_the_login_button(DataTable)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#email\"}\n  (Session info: chrome\u003d78.0.3904.70)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-AA2291R\u0027, ip: \u0027192.168.0.193\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.70, chrome: {chromedriverVersion: 77.0.3865.10 (bc3579f611bbc..., userDataDir: C:\\Users\\RAMAKR~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:56891}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 261c543cb1c9cc6948d675c645f6d844\n*** Element info: {Using\u003did, value\u003demail}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.stepdefinition.LoginPageStepsClass.user_has_to_enter_username_and_password_and_click_the_login_button(LoginPageStepsClass.java:29)\r\n\tat ✽.User has to enter username and  password and click the login button(src/test/resources/feature/dataTable.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User has to navigate to next",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepsClass.user_has_to_navigate_to_next()"
});
formatter.result({
  "status": "skipped"
});
});