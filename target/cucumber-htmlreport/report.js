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
  "duration": 3293499071,
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
  "duration": 3099579592,
  "status": "passed"
});
formatter.match({
  "location": "DrugPricingCouponSteps.user_scroll_down_click_on_Pricing_Coupon_Guide()"
});
formatter.result({
  "duration": 5113553073,
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
  "duration": 1545979907,
  "status": "passed"
});
formatter.match({
  "location": "DrugPricingCouponSteps.user_should_be_able_to_see_Price_List_of_the_Medication_successfully()"
});
formatter.result({
  "duration": 5174638651,
  "status": "passed"
});
formatter.after({
  "duration": 708980366,
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
  "duration": 2571099890,
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
  "duration": 2444257689,
  "status": "passed"
});
formatter.match({
  "location": "DrugsRegisterSteps.click_on_Register_link()"
});
formatter.result({
  "duration": 1763833531,
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
  "duration": 1164686849,
  "status": "passed"
});
formatter.match({
  "location": "DrugsRegisterSteps.select_on_Terms_and_Privacy_checkbox()"
});
formatter.result({
  "duration": 116794767,
  "status": "passed"
});
formatter.match({
  "location": "DrugsRegisterSteps.user_click_on_register_button()"
});
formatter.result({
  "duration": 167811919,
  "status": "passed"
});
formatter.match({
  "location": "DrugsRegisterSteps.user_should_see_registration_confirmation_details_successfully()"
});
formatter.result({
  "duration": 157736496,
  "status": "passed"
});
formatter.after({
  "duration": 723397486,
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
  "duration": 2578004527,
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
  "duration": 2679385734,
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
  "duration": 4617940953,
  "status": "passed"
});
formatter.match({
  "location": "DrugsSideEffectsSteps.user_scroll_down_and_click_on_Side_Effects_link()"
});
formatter.result({
  "duration": 3823016731,
  "status": "passed"
});
formatter.match({
  "location": "DrugsSideEffectsSteps.user_should_be_able_to_see_Side_Effects_page_and_overdose_symptom_successfully()"
});
formatter.result({
  "duration": 13700375345,
  "status": "passed"
});
formatter.after({
  "duration": 845839211,
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
  "duration": 2609802429,
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
  "duration": 2890493798,
  "status": "passed"
});
formatter.match({
  "location": "InteractionCheckerSteps.user_clicks_on_Interactions_Checker()"
});
formatter.result({
  "duration": 980927697,
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
  "duration": 403736276,
  "status": "passed"
});
formatter.match({
  "location": "InteractionCheckerSteps.clicks_on_Add_button()"
});
formatter.result({
  "duration": 1948576062,
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
  "duration": 1720424028,
  "status": "passed"
});
formatter.match({
  "location": "InteractionCheckerSteps.user_clicks_on_Check_for_Interactions_button()"
});
formatter.result({
  "duration": 1505631563,
  "status": "passed"
});
formatter.match({
  "location": "InteractionCheckerSteps.user_should_be_able_to_see_the_Drug_Interaction_Report()"
});
formatter.result({
  "duration": 3233412732,
  "status": "passed"
});
formatter.after({
  "duration": 865648115,
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
  "duration": 2576632090,
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
  "duration": 2741313807,
  "status": "passed"
});
formatter.match({
  "location": "HairLossMedicationListSteps.user_clicks_on_Browse_Conditions_link()"
});
formatter.result({
  "duration": 3637763385,
  "status": "passed"
});
formatter.match({
  "location": "HairLossMedicationListSteps.click_on_alphabet_H_link_at_homepage()"
});
formatter.result({
  "duration": 1456421625,
  "status": "passed"
});
formatter.match({
  "location": "HairLossMedicationListSteps.click_on_Hair_Loss_link_in_the_Condition_Page()"
});
formatter.result({
  "duration": 5253594367,
  "status": "passed"
});
formatter.match({
  "location": "HairLossMedicationListSteps.click_on_Medication_List_tab_on_Medications_Treatment_Options_page()"
});
formatter.result({
  "duration": 4871992487,
  "status": "passed"
});
formatter.match({
  "location": "HairLossMedicationListSteps.user_should_see_successful_message_of_Hair_Loss_Medications_Treatment_options_and_list_of_Medications()"
});
formatter.result({
  "duration": 5161130269,
  "status": "passed"
});
formatter.after({
  "duration": 826912922,
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
  "duration": 2585563661,
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
  "duration": 2880450096,
  "status": "passed"
});
formatter.match({
  "location": "NewDrugSteps.user_clicks_on_New_Drugs_tab()"
});
formatter.result({
  "duration": 2242836457,
  "status": "passed"
});
formatter.match({
  "location": "NewDrugSteps.user_scrolls_down_to_archive()"
});
formatter.result({
  "duration": 37378150,
  "status": "passed"
});
formatter.match({
  "location": "NewDrugSteps.clicks_on_latest_year_and_month()"
});
formatter.result({
  "duration": 3070040007,
  "status": "passed"
});
formatter.match({
  "location": "NewDrugSteps.user_can_find_the_recent_new_drug_that_has_been_approved_by_FDA()"
});
formatter.result({
  "duration": 4694622025,
  "status": "passed"
});
formatter.after({
  "duration": 803106130,
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
  "duration": 2586586224,
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
  "duration": 3151825033,
  "status": "passed"
});
formatter.match({
  "location": "PillidentifierSteps.user_clicks_on_Pill_Identifier()"
});
formatter.result({
  "duration": 770012297,
  "status": "passed"
});
formatter.match({
  "location": "PillidentifierSteps.user_Clicks_on_Accept_to_accept_terms()"
});
formatter.result({
  "duration": 732079946,
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
  "duration": 2497682438,
  "status": "passed"
});
formatter.match({
  "location": "PillidentifierSteps.user_clicks_on_Search()"
});
formatter.result({
  "duration": 1941665360,
  "status": "passed"
});
formatter.match({
  "location": "PillidentifierSteps.user_should_be_able_to_see_the_result_that_match_the_criteria()"
});
formatter.result({
  "duration": 6559025989,
  "status": "passed"
});
formatter.after({
  "duration": 1210966248,
  "status": "passed"
});
});