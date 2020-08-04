//Home Page Actions of Drugs.com
package bdd.drugs.PageActions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.support.PageFactory;

import bdd.drugs.PageElements.DrugsHomePageLocators;
import bdd.utilities.SetupDrivers;

public class DrugsHomePageActions {

	DrugsHomePageLocators DrugsHomePageLocatorsObj;
	
	//Elements initialization
	public DrugsHomePageActions(){
		DrugsHomePageLocatorsObj = new DrugsHomePageLocators();
		PageFactory.initElements(SetupDrivers.driver, DrugsHomePageLocatorsObj);
	}
	
	//Loading homepage
	public void loadDrugsHomepage(){
		SetupDrivers.driver.manage().window().maximize();
		SetupDrivers.driver.get("https://www.drugs.com");
		SetupDrivers.driver.manage().timeouts().implicitlyWait(25, TimeUnit.SECONDS);
		
	}
	
	//Search Box Function for searching
	public void searchBox(String drugName) {
		DrugsHomePageLocatorsObj.txtSearchBox.sendKeys(drugName);
		DrugsHomePageLocatorsObj.lnkSearIcon.click();
		
	}
	
	//Browsing Condition 
	public void browseConditionAlphabet() throws InterruptedException {
		/*Actions actions = new Actions(SetupDrivers.driver);
		actions.moveToElement(DrugsHomePageLocatorsObj.tabBrowseConditions);
		actions.build().perform();
		Thread.sleep(4000);*/

		DrugsHomePageLocatorsObj.tabBrowseConditions.click();
		Thread.sleep(3000);
	}
	
	//click on Alphabet letter H
	public void browseAlphbetH() throws InterruptedException {
		DrugsHomePageLocatorsObj.tabAlphabetLetterH.click();
		
	}
		
	
}
