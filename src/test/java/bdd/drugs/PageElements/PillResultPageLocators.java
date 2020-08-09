package bdd.drugs.PageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class PillResultPageLocators {

	@FindBy(xpath="//p[contains(text(),'Below are results that match your criteria. Click')]")
    public WebElement txtResult;
	
}
