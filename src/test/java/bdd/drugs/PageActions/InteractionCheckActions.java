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
		WebElement add = SetupDrivers.driver.findElement(By.xpath("//form[@id='drug-interactions-search']//input[@class='ddc-btn']"));
		add.click();
		Thread.sleep(1000);
	}
	public void enterDrugTwo (String drug2) throws Exception{
		InteractionCheckLocatorsObj.txtDrugNameTwo.clear();
		InteractionCheckLocatorsObj.txtDrugNameTwo.sendKeys(drug2);
		WebElement add1 = SetupDrivers.driver.findElement(By.xpath("//form[@id='drug-interactions-search']//input[@class='ddc-btn']"));
		add1.click();
		Thread.sleep(1000);
		
		JavascriptExecutor scroll = (JavascriptExecutor) SetupDrivers.driver;
		scroll.executeScript("window.scrollBy(0,300)");
		
	}
	public void checkInteraction () throws Exception{
		WebElement check = SetupDrivers.driver.findElement(By.xpath("//a[contains(text(),'Check for Interactions')]"));
		check.click();
		Thread.sleep(1000);
	}
}
