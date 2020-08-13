#Feature 2
@Drugs @regression
Feature: Sign in with invalid information


  Scenario Outline: User can sign in with invalid information
    Given User is on Drugs.com Home Page
    When User navigates to Sign In Page
    And User enters incorrect "<username>" with "<password>" 
    And User clicks on sign in button 
   Then User can see log in failed message
 
  Examples: 
        |username|password|
        |abc123as| Woohoo |