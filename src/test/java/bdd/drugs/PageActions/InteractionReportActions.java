package bdd.drugs.PageActions;

import java.io.File;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.support.PageFactory;

import bdd.drugs.PageElements.InteractionReportLocator;
import bdd.utilities.SetupDrivers;
import junit.framework.Assert;

public class InteractionReportActions {
	
	InteractionReportLocator InteractionReportLocatorObj;
	public InteractionReportActions(){
		
		InteractionReportLocatorObj = new InteractionReportLocator();
		PageFactory.initElements(SetupDrivers.driver, InteractionReportLocatorObj);
	}
	
	public void drugIntReport () throws Exception{
		
		String report = InteractionReportLocatorObj.txtDrugReport.getText(); 
		Assert.assertEquals(report, "Drug Interaction Report");
		
		Thread.sleep(2000);
		
		JavascriptExecutor scroll = (JavascriptExecutor) SetupDrivers.driver;
		scroll.executeScript("window.scrollBy(0,300)");
		
		File shotReport = ((TakesScreenshot)SetupDrivers.driver).getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(shotReport, new File("C:\\workspace\\DrugComProject\\config\\Screenshots\\drugreport.png"));
	}

}
