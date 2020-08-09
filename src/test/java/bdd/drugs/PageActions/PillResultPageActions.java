package bdd.drugs.PageActions;

import java.io.File;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.support.PageFactory;

import bdd.drugs.PageElements.PillResultPageLocators;
import bdd.utilities.SetupDrivers;
import junit.framework.Assert;

public class PillResultPageActions {

	PillResultPageLocators PillResultPageLocatorsObj;
	
	public PillResultPageActions(){
		
		PillResultPageLocatorsObj = new PillResultPageLocators();
		PageFactory.initElements(SetupDrivers.driver, PillResultPageLocatorsObj);
	}
	 public void verifyImageResults () throws Exception{
		 String resultMsg = PillResultPageLocatorsObj.txtResult.getText(); 
			Assert.assertEquals(resultMsg, "Below are results that match your criteria. Click on an image or generic/brand name to search for information about the drug in our database.");
			
			Thread.sleep(2000);
			
			JavascriptExecutor scroll = (JavascriptExecutor) SetupDrivers.driver;
			scroll.executeScript("window.scrollBy(0,300)");
			
			File screenshot = ((TakesScreenshot)SetupDrivers.driver).getScreenshotAs(OutputType.FILE);
			FileUtils.copyFile(screenshot, new File("C:\\workspace\\DrugComProject\\config\\Screenshots\\pillshot.png"));
	 }
}
