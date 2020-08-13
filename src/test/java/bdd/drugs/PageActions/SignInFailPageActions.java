package bdd.drugs.PageActions;

import org.openqa.selenium.support.PageFactory;
import bdd.drugs.PageElements.SignInFailPageLocators;
import bdd.utilities.SetupDrivers;
import junit.framework.Assert;


public class SignInFailPageActions {

	SignInFailPageLocators SignInFailPageLocatorsObj;
	
	public SignInFailPageActions (){
		SignInFailPageLocatorsObj = new SignInFailPageLocators ();
			PageFactory.initElements(SetupDrivers.driver, SignInFailPageLocatorsObj);
		}
	
	public void ValidateError () throws Exception {
		String error = SignInFailPageLocatorsObj.txtError.getText(); 
		Assert.assertEquals(error, "Login failed.");
		
		Thread.sleep(2000);
	}
}
