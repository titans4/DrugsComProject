package bdd.stepDef;

import bdd.drugs.PageActions.DrugsHomePageActions;
import bdd.drugs.PageActions.InteractionCheckActions;
import bdd.drugs.PageActions.InteractionReportActions;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class InteractionCheckerSteps {
	
	DrugsHomePageActions DrugsHomePageActionsObj= new DrugsHomePageActions();
	InteractionCheckActions InteractionCheckActionsObj = new InteractionCheckActions();
	InteractionReportActions InteractionReportActionsObj = new InteractionReportActions();

	@Given("^User browses to drugs\\.com homepage$")
	public void user_browses_to_drugs_com_homepage() throws Throwable {
		DrugsHomePageActionsObj.loadDrugsHomepage();
	}

	@When("^User clicks on Interactions Checker$")
	public void user_clicks_on_Interactions_Checker() throws Throwable {
		DrugsHomePageActionsObj.interactionCheck();
	}

	@When("^User enters a drug name \"([^\"]*)\"$")
	public void user_enters_a_drug_name(String drug1) throws Throwable {
		InteractionCheckActionsObj.enterDrugNames(drug1);
	}

	@When("^Clicks on Add button$")
	public void clicks_on_Add_button() throws Throwable {
		InteractionCheckActionsObj.clickAdd();
	}

	@When("^Enters another name \"([^\"]*)\"$")
	public void enters_another_name(String drug2) throws Throwable {
		InteractionCheckActionsObj.enterDrugTwo(drug2);
	}

	@When("^User clicks on Check for Interactions button$")
	public void user_clicks_on_Check_for_Interactions_button() throws Throwable {
		InteractionCheckActionsObj.checkInteraction();
	}

	@Then("^User should be able to see the Drug Interaction Report$")
	public void user_should_be_able_to_see_the_Drug_Interaction_Report() throws Throwable {
		InteractionReportActionsObj.drugIntReport();
	}
}
