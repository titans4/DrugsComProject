//Page elements of 4th Page: "Medications for Alopecia" for MedicationHairLoss.feature file

package bdd.drugs.PageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HairLossMedListPageLocators {

	//Locating Title "Drugs Used to Treat Alopecia" which contains list of medications for Hair Loss
	@FindBy(xpath="//h2[contains(text(),'Drugs Used')]")
    public WebElement txtMedicationList;
	
	//Locting the Page Title "Medications for Alopecia"
	@FindBy(xpath="//h1[contains(text(),'Medications for Alopecia')]")
    public WebElement txtMedAlopeciaTitle;
}
