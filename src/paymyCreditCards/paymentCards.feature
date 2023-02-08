@PaymentCards

Feature: Payments Own credit card
	Background:
		Given I'm a user with tags "PaymentsCards" [framework]
    	And  a user not logged and not cached
    	When the user accesses the Login Screen
		
	@Pay0001
	Scenario: Payments Own credit card- From Credit Card
		Then Select credit card
    	Then Go to the option Pay
    	Then Go to the credit card option
    	And  Select the type of payment Other Value
    	Then Select the account to be debited
    	And Make payment.

	@Pay0002
	Scenario: Payments Own credit card- From Credit Card
		Then Select a Credit Card
		Then Go to the lower menu option Pay my card
		And Select the type of payment you will make Minimum payment, Total value, Other value
		And Select the account to debit
		Then Verify data and pay

	@Pay0003	
	Scenario: Payment Own credit card
		Then I select the checking account
		And  I select More and pay card
		Then Display confirmation screen, the account must come preloaded
		And  Enter "other value"
		Then We will give you Pay and validate the information		