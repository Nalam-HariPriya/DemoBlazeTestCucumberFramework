$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/CorrectTotalPrice.feature");
formatter.feature({
  "line": 2,
  "name": "Buy Order Functionality",
  "description": "",
  "id": "buy-order-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TotalPrice"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "",
  "description": "",
  "id": "buy-order-functionality;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User clicks sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\" and click login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Move your cursor over women\u0027s link",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click on sub menu T-shirts",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Mouse hover on the first product displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "More button will be displayed click on More button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Make sure quantity is set to one Select size M Select color",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Click add to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Click procees to checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Change the quantity to two Verify that Total price is changing and reflecting correct price",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "buy-order-functionality;;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 21,
      "id": "buy-order-functionality;;;1"
    },
    {
      "cells": [
        "samsal81@usa.com",
        "abc123"
      ],
      "line": 22,
      "id": "buy-order-functionality;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 242200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "the user is on the website page",
  "keyword": "Given "
});
formatter.match({
  "location": "MainPageSteps.the_user_is_on_the_website_page()"
});
formatter.result({
  "duration": 3286100,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-PA23MS0\u0027, ip: \u0027192.168.0.113\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:276)\r\n\tat steps.MainPageSteps.the_user_is_on_the_website_page(MainPageSteps.java:29)\r\n\tat ✽.Given the user is on the website page(features/CorrectTotalPrice.feature:5)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 22,
  "name": "",
  "description": "",
  "id": "buy-order-functionality;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TotalPrice"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User clicks sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters username \"samsal81@usa.com\" and password \"abc123\" and click login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Move your cursor over women\u0027s link",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click on sub menu T-shirts",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Mouse hover on the first product displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "More button will be displayed click on More button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Make sure quantity is set to one Select size M Select color",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Click add to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Click procees to checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Change the quantity to two Verify that Total price is changing and reflecting correct price",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "ProductPageSteps.make_sure_quantity_is_set_to_one_Select_size_M_Select_color()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProductPageSteps.click_add_to_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProductPageSteps.click_procees_to_checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderPageSteps.change_the_quantity_to_two()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 138400,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-PA23MS0\u0027, ip: \u0027192.168.0.113\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:438)\r\n\tat util.BrowserFactory.CloseBrowser(BrowserFactory.java:27)\r\n\tat steps.MainPageSteps.tearDown(MainPageSteps.java:78)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
});