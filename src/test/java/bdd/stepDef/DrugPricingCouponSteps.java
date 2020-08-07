package bdd.stepDef;

import bdd.drugs.PageActions.DrugPriceInfoPageActions;
import bdd.drugs.PageActions.DrugsHomePageActions;
import bdd.drugs.PageActions.MinoxidilTopPricesPageActions;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DrugPricingCouponSteps {

	DrugsHomePageActions DrugsHomePageActionsObj=new DrugsHomePageActions();
	DrugPriceInfoPageActions DrugPriceInfoPageActionsObj=new DrugPriceInfoPageActions();
	MinoxidilTopPricesPageActions MinoxidilTopPricesPageActionsObj=new MinoxidilTopPricesPageActions();
	
	@When("^user scroll down, click on Pricing & Coupon Guide$")
	public void user_scroll_down_click_on_Pricing_Coupon_Guide() throws Throwable {
		DrugsHomePageActionsObj.pricingCoupon();
	}

	@When("^enter \"([^\"]*)\" in the Search Box, click on Search$")
	public void enter_in_the_Search_Box_click_on_Search(String medName) throws Throwable {
		
		DrugPriceInfoPageActionsObj.searchDrugPriceGuide(medName);
		
	}

	@Then("^user should be able to see Price List of the Medication successfully$")
	public void user_should_be_able_to_see_Price_List_of_the_Medication_successfully() throws Throwable {
		MinoxidilTopPricesPageActionsObj.minoxidilTopicalPrices();
	}
}
