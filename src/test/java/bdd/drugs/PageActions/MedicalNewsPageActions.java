package bdd.drugs.PageActions;

import org.openqa.selenium.support.PageFactory;

import bdd.drugs.PageElements.MedicalNewsPageLocators;
import bdd.utilities.SetupDrivers;

public class MedicalNewsPageActions {
	MedicalNewsPageLocators MedicalNewsPageLocatorsObj;
	
	public MedicalNewsPageActions(){
		MedicalNewsPageLocatorsObj = new MedicalNewsPageLocators();
		PageFactory.initElements(SetupDrivers.driver, MedicalNewsPageLocatorsObj);
	}
	public void enterSearch(String News){
		MedicalNewsPageLocatorsObj.txtSearchNews.sendKeys(News);
	}
	
	public void clickSearch(){
		MedicalNewsPageLocatorsObj.btnSearch.click();
	}
}
