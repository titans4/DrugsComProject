package bdd.drugs.PageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class DrugsHomePageLocators {
	
	// Register Link
	@FindBy(xpath = "//a[@class='ddc-btn ddc-btn-empty ddc-btn-sm ddc-btn-register']")
	public WebElement lnkRegister;


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
	
	//Pricing and coupon guide link 
	@FindBy(xpath="//a[contains(text(),'Pricing & Coupon Guide')]")
    public WebElement lnkPriceCoupon;
	
}
