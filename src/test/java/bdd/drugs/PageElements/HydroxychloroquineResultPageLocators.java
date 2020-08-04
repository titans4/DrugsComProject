//2nd Page elements of feature file- DrugsSideEffect.feature
package bdd.drugs.PageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HydroxychloroquineResultPageLocators {

	@FindBy(xpath="//ul[@class='search-result-secondary ddc-list-column-2']//a[contains(text(),'Side Effects')]")
    public WebElement lnkSideEffect;
}
