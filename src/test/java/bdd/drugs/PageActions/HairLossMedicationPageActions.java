//Page Actions of 3rd Page: Hair Loss: Medications & Treatment Options for MedicationHairLoss.feature file

package bdd.drugs.PageActions;

import org.openqa.selenium.support.PageFactory;
import bdd.drugs.PageElements.HairLossMedicationPageLoctors;
import bdd.utilities.SetupDrivers;

public class HairLossMedicationPageActions {

	HairLossMedicationPageLoctors HairLossMedicationPageLoctorsObj;
	
	public HairLossMedicationPageActions() {
		HairLossMedicationPageLoctorsObj= new HairLossMedicationPageLoctors();
		PageFactory.initElements(SetupDrivers.driver, HairLossMedicationPageLoctorsObj);	
	}
	
	//Clicking on the Medication List Tab
	public void medicationListTab() throws InterruptedException {
		
		HairLossMedicationPageLoctorsObj.tabMedicationList.click();
		Thread.sleep(3000);
	}
}
