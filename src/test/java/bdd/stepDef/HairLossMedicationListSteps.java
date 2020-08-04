//Step Definition class for Feature File-MedicationHairLoss.feature

package bdd.stepDef;

import bdd.drugs.PageActions.ConditionsHPageActions;
import bdd.drugs.PageActions.DrugsHomePageActions;
import bdd.drugs.PageActions.HairLossMedListPageActions;
import bdd.drugs.PageActions.HairLossMedicationPageActions;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HairLossMedicationListSteps {

	DrugsHomePageActions DrugsHomePageActionsObj= new DrugsHomePageActions();
	ConditionsHPageActions ConditionsHPageActionsObj=new ConditionsHPageActions();
	HairLossMedicationPageActions HairLossMedicationPageActionsObj=new HairLossMedicationPageActions();
	HairLossMedListPageActions HairLossMedListPageActionsObj=new HairLossMedListPageActions();
	
	@When("^user clicks on Browse Conditions link$")
	public void user_clicks_on_Browse_Conditions_link() throws Throwable {
		DrugsHomePageActionsObj.loadDrugsHomepage();
		DrugsHomePageActionsObj.browseConditionAlphabet();
	}

	@When("^click on alphabet H link at homepage$")
	public void click_on_alphabet_H_link_at_homepage() throws Throwable {
		DrugsHomePageActionsObj.browseAlphbetH();
	}

	@When("^click on Hair Loss link in the Condition Page$")
	public void click_on_Hair_Loss_link_in_the_Condition_Page() throws Throwable {
		ConditionsHPageActionsObj.hairLossLink();
	}

	@When("^click on Medication List tab on Medications & Treatment Options page$")
	public void click_on_Medication_List_tab_on_Medications_Treatment_Options_page() throws Throwable {
		HairLossMedicationPageActionsObj.medicationListTab();
	}

	@Then("^user should see successful message of Hair Loss Medications Treatment options and  list of Medications$")
	public void user_should_see_successful_message_of_Hair_Loss_Medications_Treatment_options_and_list_of_Medications() throws Throwable {
	    
		HairLossMedListPageActionsObj.hairLossMedicationLists();
	}

}
