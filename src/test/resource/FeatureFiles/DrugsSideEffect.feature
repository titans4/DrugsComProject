#Feature 3
@drugs @regression	
Feature: Users ability to search side effect of drug

Scenario Outline: User should able to find side effect of drug
	Given browse to drugs homepage
	When user enter "<drugName>", clicks on Search icon
	And user scroll down and click on Side Effects link
	Then user should be able to see Side Effects page, and overdose symptom  successfully 
	

Examples: 
		|    drugName	      |  
		|hydroxychloroquine |
	
