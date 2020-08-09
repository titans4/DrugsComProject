package bdd.drugs.PageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class InteractionCheckLocators {

	@FindBy(xpath="//input[@id='livesearch-interaction-basic']")
	public WebElement txtDrugNameOne;
	
	
	@FindBy(xpath="//input[@id='livesearch-interaction']")
	public WebElement txtDrugNameTwo;
	
}
