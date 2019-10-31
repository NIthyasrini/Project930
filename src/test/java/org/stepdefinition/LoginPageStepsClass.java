package org.stepdefinition;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginPageStepsClass {
	static WebDriver driver;
	@Given("User is in facebook Login")
	public void user_is_in_facebook_Login() {
	    System.setProperty("webdriver.chrome.driver", "C:\\Users\\RamaKrishnan\\eclipse-workspace\\Cucumber\\driver\\chromedriver.exe");
	    driver = new ChromeDriver();
	    driver.get("https://www.facebook.com");
	}

	@When("User has to enter username and  password and click the login button")
	public void user_has_to_enter_username_and_password_and_click_the_login_button(io.cucumber.datatable.DataTable dataTable) {
	    
	List<String> li = dataTable.asList();
		WebElement userName = driver.findElement(By.id("email"));
	    userName.sendKeys(li.get(0));
	    WebElement password = driver.findElement(By.id("pass"));
	    password.sendKeys(li.get(1));
	    WebElement btnlogin = driver.findElement(By.id("loginbutton"));
	    btnlogin.click();
	   
	}

	
	@Then("User has to navigate to next")
	public void user_has_to_navigate_to_next() {

	    Assert.assertTrue(driver.getCurrentUrl().equals("https://www.facebook.com/login/device-based/regular/login/?login_attempt=1&lwv=110"));
	}


}


   
