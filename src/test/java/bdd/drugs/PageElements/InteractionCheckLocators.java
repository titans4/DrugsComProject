package bdd.drugs.PageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class InteractionCheckLocators {

	@FindBy(xpath="//input[@id='livesearch-interaction-basic']")
	public WebElement txtDrugNameOne;
	
	
	@FindBy(xpath="//input[@id='livesearch-interaction']")
	public WebElement txtDrugNameTwo;
	
	//form[@id='drug-interactions-search']//input[@class='ddc-btn']
	
	@FindBy(xpath="//form[@id='drug-interactions-search']//input[@class='ddc-btn']")
	public WebElement btnAdd;
	
	@FindBy(xpath="//form[@id='drug-interactions-search']//input[@class='ddc-btn']")
	public WebElement btnAddTwo;
	
	@FindBy(xpath="//a[contains(text(),'Check for Interactions')]")
	public WebElement btnCheck;
}
