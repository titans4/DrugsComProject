//Page Action of 4th Page: "Medications for Alopecia" for Feature file MedicationHairLoss.feature
package bdd.drugs.PageActions;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import bdd.drugs.PageElements.HairLossMedListPageLocators;
import bdd.utilities.SetupDrivers;

public class HairLossMedListPageActions {

	HairLossMedListPageLocators HairLossMedListPageLocatorsObj;
	
	public HairLossMedListPageActions() {
		HairLossMedListPageLocatorsObj= new HairLossMedListPageLocators();
		PageFactory.initElements(SetupDrivers.driver, HairLossMedListPageLocatorsObj);	
	}
	
	public void hairLossMedicationLists() throws InterruptedException, IOException{
		
		Thread.sleep(1000);
		
		String expectedTitle= HairLossMedListPageLocatorsObj.txtMedAlopeciaTitle.getText();
		String actualTitle= "Medications for Alopecia";
		Assert.assertEquals(actualTitle,expectedTitle);
		
		//Taking Screenshot of Medications for Alopecia Page title
		//File srcFile=((TakesScreenshot)(SetupDrivers.driver)).getScreenshotAs(OutputType.FILE);
		//FileUtils.copyFile(srcFile, new File("C:\\workspace\\DrugComProject\\config\\Screenshots\\MedicationAlopeciaPageTitle.png"));
		
		//Scroll down until the element is found
		JavascriptExecutor js = (JavascriptExecutor)(SetupDrivers.driver);
		js.executeScript("arguments[0].scrollIntoView();", HairLossMedListPageLocatorsObj.txtMedicationList );
		Thread.sleep(2000);
		
		//Taking Screenshot of List of Drugs Used to Treat Alopecia section
		File srcFile=((TakesScreenshot)(SetupDrivers.driver)).getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(srcFile, new File("C:\\workspace\\DrugComProject\\config\\Screenshots\\DrugsListAlopecia.png"));
	}
	
	
	
}

