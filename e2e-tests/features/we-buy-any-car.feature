@smoketest
Feature: As a user
    I should be able to input the values into we buy any car website
    In order to get car details

    Background: Background name
        Given  I launch the car tax valuation page

    Scenario Outline: User successfully inputs the values from input file
        When I enter the car registration number "<carreg>"
        Then I perform a free car check
        When I check valuation
        When I input the values from the text file for "<carreg>"
        Then I perform the validation by comparing with the output file for "<carreg>"
        And Should reload the session
        Examples:
            | carreg  |
            | SG18HTN |
            | DN09HRM |
            | BW57BOF |
            | KT17DLX |
