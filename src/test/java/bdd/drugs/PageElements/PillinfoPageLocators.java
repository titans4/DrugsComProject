package bdd.drugs.PageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class PillinfoPageLocators {
	
	@FindBy(xpath="//input[@id='livesearch-imprint']")
	public WebElement txtImprint;
	
	@FindBy(xpath="//select[@id='color-select']")
	public WebElement txtColor;
	
	@FindBy(xpath="//select[@id='shape-select']")
	public WebElement txtShape;

	@FindBy(xpath="//input[@class='ddc-btn btn-block']")
	public WebElement lnkSearch;
	
	
	@FindBy(xpath="//div[@id='ls-wrap']//a[1]")
	public WebElement enterImprint;
}
