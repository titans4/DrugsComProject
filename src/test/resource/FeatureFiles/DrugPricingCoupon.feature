#Feature 8
@drugs @regression	
Feature: Users ability to find price of a Medication

Scenario Outline: User should able to find pricing of a drug
	Given browse to drugs homepage
	When user scroll down, click on Pricing & Coupon Guide
	And enter "<MedName>" in the Search Box, click on Search 
	Then user should be able to see Price List of the Medication successfully 
	

Examples: 
		|MedName	 | 
		|minoxidil |