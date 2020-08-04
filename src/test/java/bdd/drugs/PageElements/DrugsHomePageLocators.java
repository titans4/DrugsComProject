package bdd.drugs.PageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class DrugsHomePageLocators {

	//Search Box 
	@FindBy(xpath="//input[@id='livesearch-main']")
    public WebElement txtSearchBox;
	
	//Search Icon
	@FindBy(xpath="//i[@class='icon icon-search']")
    public WebElement lnkSearIcon;
	
	//Browse Conditions tab
	@FindBy(xpath="//a[@class='nav-item']")
    public WebElement tabBrowseConditions;
	
	//Alphabet letter H selection
	@FindBy(linkText="H")
    public WebElement tabAlphabetLetterH;
	
	
	
}
