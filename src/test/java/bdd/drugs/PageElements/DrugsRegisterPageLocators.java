//2nd page elements of Feature 1: DrugsRegister.feature

package bdd.drugs.PageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class DrugsRegisterPageLocators {

	 // Email
	@FindBy(xpath = "//input[@id='user-email']")
	public WebElement txtEmail;


    // User Name
	@FindBy(xpath = "//input[@id='user-username']")
	public WebElement txtUserName;
	
	
	// Password
	@FindBy(xpath = "//input[@id='user-password']")
	public WebElement txtPassword;
	
	//Checkbox
	@FindBy(xpath = "//input[@id='terms']")
	public WebElement chkBox;


	// Register
    @FindBy(xpath = "//input[@class='ddc-btn g-recaptcha']")
    public WebElement lnkSubmit;

}
