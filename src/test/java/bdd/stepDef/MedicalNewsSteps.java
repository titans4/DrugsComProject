package bdd.stepDef;

import bdd.drugs.PageActions.DrugsHomePageActions;
import bdd.drugs.PageActions.MedicalNewsPageActions;
import bdd.drugs.PageActions.MedicalNewsResultsActions;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MedicalNewsSteps {
	DrugsHomePageActions DrugsHomePageActionsObj = new DrugsHomePageActions();
	MedicalNewsPageActions MedicalNewsPageActionsObj = new MedicalNewsPageActions();
	MedicalNewsResultsActions MedicalNewsResultsActionsObj = new MedicalNewsResultsActions();
	
	@Given("^User browse to drugs\\.com homepage$")
	public void user_browse_to_drugs_com_homepage() throws Throwable {
		DrugsHomePageActionsObj.loadDrugsHomepage();
	}

	@When("^User clicks on medical news link under Browse by Site Section$")
	public void user_clicks_on_medical_news_link_under_Browse_by_Site_Section() throws Throwable {
		DrugsHomePageActionsObj.medicalNews(); 
	}

	@When("^User enters \"([^\"]*)\" inside the search tab$")
	public void user_enters_inside_the_search_tab(String News) throws Throwable {
		MedicalNewsPageActionsObj.enterSearch(News);  
	}

	@When("^user clicks on the search tab button$")
	public void user_clicks_on_the_search_tab_button() throws Throwable {
		MedicalNewsPageActionsObj.clickSearch();
	}

	@Then("^user will be able to see search results$")
	public void user_will_be_able_to_see_search_results() throws Throwable {
		MedicalNewsResultsActionsObj.verifySearchResults();
	}

}
