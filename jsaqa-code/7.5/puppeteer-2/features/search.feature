Feature: Booking tickets


   Scenario: Should sucsess education   
        Given I go to the page a ticket booking site "http://qamid.tmweb.ru/client/index.php"
        When I choose the date of the movie 
        When I choose on the movie time this day  
        When I choose on the chair at 3 row and 4 seat 
        When I press on the booking button 
        When I press the booking code 
        Then I should see a ticket received

    Scenario: Should booking two tickets
        Given I go to the page booking site "http://qamid.tmweb.ru/client/index.php"
        When I click the date of the movie 
        When I click on the movie time
        When I click on the first chair at 7 row and 2 seat
        When I click on the second chair at 7 row and 3 seat
        When I click on the booking button 
        When I click on the confirmation code 
        Then I should two ticket received 

    Scenario: Should check disable booking occuped chair
        Given I go to the booking site "http://qamid.tmweb.ru/client/index.php"
        When I choose movies date 
        When I choose movies time 
        When I choose on the taken chair at 1 row  
        Then I should see button booking disabled 