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
  "name": "User should able to find pricing of a drug",
  "description": "",
  "id": "users-ability-to-find-price-of-a-medication;user-should-able-to-find-pricing-of-a-drug",
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
  "id": "users-ability-to-find-price-of-a-medication;user-should-able-to-find-pricing-of-a-drug;",
  "rows": [
    {
      "cells": [
        "MedName"
      ],
      "line": 13,
      "id": "users-ability-to-find-price-of-a-medication;user-should-able-to-find-pricing-of-a-drug;;1"
    },
    {
      "cells": [
        "minoxidil"
      ],
      "line": 14,
      "id": "users-ability-to-find-price-of-a-medication;user-should-able-to-find-pricing-of-a-drug;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3078850400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should able to find pricing of a drug",
  "description": "",
  "id": "users-ability-to-find-price-of-a-medication;user-should-able-to-find-pricing-of-a-drug;;2",
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
  "duration": 3029813400,
  "status": "passed"
});
formatter.match({
  "location": "DrugPricingCouponSteps.user_scroll_down_click_on_Pricing_Coupon_Guide()"
});
formatter.result({
  "duration": 4762090400,
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
  "duration": 4329573300,
  "status": "passed"
});
formatter.match({
  "location": "DrugPricingCouponSteps.user_should_be_able_to_see_Price_List_of_the_Medication_successfully()"
});
formatter.result({
  "duration": 4363529800,
  "status": "passed"
});
formatter.after({
  "duration": 714419400,
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
  "name": "Fillup the register form with \"\u003cemail\u003e\", \"\u003cusername\u003e\", \"\u003cpassword\u003e\", \"\u003cage\u003e\"",
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
        "password",
        "age"
      ],
      "line": 16,
      "id": "drugs-registration-as-a-user;user-should-able-to-create-account-using-register-form;;1"
    },
    {
      "cells": [
        "panda13456@gmail.com",
        "panda2345",
        "panda7895",
        "25-34"
      ],
      "line": 17,
      "id": "drugs-registration-as-a-user;user-should-able-to-create-account-using-register-form;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2274530500,
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
  "name": "Fillup the register form with \"panda13456@gmail.com\", \"panda2345\", \"panda7895\", \"25-34\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
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
  "duration": 2135958700,
  "status": "passed"
});
formatter.match({
  "location": "DrugsRegisterSteps.click_on_Register_link()"
});
formatter.result({
  "duration": 1306448900,
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
    },
    {
      "val": "25-34",
      "offset": 81
    }
  ],
  "location": "DrugsRegisterSteps.fillup_the_register_form_with(String,String,String,String)"
});
formatter.result({
  "duration": 990960800,
  "status": "passed"
});
formatter.match({
  "location": "DrugsRegisterSteps.select_on_Terms_and_Privacy_checkbox()"
});
formatter.result({
  "duration": 78983300,
  "status": "passed"
});
formatter.match({
  "location": "DrugsRegisterSteps.user_click_on_register_button()"
});
formatter.result({
  "duration": 1081827200,
  "status": "passed"
});
formatter.match({
  "location": "DrugsRegisterSteps.user_should_see_registration_confirmation_details_successfully()"
});
formatter.result({
  "duration": 5029979900,
  "status": "passed"
});
formatter.after({
  "duration": 1130123500,
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
  "duration": 2168604500,
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
  "duration": 2181922900,
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
  "duration": 1707631500,
  "status": "passed"
});
formatter.match({
  "location": "DrugsSideEffectsSteps.user_scroll_down_and_click_on_Side_Effects_link()"
});
formatter.result({
  "duration": 1732115300,
  "status": "passed"
});
formatter.match({
  "location": "DrugsSideEffectsSteps.user_should_be_able_to_see_Side_Effects_page_and_overdose_symptom_successfully()"
});
formatter.result({
  "duration": 2836994300,
  "status": "passed"
});
formatter.after({
  "duration": 722680700,
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
  "duration": 2103518100,
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
  "duration": 2198460300,
  "status": "passed"
});
formatter.match({
  "location": "InteractionCheckerSteps.user_clicks_on_Interactions_Checker()"
});
formatter.result({
  "duration": 493724800,
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
  "duration": 241813000,
  "status": "passed"
});
formatter.match({
  "location": "InteractionCheckerSteps.clicks_on_Add_button()"
});
formatter.result({
  "duration": 1517407400,
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
  "duration": 2560992600,
  "status": "passed"
});
formatter.match({
  "location": "InteractionCheckerSteps.user_clicks_on_Check_for_Interactions_button()"
});
formatter.result({
  "duration": 599969600,
  "status": "passed"
});
formatter.match({
  "location": "InteractionCheckerSteps.user_should_be_able_to_see_the_Drug_Interaction_Report()"
});
formatter.result({
  "duration": 3264118800,
  "status": "passed"
});
formatter.after({
  "duration": 797497200,
  "status": "passed"
});
formatter.uri("MedicalNews.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Feature 5:"
    }
  ],
  "line": 3,
  "name": "User ability to browse site section and select Medical news",
  "description": "",
  "id": "user-ability-to-browse-site-section-and-select-medical-news",
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
  "name": "User should be able to browse medical news on the Medical news page",
  "description": "",
  "id": "user-ability-to-browse-site-section-and-select-medical-news;user-should-be-able-to-browse-medical-news-on-the-medical-news-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User browse to drugs.com homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on medical news link under Browse by Site Section",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters \"\u003cNews\u003e\" inside the search tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user clicks on the search tab button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user will be able to see search results",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "user-ability-to-browse-site-section-and-select-medical-news;user-should-be-able-to-browse-medical-news-on-the-medical-news-page;",
  "rows": [
    {
      "cells": [
        "News"
      ],
      "line": 13,
      "id": "user-ability-to-browse-site-section-and-select-medical-news;user-should-be-able-to-browse-medical-news-on-the-medical-news-page;;1"
    },
    {
      "cells": [
        "covid"
      ],
      "line": 14,
      "id": "user-ability-to-browse-site-section-and-select-medical-news;user-should-be-able-to-browse-medical-news-on-the-medical-news-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2122167300,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should be able to browse medical news on the Medical news page",
  "description": "",
  "id": "user-ability-to-browse-site-section-and-select-medical-news;user-should-be-able-to-browse-medical-news-on-the-medical-news-page;;2",
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
  "name": "User browse to drugs.com homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on medical news link under Browse by Site Section",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters \"covid\" inside the search tab",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user clicks on the search tab button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user will be able to see search results",
  "keyword": "Then "
});
formatter.match({
  "location": "MedicalNewsSteps.user_browse_to_drugs_com_homepage()"
});
formatter.result({
  "duration": 2173470700,
  "status": "passed"
});
formatter.match({
  "location": "MedicalNewsSteps.user_clicks_on_medical_news_link_under_Browse_by_Site_Section()"
});
formatter.result({
  "duration": 1645064800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "covid",
      "offset": 13
    }
  ],
  "location": "MedicalNewsSteps.user_enters_inside_the_search_tab(String)"
});
formatter.result({
  "duration": 2089632300,
  "status": "passed"
});
formatter.match({
  "location": "MedicalNewsSteps.user_clicks_on_the_search_tab_button()"
});
formatter.result({
  "duration": 1698038500,
  "status": "passed"
});
formatter.match({
  "location": "MedicalNewsSteps.user_will_be_able_to_see_search_results()"
});
formatter.result({
  "duration": 3673836800,
  "status": "passed"
});
formatter.after({
  "duration": 819672600,
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
  "duration": 2106102900,
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
  "duration": 2286909600,
  "status": "passed"
});
formatter.match({
  "location": "HairLossMedicationListSteps.user_clicks_on_Browse_Conditions_link()"
});
formatter.result({
  "duration": 2429328500,
  "status": "passed"
});
formatter.match({
  "location": "HairLossMedicationListSteps.click_on_alphabet_H_link_at_homepage()"
});
formatter.result({
  "duration": 559603600,
  "status": "passed"
});
formatter.match({
  "location": "HairLossMedicationListSteps.click_on_Hair_Loss_link_in_the_Condition_Page()"
});
formatter.result({
  "duration": 2802812900,
  "status": "passed"
});
formatter.match({
  "location": "HairLossMedicationListSteps.click_on_Medication_List_tab_on_Medications_Treatment_Options_page()"
});
formatter.result({
  "duration": 2781117000,
  "status": "passed"
});
formatter.match({
  "location": "HairLossMedicationListSteps.user_should_see_successful_message_of_Hair_Loss_Medications_Treatment_options_and_list_of_Medications()"
});
formatter.result({
  "duration": 3593319800,
  "status": "passed"
});
formatter.after({
  "duration": 828253400,
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
  "duration": 2257479500,
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
  "duration": 2209064200,
  "status": "passed"
});
formatter.match({
  "location": "NewDrugSteps.user_clicks_on_New_Drugs_tab()"
});
formatter.result({
  "duration": 2087261400,
  "status": "passed"
});
formatter.match({
  "location": "NewDrugSteps.user_scrolls_down_to_archive()"
});
formatter.result({
  "duration": 36243500,
  "status": "passed"
});
formatter.match({
  "location": "NewDrugSteps.clicks_on_latest_year_and_month()"
});
formatter.result({
  "duration": 5931509800,
  "status": "passed"
});
formatter.match({
  "location": "NewDrugSteps.user_can_find_the_recent_new_drug_that_has_been_approved_by_FDA()"
});
formatter.result({
  "duration": 4427923900,
  "status": "passed"
});
formatter.after({
  "duration": 834142300,
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
  "duration": 2104571800,
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
  "duration": 2211638300,
  "status": "passed"
});
formatter.match({
  "location": "PillidentifierSteps.user_clicks_on_Pill_Identifier()"
});
formatter.result({
  "duration": 1449540600,
  "status": "passed"
});
formatter.match({
  "location": "PillidentifierSteps.user_Clicks_on_Accept_to_accept_terms()"
});
formatter.result({
  "duration": 2615617300,
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
  "duration": 1066130700,
  "status": "passed"
});
formatter.match({
  "location": "PillidentifierSteps.user_clicks_on_Search()"
});
formatter.result({
  "duration": 1623151500,
  "status": "passed"
});
formatter.match({
  "location": "PillidentifierSteps.user_should_be_able_to_see_the_result_that_match_the_criteria()"
});
formatter.result({
  "duration": 4050527000,
  "status": "passed"
});
formatter.after({
  "duration": 800869200,
  "status": "passed"
});
formatter.uri("SignIn.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Feature 2"
    }
  ],
  "line": 3,
  "name": "Sign in with invalid information",
  "description": "",
  "id": "sign-in-with-invalid-information",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@Drugs"
    },
    {
      "line": 2,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "User can sign in with invalid information",
  "description": "",
  "id": "sign-in-with-invalid-information;user-can-sign-in-with-invalid-information",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User is on Drugs.com Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User navigates to Sign In Page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters incorrect \"\u003cusername\u003e\" with \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User can see log in failed message",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "sign-in-with-invalid-information;user-can-sign-in-with-invalid-information;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 14,
      "id": "sign-in-with-invalid-information;user-can-sign-in-with-invalid-information;;1"
    },
    {
      "cells": [
        "abc123as",
        "Woohoo"
      ],
      "line": 15,
      "id": "sign-in-with-invalid-information;user-can-sign-in-with-invalid-information;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2154330400,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User can sign in with invalid information",
  "description": "",
  "id": "sign-in-with-invalid-information;user-can-sign-in-with-invalid-information;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@regression"
    },
    {
      "line": 2,
      "name": "@Drugs"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on Drugs.com Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User navigates to Sign In Page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters incorrect \"abc123as\" with \"Woohoo\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User can see log in failed message",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.user_is_on_Drugs_com_Home_Page()"
});
formatter.result({
  "duration": 2286900500,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.user_navigates_to_Sign_In_Page()"
});
formatter.result({
  "duration": 1476755900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123as",
      "offset": 23
    },
    {
      "val": "Woohoo",
      "offset": 39
    }
  ],
  "location": "SignInSteps.user_enters_incorrect_with(String,String)"
});
formatter.result({
  "duration": 1257995300,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.user_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 345494600,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.user_can_see_log_in_failed_message()"
});
formatter.result({
  "duration": 2033385700,
  "status": "passed"
});
formatter.after({
  "duration": 1117616000,
  "status": "passed"
});
});