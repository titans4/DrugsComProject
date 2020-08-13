#Feature 5:
@drugs @regression
Feature: User ability to browse site section and select Medical news

Scenario Outline: User should be able to browse medical news on the Medical news page
	Given User browse to drugs.com homepage
	When User clicks on medical news link under Browse by Site Section 
	And User enters "<News>" inside the search tab
	And user clicks on the search tab button
	Then user will be able to see search results
	
	Examples: 
	      |News |
	      |covid|