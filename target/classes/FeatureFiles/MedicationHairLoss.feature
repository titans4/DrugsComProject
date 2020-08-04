#Feature 4
@drugs @regression
Feature: User ability to find Medication List for Hair Loss

Scenario: User should be able to find list of medications for Hair Loss

	Given browse to drugs homepage
	When user clicks on Browse Conditions link
	And click on alphabet H link at homepage
	And click on Hair Loss link in the Condition Page
	And click on Medication List tab on Medications & Treatment Options page
	Then user should see successful message of Hair Loss Medications Treatment options and  list of Medications
