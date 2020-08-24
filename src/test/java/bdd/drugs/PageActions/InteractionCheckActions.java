package bdd.drugs.PageActions;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import bdd.drugs.PageElements.InteractionCheckLocators;
import bdd.utilities.SetupDrivers;

public class InteractionCheckActions {
	
	InteractionCheckLocators InteractionCheckLocatorsObj;
	
	public InteractionCheckActions(){
		
		InteractionCheckLocatorsObj = new InteractionCheckLocators ();
		PageFactory.initElements(SetupDrivers.driver, InteractionCheckLocatorsObj);
	}

	public void enterDrugNames (String drug1) throws Exception {
		
		InteractionCheckLocatorsObj.txtDrugNameOne.clear();
		InteractionCheckLocatorsObj.txtDrugNameOne.sendKeys(drug1);
		
	}
	public void clickAdd () throws Exception{
		InteractionCheckLocatorsObj.btnAdd.click();
		Thread.sleep(1000);
	}
	public void enterDrugTwo (String drug2) throws Exception{
		InteractionCheckLocatorsObj.txtDrugNameTwo.clear();
		InteractionCheckLocatorsObj.txtDrugNameTwo.sendKeys(drug2);
		InteractionCheckLocatorsObj.btnAddTwo.click();
		
		
		JavascriptExecutor scroll = (JavascriptExecutor) SetupDrivers.driver;
		scroll.executeScript("window.scrollBy(0,300)");
		Thread.sleep(2000);
	}
	public void checkInteraction () {
		InteractionCheckLocatorsObj.btnCheck.click();
		
	}
}
