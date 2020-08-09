#Feature 6:
@drugs @regression
Feature: Identify medication using Pill Identifier

Scenario Outline: User can successfully identify medication using Pill Identifier
	Given User browses to Drugs.com homepage
	When User clicks on Pill Identifier
	And User Clicks on Accept to accept terms
	And User Enters "<Imprint>" , "<Color>", "<Shape>"
	And User clicks on Search
	Then User should be able to see the result that match the criteria
	
Examples:
	|   Imprint   |    Color     |    Shape      |
	|   I 13      |    White	   | Capsule-shape |
