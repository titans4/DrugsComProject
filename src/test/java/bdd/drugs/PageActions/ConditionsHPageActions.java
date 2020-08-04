//Page Actions of 2nd Page: "Conditions: H" for feature file MedicationHairLoss
package bdd.drugs.PageActions;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.PageFactory;

import bdd.drugs.PageElements.ConditionsHPageLocators;
import bdd.utilities.SetupDrivers;

public class ConditionsHPageActions {

	ConditionsHPageLocators ConditionsHPageLocatorsObj;
	
	public ConditionsHPageActions() {
		ConditionsHPageLocatorsObj= new ConditionsHPageLocators();
		PageFactory.initElements(SetupDrivers.driver, ConditionsHPageLocatorsObj);
		
	}
	
	//Scroll down the page and click on the Hair Loss link 
	public void hairLossLink() throws InterruptedException {
		
		JavascriptExecutor js=(JavascriptExecutor)(SetupDrivers.driver);
		js.executeScript("arguments[0].scrollIntoView();", ConditionsHPageLocatorsObj.lnkHairLoss);
		Thread.sleep(4000);
		ConditionsHPageLocatorsObj.lnkHairLoss.click();	
		
	}
	
}
