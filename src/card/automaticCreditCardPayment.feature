@automaticCreditCardPayments
Feature: Automatic Credit Card Payments
    As a Glomo User
    I would like do a automatic credit card payment
    So then i can see the options to pay and choose one

    @ACP002
    Scenario: Show modal error when automatic credit card payment is not allowed
        Given I'm a user with tags "automatic not allowed" [framework]
        And a user with the following criteria
        When the user accesses to more operatives from card product detail
            | type             | credit    |
            | status           | operative |
            | automaticPayment | no        |
            | additional       | no        |
            | participantType  | holder    |
        When the user accesses to scheduled automatic card payments
        Then the user sees a modal with the following elements:
            | item              |
            | Understood Button |

    @ACP004
    Scenario: Check account settings - Automatic credit card payment
        Given I'm a user with tags "automaticCreditCardPayment" [framework]
        And a user with the following criteria
        When the user accesses to more operatives from card product detail
            | type             | credit    |
            | status           | operative |
            | automaticPayment | yes       |
            | participantType  | holder    |
            | additional       | no        |
        When the user accesses to scheduled automatic card payments
        When the user fills "Banco Colpatria", "Saving" and "12345678901234567890" of automatic payment
        Then the user sees the following items in the screen:
            | item                    |
            | header                  |
            | card image              |
            | card number             |
            | available amount        |
            | minimum amount payment  |
            | operation date          |
            | exit button             |
            | bank                    |
            | account type            |
            | account number          |
            | account continue button |        