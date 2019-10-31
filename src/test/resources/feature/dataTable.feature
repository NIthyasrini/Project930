

 Feature: To validate the login functionality for FB pag

  Scenario: To verify the login with dataTables list
    Given User is in facebook Login
   
    When User has to enter username and  password and click the login button
    |suresh@gmail.com|1234|
    
    
    Then User has to navigate to next
    