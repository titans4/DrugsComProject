//Page Elements for Feature 8: NewDrug.Feature

package bdd.drugs.PageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class NewDrugsPageLocators {


@FindBy(xpath="//b[contains(text(),'2020')]")
    public WebElement lnkAugust20;

@FindBy(xpath="//h2[contains(text(),'FDA Drug Approvals Archive')]")
public String lnkTitle;



}
