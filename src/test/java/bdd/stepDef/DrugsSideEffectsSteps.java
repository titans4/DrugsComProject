//Step Definition class for Feature File-DrugsSideEffect.feature
package bdd.stepDef;

import bdd.drugs.PageActions.DrugsHomePageActions;
import bdd.drugs.PageActions.HydroxySideEffectsPageActions;
import bdd.drugs.PageActions.HydroxychloroquineResultPageActions;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DrugsSideEffectsSteps {

	DrugsHomePageActions DrugsHomePageActionsObj= new DrugsHomePageActions();
	HydroxychloroquineResultPageActions HydroxychloroquineResultPageActionsObj=new HydroxychloroquineResultPageActions();
	HydroxySideEffectsPageActions HydroxySideEffectsPageActionsObj=new HydroxySideEffectsPageActions();
	
	@Given("^browse to drugs homepage$")
	public void browse_to_drugs_homepage() throws Throwable {
	    
		DrugsHomePageActionsObj.loadDrugsHomepage();
		
	}

	@When("^user enter \"([^\"]*)\", clicks on Search icon$")
	public void user_enter_clicks_on_Search_icon(String drug_name) throws Throwable {
	    
		DrugsHomePageActionsObj.searchBox(drug_name);
		Thread.sleep(3000);
		
	}

	@When("^user scroll down and click on Side Effects link$")
	public void user_scroll_down_and_click_on_Side_Effects_link() throws Throwable {
	    
		HydroxychloroquineResultPageActionsObj.sideEffects();
		Thread.sleep(3000);
	}

	@Then("^user should be able to see Side Effects page, and overdose symptom  successfully$")
	public void user_should_be_able_to_see_Side_Effects_page_and_overdose_symptom_successfully() throws Throwable {
	    
		HydroxySideEffectsPageActionsObj.sideEffectConfirmationMessage();
	}
	
	
}	
