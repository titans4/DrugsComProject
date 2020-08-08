package bdd.drugs.PageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class DrugsRegisterConfirmPageLocators {

	// Webelement of your account title
	@FindBy(xpath = "//h1[contains(text(),'Your Account')]")
	public WebElement txtYourAccount;

}
