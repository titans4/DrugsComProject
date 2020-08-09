// Page action classes for feature 8: NewDrug.feature

package bdd.drugs.PageActions;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import bdd.drugs.PageElements.NewDrugsPageLocators;
import bdd.utilities.SetupDrivers;

public class NewDrugsPageActions {

	NewDrugsPageLocators NewDrugsPageLocatorsObj;

	public NewDrugsPageActions(){
		NewDrugsPageLocatorsObj = new NewDrugsPageLocators();
		PageFactory.initElements(SetupDrivers.driver, NewDrugsPageLocatorsObj);

	}

	public void scrollArchive (){

		JavascriptExecutor scroll = (JavascriptExecutor) SetupDrivers.driver;
		WebElement Element = SetupDrivers.driver.findElement(By.xpath("//h2[contains(text(),'FDA Drug Approvals Archive')]"));
		scroll.executeScript("arguments[0].scrollIntoView();", Element);
	}

	public void selectMonth () throws Exception{

		Thread.sleep(1000);

		WebElement august = SetupDrivers.driver.findElement(By.linkText("August"));
		august.click();

		//NewDrugsPageLocatorsObj.lnkAugust20.click();
	}

}

