//Step Definition class for feature 1: DrugsRegister.feature

package bdd.stepDef;

import bdd.drugs.PageActions.DrugsHomePageActions;
import bdd.drugs.PageActions.DrugsRegisterConfirmPageActions;
import bdd.drugs.PageActions.DrugsRegisterPageActions;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DrugsRegisterSteps {
	
	DrugsHomePageActions DrugsHomePageActionsObj= new DrugsHomePageActions();
	DrugsRegisterPageActions DrugsRegisterPageActionsObj = new DrugsRegisterPageActions();
	DrugsRegisterConfirmPageActions DrugsRegisterConfirmPageActionsObj = new DrugsRegisterConfirmPageActions();

	@When("^click on Register link$")
	public void click_on_Register_link() throws Throwable {
		DrugsHomePageActionsObj.navigateRegisterPage();
	}

	@When("^Fillup the register form with \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
	public void fillup_the_register_form_with(String email, String userName, String password) throws Throwable {
		DrugsRegisterPageActionsObj.fillUserInfo( email, userName, password);
	}

	@When("^select on Terms and Privacy checkbox$")
	public void select_on_Terms_and_Privacy_checkbox() throws Throwable {
		DrugsRegisterPageActionsObj.checkBoxPrivacy();
	}

	@When("^User click on register button$")
	public void user_click_on_register_button() throws Throwable {
		DrugsRegisterPageActionsObj.SubmitRegForm();
	}

	@Then("^User should see registration confirmation details successfully$")
	public void user_should_see_registration_confirmation_details_successfully() throws Throwable {
		DrugsRegisterConfirmPageActionsObj.VerifyConfirmPage();
	}

	
}
