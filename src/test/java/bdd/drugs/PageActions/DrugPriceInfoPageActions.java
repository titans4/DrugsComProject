//Page action class of 2nd Page for Feature 8
package bdd.drugs.PageActions;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.PageFactory;

import bdd.drugs.PageElements.DrugPriceInfoPageElements;
import bdd.utilities.SetupDrivers;

public class DrugPriceInfoPageActions {

	DrugPriceInfoPageElements DrugPriceInfoPageElemetsObj;
	
	public DrugPriceInfoPageActions() {
		DrugPriceInfoPageElemetsObj= new DrugPriceInfoPageElements();
		PageFactory.initElements(SetupDrivers.driver, DrugPriceInfoPageElemetsObj);	
	}
	
	public void searchDrugPriceGuide(String drugName) throws Exception {
		
		JavascriptExecutor js = (JavascriptExecutor)(SetupDrivers.driver);
		js.executeScript("window.scrollBy(0,200)");
		Thread.sleep(3000);
		DrugPriceInfoPageElemetsObj.txtBoxPriceCoupon.sendKeys(drugName);
		DrugPriceInfoPageElemetsObj.autolstMinoxidil.click();
	}
}
