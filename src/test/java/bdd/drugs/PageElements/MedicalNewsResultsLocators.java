package bdd.drugs.PageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class MedicalNewsResultsLocators {

	@FindBy(xpath="//a[contains(text(),'Search Results')]")
	public WebElement lnkResults;
	
	
}
