package bdd.drugs.PageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class SignInFailPageLocators {

	@FindBy(xpath="//b[@class='text-color-error']")
    public WebElement txtError;
}
