@login
Feature: Login

  @LOG001
  Scenario: Access to login screen
    Given a user not logged and not cached
    Then sees the following items in the screen:
      | item                     |
      | Login header             |
      | Document type input      |
      | Document number input    |
      | Username input           |
      | Continue button disabled |

  @LOG002
  Scenario: Complete login proccess
    Given a user "80799399" not logged and not cached
    When the user has completed the password "prueba01"
    Then the user sees the access button enabled

  @LOG003
  Scenario: Login
    Given I'm a user with tags "active" [framework]
    And a user with the following criteria
    When the user does login
    Then the user accesses the "welcome experience" screen

  @LOG018
  Scenario: Unauthorized error - the password is not correct
    Given a user not logged and not cached
    And with the following criteria
      | criteria       |
      | wrong password |
    When the user is in Login Screen
    And does login
    Then sees login error
