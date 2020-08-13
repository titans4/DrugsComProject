package bdd.drugs.PageActions;

import org.openqa.selenium.support.PageFactory;

import bdd.drugs.PageElements.MedicalNewsResultsLocators;
import bdd.utilities.SetupDrivers;
import junit.framework.Assert;

public class MedicalNewsResultsActions {
 
	MedicalNewsResultsLocators MedicalNewsResultsLocatorsObj;
	
	public MedicalNewsResultsActions(){
		MedicalNewsResultsLocatorsObj = new MedicalNewsResultsLocators();
		PageFactory.initElements(SetupDrivers.driver, MedicalNewsResultsLocatorsObj);
	}
	
	public void verifySearchResults(){
		String Results = MedicalNewsResultsLocatorsObj.lnkResults.getText(); 
		Assert.assertEquals(Results, "Search Results");
	}
}
