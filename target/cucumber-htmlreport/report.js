$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DrugPricingCoupon.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Feature 8"
    }
  ],
  "line": 3,
  "name": "Users ability to find price of a Medication",
  "description": "",
  "id": "users-ability-to-find-price-of-a-medication",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@drugs"
    },
    {
      "line": 2,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User should able to find side effect of drug",
  "description": "",
  "id": "users-ability-to-find-price-of-a-medication;user-should-able-to-find-side-effect-of-drug",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "browse to drugs homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user scroll down, click on Pricing \u0026 Coupon Guide",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "enter \"\u003cMedName\u003e\" in the Search Box, click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should be able to see Price List of the Medication successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "users-ability-to-find-price-of-a-medication;user-should-able-to-find-side-effect-of-drug;",
  "rows": [
    {
      "cells": [
        "MedName"
      ],
      "line": 13,
      "id": "users-ability-to-find-price-of-a-medication;user-should-able-to-find-side-effect-of-drug;;1"
    },
    {
      "cells": [
        "minoxidil"
      ],
      "line": 14,
      "id": "users-ability-to-find-price-of-a-medication;user-should-able-to-find-side-effect-of-drug;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4100832100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should able to find side effect of drug",
  "description": "",
  "id": "users-ability-to-find-price-of-a-medication;user-should-able-to-find-side-effect-of-drug;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@regression"
    },
    {
      "line": 2,
      "name": "@drugs"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "browse to drugs homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user scroll down, click on Pricing \u0026 Coupon Guide",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "enter \"minoxidil\" in the Search Box, click on Search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should be able to see Price List of the Medication successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "DrugsSideEffectsSteps.browse_to_drugs_homepage()"
});
formatter.result({
  "duration": 2759296800,
  "status": "passed"
});
formatter.match({
  "location": "DrugPricingCouponSteps.user_scroll_down_click_on_Pricing_Coupon_Guide()"
});
formatter.result({
  "duration": 20896243900,
  "error_message": "java.lang.NullPointerException\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat bdd.drugs.PageActions.DrugsHomePageActions.pricingCoupon(DrugsHomePageActions.java:67)\r\n\tat bdd.stepDef.DrugPricingCouponSteps.user_scroll_down_click_on_Pricing_Coupon_Guide(DrugPricingCouponSteps.java:17)\r\n\tat ✽.When user scroll down, click on Pricing \u0026 Coupon Guide(DrugPricingCoupon.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "minoxidil",
      "offset": 7
    }
  ],
  "location": "DrugPricingCouponSteps.enter_in_the_Search_Box_click_on_Search(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DrugPricingCouponSteps.user_should_be_able_to_see_Price_List_of_the_Medication_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 670320700,
  "status": "passed"
});
formatter.uri("DrugsRegister.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Feature 1"
    }
  ],
  "line": 3,
  "name": "Drugs Registration As a user",
  "description": "Description: Drugs Registration as a user with valid information",
  "id": "drugs-registration-as-a-user",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@drugs"
    },
    {
      "line": 2,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "User should able to create account using Register form",
  "description": "",
  "id": "drugs-registration-as-a-user;user-should-able-to-create-account-using-register-form",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "browse to drugs homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "click on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Fillup the register form with \"\u003cemail\u003e\", \"\u003cusername\u003e\", \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select on Terms and Privacy checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should see registration confirmation details successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "drugs-registration-as-a-user;user-should-able-to-create-account-using-register-form;",
  "rows": [
    {
      "cells": [
        "email",
        "username",
        "password"
      ],
      "line": 16,
      "id": "drugs-registration-as-a-user;user-should-able-to-create-account-using-register-form;;1"
    },
    {
      "cells": [
        "panda13456@gmail.com",
        "panda2345",
        "panda7895"
      ],
      "line": 17,
      "id": "drugs-registration-as-a-user;user-should-able-to-create-account-using-register-form;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2163492400,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User should able to create account using Register form",
  "description": "",
  "id": "drugs-registration-as-a-user;user-should-able-to-create-account-using-register-form;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@regression"
    },
    {
      "line": 2,
      "name": "@drugs"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "browse to drugs homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "click on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Fillup the register form with \"panda13456@gmail.com\", \"panda2345\", \"panda7895\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select on Terms and Privacy checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should see registration confirmation details successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "DrugsSideEffectsSteps.browse_to_drugs_homepage()"
});
formatter.result({
  "duration": 2162059000,
  "status": "passed"
});
formatter.match({
  "location": "DrugsRegisterSteps.click_on_Register_link()"
});
formatter.result({
  "duration": 1479676800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "panda13456@gmail.com",
      "offset": 31
    },
    {
      "val": "panda2345",
      "offset": 55
    },
    {
      "val": "panda7895",
      "offset": 68
    }
  ],
  "location": "DrugsRegisterSteps.fillup_the_register_form_with(String,String,String)"
});
formatter.result({
  "duration": 1038869700,
  "status": "passed"
});
formatter.match({
  "location": "DrugsRegisterSteps.select_on_Terms_and_Privacy_checkbox()"
});
formatter.result({
  "duration": 80336900,
  "status": "passed"
});
formatter.match({
  "location": "DrugsRegisterSteps.user_click_on_register_button()"
});
formatter.result({
  "duration": 85613600,
  "status": "passed"
});
formatter.match({
  "location": "DrugsRegisterSteps.user_should_see_registration_confirmation_details_successfully()"
});
formatter.result({
  "duration": 71938400,
  "status": "passed"
});
formatter.after({
  "duration": 663628200,
  "status": "passed"
});
formatter.uri("DrugsSideEffect.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Feature 3"
    }
  ],
  "line": 3,
  "name": "Users ability to search side effect of drug",
  "description": "",
  "id": "users-ability-to-search-side-effect-of-drug",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@drugs"
    },
    {
      "line": 2,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User should able to find side effect of drug",
  "description": "",
  "id": "users-ability-to-search-side-effect-of-drug;user-should-able-to-find-side-effect-of-drug",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "browse to drugs homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"\u003cdrugName\u003e\", clicks on Search icon",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user scroll down and click on Side Effects link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should be able to see Side Effects page, and overdose symptom  successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "users-ability-to-search-side-effect-of-drug;user-should-able-to-find-side-effect-of-drug;",
  "rows": [
    {
      "cells": [
        "drugName"
      ],
      "line": 13,
      "id": "users-ability-to-search-side-effect-of-drug;user-should-able-to-find-side-effect-of-drug;;1"
    },
    {
      "cells": [
        "hydroxychloroquine"
      ],
      "line": 14,
      "id": "users-ability-to-search-side-effect-of-drug;user-should-able-to-find-side-effect-of-drug;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2141503100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should able to find side effect of drug",
  "description": "",
  "id": "users-ability-to-search-side-effect-of-drug;user-should-able-to-find-side-effect-of-drug;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@regression"
    },
    {
      "line": 2,
      "name": "@drugs"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "browse to drugs homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"hydroxychloroquine\", clicks on Search icon",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user scroll down and click on Side Effects link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should be able to see Side Effects page, and overdose symptom  successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "DrugsSideEffectsSteps.browse_to_drugs_homepage()"
});
formatter.result({
  "duration": 2086870900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hydroxychloroquine",
      "offset": 12
    }
  ],
  "location": "DrugsSideEffectsSteps.user_enter_clicks_on_Search_icon(String)"
});
formatter.result({
  "duration": 4703518700,
  "status": "passed"
});
formatter.match({
  "location": "DrugsSideEffectsSteps.user_scroll_down_and_click_on_Side_Effects_link()"
});
formatter.result({
  "duration": 23478812700,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.remote.internal.WebElementToJsonConverter.apply(WebElementToJsonConverter.java:60)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Spliterators$ArraySpliterator.forEachRemaining(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.ReduceOps$ReduceOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.collect(Unknown Source)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:475)\r\n\tat bdd.drugs.PageActions.HydroxychloroquineResultPageActions.sideEffects(HydroxychloroquineResultPageActions.java:22)\r\n\tat bdd.stepDef.DrugsSideEffectsSteps.user_scroll_down_and_click_on_Side_Effects_link(DrugsSideEffectsSteps.java:35)\r\n\tat ✽.And user scroll down and click on Side Effects link(DrugsSideEffect.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DrugsSideEffectsSteps.user_should_be_able_to_see_Side_Effects_page_and_overdose_symptom_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 685058500,
  "status": "passed"
});
formatter.uri("InteractionChecker.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Feature 7:"
    }
  ],
  "line": 3,
  "name": "User can check drug interactions",
  "description": "",
  "id": "user-can-check-drug-interactions",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@drugs"
    },
    {
      "line": 2,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User can successfully check interactions between few drugs",
  "description": "",
  "id": "user-can-check-drug-interactions;user-can-successfully-check-interactions-between-few-drugs",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User browses to drugs.com homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Interactions Checker",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters a drug name \"\u003cdrug1\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Clicks on Add button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enters another name \"\u003cdrug2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Check for Interactions button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should be able to see the Drug Interaction Report",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "user-can-check-drug-interactions;user-can-successfully-check-interactions-between-few-drugs;",
  "rows": [
    {
      "cells": [
        "drug1",
        "drug2"
      ],
      "line": 15,
      "id": "user-can-check-drug-interactions;user-can-successfully-check-interactions-between-few-drugs;;1"
    },
    {
      "cells": [
        "dexamethasone",
        "montelukast"
      ],
      "line": 16,
      "id": "user-can-check-drug-interactions;user-can-successfully-check-interactions-between-few-drugs;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2154173800,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User can successfully check interactions between few drugs",
  "description": "",
  "id": "user-can-check-drug-interactions;user-can-successfully-check-interactions-between-few-drugs;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@regression"
    },
    {
      "line": 2,
      "name": "@drugs"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User browses to drugs.com homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Interactions Checker",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters a drug name \"dexamethasone\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Clicks on Add button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enters another name \"montelukast\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Check for Interactions button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should be able to see the Drug Interaction Report",
  "keyword": "Then "
});
formatter.match({
  "location": "InteractionCheckerSteps.user_browses_to_drugs_com_homepage()"
});
formatter.result({
  "duration": 2213008200,
  "status": "passed"
});
formatter.match({
  "location": "InteractionCheckerSteps.user_clicks_on_Interactions_Checker()"
});
formatter.result({
  "duration": 465420600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dexamethasone",
      "offset": 25
    }
  ],
  "location": "InteractionCheckerSteps.user_enters_a_drug_name(String)"
});
formatter.result({
  "duration": 235308000,
  "status": "passed"
});
formatter.match({
  "location": "InteractionCheckerSteps.clicks_on_Add_button()"
});
formatter.result({
  "duration": 1636040200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "montelukast",
      "offset": 21
    }
  ],
  "location": "InteractionCheckerSteps.enters_another_name(String)"
});
formatter.result({
  "duration": 1270232800,
  "status": "passed"
});
formatter.match({
  "location": "InteractionCheckerSteps.user_clicks_on_Check_for_Interactions_button()"
});
formatter.result({
  "duration": 2163527300,
  "status": "passed"
});
formatter.match({
  "location": "InteractionCheckerSteps.user_should_be_able_to_see_the_Drug_Interaction_Report()"
});
formatter.result({
  "duration": 4853099100,
  "status": "passed"
});
formatter.after({
  "duration": 715531000,
  "status": "passed"
});
formatter.uri("MedicationHairLoss.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Feature 4"
    }
  ],
  "line": 3,
  "name": "User ability to find Medication List for Hair Loss",
  "description": "",
  "id": "user-ability-to-find-medication-list-for-hair-loss",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@drugs"
    },
    {
      "line": 2,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 2194581100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should be able to find list of medications for Hair Loss",
  "description": "",
  "id": "user-ability-to-find-medication-list-for-hair-loss;user-should-be-able-to-find-list-of-medications-for-hair-loss",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "browse to drugs homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user clicks on Browse Conditions link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "click on alphabet H link at homepage",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on Hair Loss link in the Condition Page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click on Medication List tab on Medications \u0026 Treatment Options page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user should see successful message of Hair Loss Medications Treatment options and  list of Medications",
  "keyword": "Then "
});
formatter.match({
  "location": "DrugsSideEffectsSteps.browse_to_drugs_homepage()"
});
formatter.result({
  "duration": 2313443100,
  "status": "passed"
});
formatter.match({
  "location": "HairLossMedicationListSteps.user_clicks_on_Browse_Conditions_link()"
});
formatter.result({
  "duration": 3393687500,
  "status": "passed"
});
formatter.match({
  "location": "HairLossMedicationListSteps.click_on_alphabet_H_link_at_homepage()"
});
formatter.result({
  "duration": 957525700,
  "status": "passed"
});
formatter.match({
  "location": "HairLossMedicationListSteps.click_on_Hair_Loss_link_in_the_Condition_Page()"
});
formatter.result({
  "duration": 5237060200,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca href\u003d\"/hair-loss.html\" onclick\u003d\"DDC_recordConditionHit(event);\"\u003e...\u003c/a\u003e is not clickable at point (134, 11). Other element would receive the click: \u003cdiv id\u003d\"google_ads_iframe_/7146/alpha_0__container__\" style\u003d\"border: 0pt none;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d84.0.4147.125)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027DESKTOP-U8A0AGU\u0027, ip: \u0027192.168.102.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.125, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\12404\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52680}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 53bdd45263348b9544a08e5b6184238e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat bdd.drugs.PageActions.ConditionsHPageActions.hairLossLink(ConditionsHPageActions.java:26)\r\n\tat bdd.stepDef.HairLossMedicationListSteps.click_on_Hair_Loss_link_in_the_Condition_Page(HairLossMedicationListSteps.java:32)\r\n\tat ✽.And click on Hair Loss link in the Condition Page(MedicationHairLoss.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HairLossMedicationListSteps.click_on_Medication_List_tab_on_Medications_Treatment_Options_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HairLossMedicationListSteps.user_should_see_successful_message_of_Hair_Loss_Medications_Treatment_options_and_list_of_Medications()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 717225100,
  "status": "passed"
});
formatter.uri("NewDrug.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Feature 8:"
    }
  ],
  "line": 3,
  "name": "Find latest FDA approved drug from archive",
  "description": "",
  "id": "find-latest-fda-approved-drug-from-archive",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@drugs"
    },
    {
      "line": 2,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 2163071900,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "find-latest-fda-approved-drug-from-archive;title-of-your-scenario-outline",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User browses to Drugs.com homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on New Drugs tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user scrolls down to archive",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Clicks on latest year and month",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User can find the recent new drug that has been approved by FDA",
  "keyword": "Then "
});
formatter.match({
  "location": "PillidentifierSteps.user_browses_to_Drugs_com_homepage()"
});
formatter.result({
  "duration": 2284848500,
  "status": "passed"
});
formatter.match({
  "location": "NewDrugSteps.user_clicks_on_New_Drugs_tab()"
});
formatter.result({
  "duration": 1759673900,
  "status": "passed"
});
formatter.match({
  "location": "NewDrugSteps.user_scrolls_down_to_archive()"
});
formatter.result({
  "duration": 31143800,
  "status": "passed"
});
formatter.match({
  "location": "NewDrugSteps.clicks_on_latest_year_and_month()"
});
formatter.result({
  "duration": 5315362700,
  "status": "passed"
});
formatter.match({
  "location": "NewDrugSteps.user_can_find_the_recent_new_drug_that_has_been_approved_by_FDA()"
});
formatter.result({
  "duration": 2372266300,
  "status": "passed"
});
formatter.after({
  "duration": 841837300,
  "status": "passed"
});
formatter.uri("Pillidentifier.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Feature 6:"
    }
  ],
  "line": 3,
  "name": "Identify medication using Pill Identifier",
  "description": "",
  "id": "identify-medication-using-pill-identifier",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@drugs"
    },
    {
      "line": 2,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User can successfully identify medication using Pill Identifier",
  "description": "",
  "id": "identify-medication-using-pill-identifier;user-can-successfully-identify-medication-using-pill-identifier",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User browses to Drugs.com homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Pill Identifier",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Clicks on Accept to accept terms",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Enters \"\u003cImprint\u003e\" , \"\u003cColor\u003e\", \"\u003cShape\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Search",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should be able to see the result that match the criteria",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "identify-medication-using-pill-identifier;user-can-successfully-identify-medication-using-pill-identifier;",
  "rows": [
    {
      "cells": [
        "Imprint",
        "Color",
        "Shape"
      ],
      "line": 14,
      "id": "identify-medication-using-pill-identifier;user-can-successfully-identify-medication-using-pill-identifier;;1"
    },
    {
      "cells": [
        "I 13",
        "White",
        "Capsule-shape"
      ],
      "line": 15,
      "id": "identify-medication-using-pill-identifier;user-can-successfully-identify-medication-using-pill-identifier;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2143794100,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User can successfully identify medication using Pill Identifier",
  "description": "",
  "id": "identify-medication-using-pill-identifier;user-can-successfully-identify-medication-using-pill-identifier;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@regression"
    },
    {
      "line": 2,
      "name": "@drugs"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User browses to Drugs.com homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Pill Identifier",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Clicks on Accept to accept terms",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Enters \"I 13\" , \"White\", \"Capsule-shape\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Search",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should be able to see the result that match the criteria",
  "keyword": "Then "
});
formatter.match({
  "location": "PillidentifierSteps.user_browses_to_Drugs_com_homepage()"
});
formatter.result({
  "duration": 2700194900,
  "status": "passed"
});
formatter.match({
  "location": "PillidentifierSteps.user_clicks_on_Pill_Identifier()"
});
formatter.result({
  "duration": 532158200,
  "status": "passed"
});
formatter.match({
  "location": "PillidentifierSteps.user_Clicks_on_Accept_to_accept_terms()"
});
formatter.result({
  "duration": 453657600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "I 13",
      "offset": 13
    },
    {
      "val": "White",
      "offset": 22
    },
    {
      "val": "Capsule-shape",
      "offset": 31
    }
  ],
  "location": "PillidentifierSteps.user_Enters(String,String,String)"
});
formatter.result({
  "duration": 1187080300,
  "status": "passed"
});
formatter.match({
  "location": "PillidentifierSteps.user_clicks_on_Search()"
});
formatter.result({
  "duration": 1509226600,
  "status": "passed"
});
formatter.match({
  "location": "PillidentifierSteps.user_should_be_able_to_see_the_result_that_match_the_criteria()"
});
formatter.result({
  "duration": 4128073100,
  "status": "passed"
});
formatter.after({
  "duration": 771733200,
  "status": "passed"
});
});