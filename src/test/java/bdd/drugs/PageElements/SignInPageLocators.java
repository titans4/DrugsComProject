package bdd.drugs.PageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class SignInPageLocators {

	@FindBy(xpath="//input[@id='user-username']")
    public WebElement txtUserName;
	
	@FindBy(xpath="//input[@id='user-password']")
    public WebElement txtPassword;
	
	@FindBy(xpath="//input[@class='ddc-btn']")
    public WebElement btnSignIn;
}
