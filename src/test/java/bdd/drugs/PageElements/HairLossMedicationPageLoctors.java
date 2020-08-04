//Page elements of 3rd Page: Hair Loss: Medications & Treatment Options for MedicationHairLoss.feature file
package bdd.drugs.PageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HairLossMedicationPageLoctors {

	//locating Medication List Tab
	@FindBy(xpath="//a[contains(@class,'nav-item')][contains(text(),'Medication List')]")
	public WebElement tabMedicationList; 
}
