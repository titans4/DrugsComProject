package bdd.drugs.PageActions;

import org.openqa.selenium.support.PageFactory;

import bdd.drugs.PageElements.SignInPageLocators;
import bdd.utilities.SetupDrivers;

public class SignInPageActions {

	SignInPageLocators SignInPageLocatorsObj;
	public SignInPageActions(){
		SignInPageLocatorsObj =  new SignInPageLocators();
		PageFactory.initElements(SetupDrivers.driver, SignInPageLocatorsObj);
	}
	
	public void enterSignInfo (String username, String password) throws Exception{
		SignInPageLocatorsObj.txtUserName.clear();
		SignInPageLocatorsObj.txtUserName.sendKeys(username);
		SignInPageLocatorsObj.txtPassword.clear();
		SignInPageLocatorsObj.txtPassword.sendKeys(password);
		Thread.sleep(1000);
	}
	
	public void clickSignIn () {
		SignInPageLocatorsObj.btnSignIn.click();
	}
}
