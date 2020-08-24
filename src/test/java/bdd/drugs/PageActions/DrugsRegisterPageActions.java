//2nd Page of Register Page Actions for Feature 1:DrugsRegister.feature

package bdd.drugs.PageActions;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import bdd.drugs.PageElements.DrugsRegisterPageLocators;
import bdd.utilities.SetupDrivers;

public class DrugsRegisterPageActions {

	DrugsRegisterPageLocators DrugsRegisterPageLocatorsObj;

	public DrugsRegisterPageActions() {
		DrugsRegisterPageLocatorsObj = new DrugsRegisterPageLocators();
		PageFactory.initElements(SetupDrivers.driver, DrugsRegisterPageLocatorsObj);

	}

	//filling user details
	public void fillUserInfo( String email, String userName, String password, String age) {
		DrugsRegisterPageLocatorsObj.txtEmail.clear();
		DrugsRegisterPageLocatorsObj.txtEmail.sendKeys(email);
		DrugsRegisterPageLocatorsObj.txtUserName.clear();
		DrugsRegisterPageLocatorsObj.txtUserName.sendKeys(userName);
		DrugsRegisterPageLocatorsObj.txtPassword.clear();
		DrugsRegisterPageLocatorsObj.txtPassword.sendKeys(password);
		
		JavascriptExecutor scroll = (JavascriptExecutor) SetupDrivers.driver;
		scroll.executeScript("window.scrollBy(0,200)");
		
		Select drop = new Select(DrugsRegisterPageLocatorsObj.txtAge);
		drop.selectByVisibleText(age);
		
	}

	//checkbox selection
	public void checkBoxPrivacy() {
		DrugsRegisterPageLocatorsObj.chkBox.click();	
	}
	
	
	//clicking on submit button
	public void SubmitRegForm() throws Exception {
		Thread.sleep(1000);
		DrugsRegisterPageLocatorsObj.lnkSubmit.click();
	}

}
