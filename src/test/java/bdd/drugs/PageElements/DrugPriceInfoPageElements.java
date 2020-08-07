//Page Elements of 2nd Page for Feature 8
package bdd.drugs.PageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class DrugPriceInfoPageElements {

	@FindBy(xpath="//input[@id='livesearch-price-guide']")
    public WebElement txtBoxPriceCoupon;
	
	@FindBy(xpath="//var[contains(text(),'topical')]")
    public WebElement autolstMinoxidil;
	
}
