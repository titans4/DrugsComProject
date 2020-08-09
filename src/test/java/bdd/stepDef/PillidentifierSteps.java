package bdd.stepDef;

import bdd.drugs.PageActions.DrugsHomePageActions;
import bdd.drugs.PageActions.PillResultPageActions;
import bdd.drugs.PageActions.PillidentifierPageActions;
import bdd.drugs.PageActions.PillinfoPageActions;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PillidentifierSteps {
	
	DrugsHomePageActions DrugsHomePageActionsObj= new DrugsHomePageActions();
	PillidentifierPageActions PillidentifierPageActionsObj = new PillidentifierPageActions();
	PillinfoPageActions PillinfoPageActionsObj = new PillinfoPageActions();
	PillResultPageActions PillResultPageActionsObj = new PillResultPageActions();
	
	@Given("^User browses to Drugs\\.com homepage$")
	public void user_browses_to_Drugs_com_homepage() throws Throwable {
		DrugsHomePageActionsObj.loadDrugsHomepage();
	}

	@When("^User clicks on Pill Identifier$")
	public void user_clicks_on_Pill_Identifier() throws Throwable {
		DrugsHomePageActionsObj.clickPillIdentifier();
	}

	@When("^User Clicks on Accept to accept terms$")
	public void user_Clicks_on_Accept_to_accept_terms() throws Throwable {
		PillidentifierPageActionsObj.clickAccept();
	}

	@When("^User Enters \"([^\"]*)\" , \"([^\"]*)\", \"([^\"]*)\"$")
	public void user_Enters(String Imprint, String Color, String Shape) throws Throwable {
		PillinfoPageActionsObj.enterInfo(Imprint,Color,Shape);
		
	}

	@When("^User clicks on Search$")
	public void user_clicks_on_Search() throws Throwable {
		PillinfoPageActionsObj.clickSearch();
	}

	@Then("^User should be able to see the result that match the criteria$")
	public void user_should_be_able_to_see_the_result_that_match_the_criteria() throws Throwable {
		PillResultPageActionsObj.verifyImageResults();
	}



}
