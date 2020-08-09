//3rd Page Action for feature file-DrugsSideEffect.feature
package bdd.drugs.PageActions;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import bdd.drugs.PageElements.HydroxySideEffectsPageLocators;
import bdd.utilities.SetupDrivers;

public class HydroxySideEffectsPageActions {

	HydroxySideEffectsPageLocators HydroxySideEffectsPageLocatorsObj;
	
	public HydroxySideEffectsPageActions(){
		HydroxySideEffectsPageLocatorsObj = new HydroxySideEffectsPageLocators();
		PageFactory.initElements(SetupDrivers.driver, HydroxySideEffectsPageLocatorsObj);
	}
	
	public void sideEffectConfirmationMessage() throws IOException, InterruptedException {
		
		//validation of Side Effect page confirmation
		String expectedTitle=HydroxySideEffectsPageLocatorsObj.txtSideEffectTitle.getText();
		String actualTitle= "Hydroxychloroquine Side Effects";
		Assert.assertEquals(actualTitle,expectedTitle);
		
		//Taking Screenshot of the confirmation page
		File srcFile=((TakesScreenshot)(SetupDrivers.driver)).getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(srcFile, new File("C:\\workspace\\DrugComProject\\config\\Screenshots\\sideEffectPageConfirmation.png"));
		
		JavascriptExecutor js = (JavascriptExecutor)(SetupDrivers.driver);
		js.executeScript("arguments[0].scrollIntoView();", HydroxySideEffectsPageLocatorsObj.txtOverdose );
		Thread.sleep(4000);
		
		srcFile=((TakesScreenshot)(SetupDrivers.driver)).getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(srcFile, new File("C:\\workspace\\DrugComProject\\config\\Screenshots\\overDose.png"));
	}
	
	
}
