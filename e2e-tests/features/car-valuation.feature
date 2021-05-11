@smoketest
Feature: As a user
        I should be able to feed the values into car valuation site
        And perform a free car valuation on we buy any car website

    Background: User successfully launches the car valuation site
        Given  I launch the car tax valuation page

    Scenario Outline: User successfully inputs the values from input file
        When I enter the car registration number "<carreg>"
        Then I perform a free car check
        When I get a free car valuation
        When I land on the we buy car page to input the values from the text file for "<carreg>"
        Then I perform the validation by comparing with the output file for "<carreg>"
        And I navigate back to car valuation page to continue checks on another car
        Examples:
            | carreg  |
            | SG18HTN |
            | DN09HRM |
            | BW57BOF |
            | KT17DLX |
