package bdd.drugs.PageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class MedicalNewsPageLocators {

	@FindBy(xpath="//input[@placeholder='Search news']")
	public WebElement txtSearchNews;
	
	@FindBy(xpath="//input[@class='ddc-btn ddc-btn-search']")
	public WebElement btnSearch;
}
