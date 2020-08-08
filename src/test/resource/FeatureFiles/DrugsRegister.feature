#Feature 1
@drugs @regression
Feature: Drugs Registration As a user
Description: Drugs Registration as a user with valid information

Scenario Outline: User should able to create account using Register form
    Given browse to drugs homepage
    When click on Register link 
    And Fillup the register form with "<email>", "<username>", "<password>"
    And select on Terms and Privacy checkbox
    And User click on register button
    Then User should see registration confirmation details successfully
    
Examples: 
    
      | email              | username  | password |
      |panda13456@gmail.com| panda2345 | panda7895 |