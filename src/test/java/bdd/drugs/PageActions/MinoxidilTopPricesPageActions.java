//Page Actions of 3rd Page for Feature 8:Drug Pricing Coupon

package bdd.drugs.PageActions;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.support.PageFactory;

import bdd.drugs.PageElements.MinoxidilTopPricesPageElements;
import bdd.utilities.SetupDrivers;

public class MinoxidilTopPricesPageActions {
	
	MinoxidilTopPricesPageElements MinoxidilTopPricesPageElementsObj;
	
	public MinoxidilTopPricesPageActions(){
		MinoxidilTopPricesPageElementsObj = new MinoxidilTopPricesPageElements();
		PageFactory.initElements(SetupDrivers.driver, MinoxidilTopPricesPageElementsObj);
	}
	
	//Scroll down to Topical Foam Price List
	public void minoxidilTopicalPrices() throws InterruptedException, IOException {
		
		Thread.sleep(1000);
		JavascriptExecutor js = (JavascriptExecutor)(SetupDrivers.driver);
		js.executeScript("arguments[0].scrollIntoView();", MinoxidilTopPricesPageElementsObj.txtTopicalFoam);
		Thread.sleep(3000);
		
		//Taking Screenshot of Minoxidil Topical Foam Price List
		File srcFile=((TakesScreenshot)(SetupDrivers.driver)).getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(srcFile, new File("C:\\TTSoftware\\DrugsScreenhots\\TopicalFoamPriceList.jpg"));
		
	}
}
