package bdd.drugs.PageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class InteractionReportLocator {
	
	@FindBy(xpath="//h1[contains(text(),'Drug Interaction Report')]")
	public WebElement txtDrugReport;

}
