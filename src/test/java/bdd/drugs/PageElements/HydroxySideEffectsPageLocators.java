//3rd Page elements for Feature file-DrugsSideEffect.feature
package bdd.drugs.PageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HydroxySideEffectsPageLocators {

	
	@FindBy(xpath="//h1[contains(text(),'Hydroxychloroquine Side Effects')]")
    public WebElement txtSideEffectTitle;
	
	@FindBy(xpath="//i[contains(text(),'Symptoms of overdose')]")
    public WebElement txtOverdose;
	
}
