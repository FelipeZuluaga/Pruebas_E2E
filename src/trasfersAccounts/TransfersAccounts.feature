@Transfers

Feature: Current account
	Background:
		Given I'm a user with tags "TransAccounst" [framework]
		And a user with the following criteria
    	When the user does login
    	Then the user accesses the "welcome experience" screen

	@Transf0001
	Scenario: Transfers / Between my Accounts From accounts
		When I login to the account
		And enter the transfer option in the lower menu
		And select my products option
		Then choose the Current account to transfer
		And enter the amount
		And View the confirmation screen the account must come preloaded
		Then Verify data and transfer Accounts must be savings, checking or mobile money

	@Transf0002
	Scenario: Transfers / Between my Accounts From option Savings Accounts
		When I click on the Savings Card
		And enter the transfer option
		And select MIS CUENTAS
		Then See The Accounts To Which I Can Transfer
		And choose the account to which you want to transfer
		And Enter the value to be transferred
		And See the confirmation screen, the account must come pre-loaded
		Then Verify the data and the transfer Accounts must be savings, checking or mobile money
			