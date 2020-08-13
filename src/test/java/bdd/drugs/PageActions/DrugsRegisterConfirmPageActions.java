package bdd.drugs.PageActions;
//3rd Page of Register Page Actions for Feature 1:DrugsRegister.feature

import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import bdd.drugs.PageElements.DrugsRegisterConfirmPageLocators;
import bdd.utilities.SetupDrivers;

public class DrugsRegisterConfirmPageActions {

	DrugsRegisterConfirmPageLocators DrugsRegisterConfirmPageLocatorsObj;
	
	public DrugsRegisterConfirmPageActions() {
		DrugsRegisterConfirmPageLocatorsObj = new DrugsRegisterConfirmPageLocators();
		PageFactory.initElements(SetupDrivers.driver, DrugsRegisterConfirmPageLocatorsObj);
		
	}
	
	public void VerifyConfirmPage() throws Exception {
		Thread.sleep(1000);
		String confirmMsg = DrugsRegisterConfirmPageLocatorsObj.txtYourAccount.getText();
		Assert.assertEquals(confirmMsg, "Create Your Account");
	
}

}
	
