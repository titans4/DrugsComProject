//2nd page action for feature file- DrugsSideEffect.feature
package bdd.drugs.PageActions;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.PageFactory;

import bdd.drugs.PageElements.HydroxychloroquineResultPageLocators;
import bdd.utilities.SetupDrivers;

public class HydroxychloroquineResultPageActions {

	HydroxychloroquineResultPageLocators HydroxychloroquineResultPageLocatorsObj;
	
	public HydroxychloroquineResultPageActions(){
		HydroxychloroquineResultPageLocatorsObj = new HydroxychloroquineResultPageLocators();
		PageFactory.initElements(SetupDrivers.driver, HydroxychloroquineResultPageLocatorsObj);
	}
	
	//Scroll down in the page until elemnet is visisble and then click on the element
	public void sideEffects() {
		JavascriptExecutor js = (JavascriptExecutor)(SetupDrivers.driver);
		js.executeScript("arguments[0].scrollIntoView();", HydroxychloroquineResultPageLocatorsObj.lnkSideEffect);
		HydroxychloroquineResultPageLocatorsObj.lnkSideEffect.click();
	}
}
