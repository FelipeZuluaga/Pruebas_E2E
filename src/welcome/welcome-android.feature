@WelcomeUserDistribution
Feature: Welcome User Distribution

  Scenario: Non-remembered user accesses app after fresh install
    Given a user accesses the application for the first time
    When the user is in the Welcome User Distribution
    Then the user sees the following items in the screen
