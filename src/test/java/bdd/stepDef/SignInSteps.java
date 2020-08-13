package bdd.stepDef;

import bdd.drugs.PageActions.DrugsHomePageActions;
import bdd.drugs.PageActions.SignInFailPageActions;
import bdd.drugs.PageActions.SignInPageActions;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SignInSteps {
	
	DrugsHomePageActions DrugsHomePageActionsObj = new DrugsHomePageActions();
	SignInPageActions SignInPageActionsObj = new SignInPageActions();
	SignInFailPageActions SignInFailPageActionsObj = new SignInFailPageActions();

	@Given("^User is on Drugs\\.com Home Page$")
	public void user_is_on_Drugs_com_Home_Page() throws Throwable {
		DrugsHomePageActionsObj.loadDrugsHomepage();
	}

	@When("^User navigates to Sign In Page$")
	public void user_navigates_to_Sign_In_Page() throws Throwable {
		DrugsHomePageActionsObj.SignIn();
	}

	@When("^User enters incorrect \"([^\"]*)\" with \"([^\"]*)\"$")
	public void user_enters_incorrect_with(String username, String password) throws Throwable {
		SignInPageActionsObj.enterSignInfo(username, password);
	}

	@When("^User clicks on sign in button$")
	public void user_clicks_on_sign_in_button() throws Throwable {
		SignInPageActionsObj.clickSignIn();
	}

	@Then("^User can see log in failed message$")
	public void user_can_see_log_in_failed_message() throws Throwable {
		SignInFailPageActionsObj.ValidateError();
	}
}
