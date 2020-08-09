package bdd.drugs.PageActions;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import bdd.drugs.PageElements.PillinfoPageLocators;
import bdd.utilities.SetupDrivers;

public class PillinfoPageActions {

	PillinfoPageLocators PillinfoPageLocatorsObj;

	public PillinfoPageActions(){
		PillinfoPageLocatorsObj = new PillinfoPageLocators();
		PageFactory.initElements(SetupDrivers.driver, PillinfoPageLocatorsObj);
	}

	public void enterInfo (String Imprint, String Color, String Shape) {

		JavascriptExecutor scroll = (JavascriptExecutor) SetupDrivers.driver;
		scroll.executeScript("window.scrollBy(0,300)");

		PillinfoPageLocatorsObj.txtImprint.clear();
		PillinfoPageLocatorsObj.txtImprint.sendKeys(Imprint);

		WebElement med = SetupDrivers.driver.findElement(By.xpath("//div[@id='ls-wrap']//a[1]"));
		med.click();

		Select drop = new Select(PillinfoPageLocatorsObj.txtColor); 
		drop.selectByVisibleText(Color); 

		Select down = new Select(PillinfoPageLocatorsObj.txtShape); 
		down.selectByVisibleText(Shape); 

		/*	PillinfoPageLocatorsObj.txtColor.clear();
		PillinfoPageLocatorsObj.txtColor.sendKeys("white");
		PillinfoPageLocatorsObj.txtShape.clear();
		PillinfoPageLocatorsObj.txtShape.sendKeys("Capsule-shape");
		 */
	}

	public void clickSearch() throws Exception{

		Thread.sleep(1000);

		PillinfoPageLocatorsObj.lnkSearch.click();
	}
}
