// Page action classes for feature 8: NewDrug.feature

package bdd.drugs.PageActions;

import java.io.File;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.support.PageFactory;

import bdd.drugs.PageElements.NewDrugApprovalPageLocators;
import bdd.utilities.SetupDrivers;
import junit.framework.Assert;

public class NewDrugApprovalPageActions {

	NewDrugApprovalPageLocators NewDrugApprovalPageLocatorsObj;

	public NewDrugApprovalPageActions(){

		NewDrugApprovalPageLocatorsObj = new NewDrugApprovalPageLocators();
		PageFactory.initElements(SetupDrivers.driver, NewDrugApprovalPageLocatorsObj);
	}

	public void verifyNewDrug () throws Exception{

		Thread.sleep(1000);

		String archiveResult = NewDrugApprovalPageLocatorsObj.txtAugustResult.getText(); 
		Assert.assertEquals(archiveResult, "New Drug Approvals Archive - August 2020");


		JavascriptExecutor scroll = (JavascriptExecutor) SetupDrivers.driver;
		scroll.executeScript("window.scrollBy(0,300)");

		Thread.sleep(3000);

		File screenshot = ((TakesScreenshot)SetupDrivers.driver).getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(screenshot, new File("C:\\workspace\\DrugComProject\\config\\Screenshots\\newdrugshot.png"));


	}

}

