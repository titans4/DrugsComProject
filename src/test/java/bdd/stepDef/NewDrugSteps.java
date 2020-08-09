// Step Definition class for feature 8: NewDrug.feature

package bdd.stepDef;

import bdd.drugs.PageActions.DrugsHomePageActions;
import bdd.drugs.PageActions.NewDrugApprovalPageActions;
import bdd.drugs.PageActions.NewDrugsPageActions;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class NewDrugSteps {

	DrugsHomePageActions DrugsHomePageActionsObj= new DrugsHomePageActions();
	NewDrugsPageActions NewDrugsPageActionsObj = new NewDrugsPageActions();
	NewDrugApprovalPageActions NewDrugApprovalPageActionsObj = new NewDrugApprovalPageActions();

	@When("^User clicks on New Drugs tab$")
	public void user_clicks_on_New_Drugs_tab() throws Throwable {
		DrugsHomePageActionsObj.loadDrugsHomepage();
		DrugsHomePageActionsObj.newDrugs();
	}

	@When("^user scrolls down to archive$")
	public void user_scrolls_down_to_archive() throws Throwable {
		NewDrugsPageActionsObj.scrollArchive();
	}

	@When("^Clicks on latest year and month$")
	public void clicks_on_latest_year_and_month() throws Throwable {
		NewDrugsPageActionsObj.selectMonth();
	}

	@Then("^User can find the recent new drug that has been approved by FDA$")
	public void user_can_find_the_recent_new_drug_that_has_been_approved_by_FDA() throws Throwable {
		NewDrugApprovalPageActionsObj.verifyNewDrug();
	}

}
