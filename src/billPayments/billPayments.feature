@billPayments
Feature: Bill Payments                       
        Background:Login screen
                Given I'm a user with tags "bills" [framework]
                And  a user not logged and not cached
                When the user accesses the Login Screen

        @BILLP001        
        Scenario: Accessing Bill payments from GMF tax exception account product detail
                And the user access to dashboard
                When the user navigates to billPayments page from account
                Then sees the following items in the screen

        @BILLP002
        Scenario: Filter services by location when accessing to an bill payments account
                And the user access to dashboard
                And the user navigates to pay new service from account
                When filters search by "Norte de Santander" location

        @BILLP003
        Scenario: Remove search services by location filter when accessing to an bill payments account
                And the user access to dashboard
                And the user navigates to pay new service from account
                When filters search by "Norte de Santander" location
                When the user remove the filter

        @BILLP004
        Scenario: Access to GMF tax info modal on summary page when paying with an non exempt GMF tax account
                And the user access to dashboard
                And the user navigates to pay new service from account
                When searches for a service with the following criteria
                And the user accepts the amount
        
        @BILLP006
        Scenario: Successfully pay new bill with expiration date and with voluntary contribution   
                And the user access to dashboard
                And the user navigates to pay new service from account
                When user searches for a service with the following criteria
                #| service       | IMP MUN VEH CON APORTE VOL BTA   |
                #| reference     | 21037763212                      |
                #| contribution  | fortalecimiento seg ciudadana    |
                #And the user accepts the amount
                #And the user confirms service pay operation
        

        
