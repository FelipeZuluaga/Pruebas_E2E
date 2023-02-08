@quickControlOnOff

Feature: ON-OFF debit Card
      As a Glomo user,
      I would like to activate/deactivate my cards,
      So then, I can improve the security with them.

  Background:
    Given I'm a user with tags "OFF-ON" [framework]
    And a user with the following criteria
    When the user does login
    Then the user accesses the "welcome experience" screen

  @QCON001
  Scenario Outline: Cards DEBIT  preventive blocking of protected cards
    When We select our card DEBIT
    And proceed to <status> the card debit
    Then validate that the process is correct.
    Examples:
    | option | 
    |  OFF   |
    |  ON    |

  @QCON002
  Scenario Outline: Credit CARDS preventive blocking of protected cards
    When to select the VISA credit card
    Then we will turn <status> the credit card
    Then validate that the process is correct.
    Examples:
    | option |
    |  OFF   |
    |  ON    |
     