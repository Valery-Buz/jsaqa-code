Feature: Booking tickets


   Scenario: Should sucsess education   
        Given I go to the "client" page a ticket booking site
        When I choose the 4 of the current month 
        When I choose a session at 2 am 
        When I choose on the chair at row 5 and seat 5  
        When I press on the booking button 
        When I press the booking code 
        Then I should see a ticket received "Электронный билет"

    Scenario: Should booking two tickets
        Given I go to the "client" page booking site 
        When I click the 4 of the current month 
        When I click a new session at 2 am 
        When I click on the first chair at row 7 and seat 1
        When I click on the second chair at row 7 and seat 2
        When I click on the booking button 
        When I click on the confirmation code 
        Then I should two ticket received "Электронный билет"

    Scenario: Should check disable booking occuped chair
        Given I go to the "client" booking site
        When I choose the date of the movie on the 2 of the current month 
        When I choose movies time at 2 am
        When I choose on the taken chair at row 1  
        Then I should see button booking disabled ".acceptin-button"