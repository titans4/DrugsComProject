package bdd.drugs.PageActions;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.PageFactory;

import bdd.drugs.PageElements.PillidentifierPageLocators;
import bdd.utilities.SetupDrivers;

public class PillidentifierPageActions {
	
	PillidentifierPageLocators PillidentifierPageLocatorsObj;
	
	public PillidentifierPageActions() {
		
		PillidentifierPageLocatorsObj = new PillidentifierPageLocators();
		PageFactory.initElements(SetupDrivers.driver, PillidentifierPageLocatorsObj);
	}
	
	public void clickAccept (){
		
		JavascriptExecutor js = (JavascriptExecutor) SetupDrivers.driver;
		js.executeScript("window.scrollBy(0,300)");
		PillidentifierPageLocatorsObj.lnkAccept.click();	
		
	}
		

}
