#Feature 7:
@drugs @regression
Feature: User can check drug interactions

Scenario Outline: User can successfully check interactions between few drugs
	Given User browses to drugs.com homepage
	When User clicks on Interactions Checker
	And User enters a drug name "<drug1>"
	And Clicks on Add button
	And Enters another name "<drug2>"
	And User clicks on Check for Interactions button
	Then User should be able to see the Drug Interaction Report
	
Examples:
	|   drug1       |   drug2       |
	| dexamethasone | montelukast   |
