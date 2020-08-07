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
  "duration": 5962738648,
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
  "duration": 4038726149,
  "status": "passed"
});
formatter.match({
  "location": "DrugPricingCouponSteps.user_scroll_down_click_on_Pricing_Coupon_Guide()"
});
formatter.result({
  "duration": 4958170254,
  "status": "passed"
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
  "duration": 1952256954,
  "status": "passed"
});
formatter.match({
  "location": "DrugPricingCouponSteps.user_should_be_able_to_see_Price_List_of_the_Medication_successfully()"
});
formatter.result({
  "duration": 5057261893,
  "status": "passed"
});
formatter.after({
  "duration": 787264851,
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
  "duration": 2546515230,
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
  "duration": 4254738898,
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
  "duration": 5723450091,
  "status": "passed"
});
formatter.match({
  "location": "DrugsSideEffectsSteps.user_scroll_down_and_click_on_Side_Effects_link()"
});
formatter.result({
  "duration": 4082318316,
  "status": "passed"
});
formatter.match({
  "location": "DrugsSideEffectsSteps.user_should_be_able_to_see_Side_Effects_page_and_overdose_symptom_successfully()"
});
formatter.result({
  "duration": 5595817772,
  "status": "passed"
});
formatter.after({
  "duration": 2077468626,
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
  "duration": 2557817023,
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
  "duration": 3000487488,
  "status": "passed"
});
formatter.match({
  "location": "HairLossMedicationListSteps.user_clicks_on_Browse_Conditions_link()"
});
formatter.result({
  "duration": 3643427867,
  "status": "passed"
});
formatter.match({
  "location": "HairLossMedicationListSteps.click_on_alphabet_H_link_at_homepage()"
});
formatter.result({
  "duration": 870688296,
  "status": "passed"
});
formatter.match({
  "location": "HairLossMedicationListSteps.click_on_Hair_Loss_link_in_the_Condition_Page()"
});
formatter.result({
  "duration": 4903252502,
  "status": "passed"
});
formatter.match({
  "location": "HairLossMedicationListSteps.click_on_Medication_List_tab_on_Medications_Treatment_Options_page()"
});
formatter.result({
  "duration": 3974704731,
  "status": "passed"
});
formatter.match({
  "location": "HairLossMedicationListSteps.user_should_see_successful_message_of_Hair_Loss_Medications_Treatment_options_and_list_of_Medications()"
});
formatter.result({
  "duration": 7323678581,
  "status": "passed"
});
formatter.after({
  "duration": 1016058651,
  "status": "passed"
});
});