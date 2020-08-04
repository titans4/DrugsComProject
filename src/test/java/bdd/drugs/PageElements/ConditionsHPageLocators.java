package bdd.drugs.PageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ConditionsHPageLocators {
	//Locating Hair Loss Element
	@FindBy(xpath="//ul[contains(@class,'ddc-list-column-2')]//li[1]//a[1]")
    public WebElement lnkHairLoss;

}
