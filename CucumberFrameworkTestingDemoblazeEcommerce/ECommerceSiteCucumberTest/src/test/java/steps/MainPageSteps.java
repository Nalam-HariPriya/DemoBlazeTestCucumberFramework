package steps;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import pages.MainPage;
import util.BrowserFactory;

public class MainPageSteps extends BaseStep {

	WebDriver driver;
	MainPage main;
	String expectedTitle;

	@Before
	public void setup() {

		driver = GetDriver();
		main = PageFactory.initElements(driver, MainPage.class);
		
	}

	@Given("^the user is on the website page$")
	public void the_user_is_on_the_website_page() {
		driver.get("https://www.demoblaze.com/index.html");

	}
	
	@Then("^User clicks Create an Account button$")
	public void user_clicks_Create_an_Account_button() throws Throwable {
	    main.Click_CreateAnAccount_Button();
	}
	
	@Then("^User clicks Log in button$") 
	public void user_clicks_sign_in_button() throws Throwable {
		main.ClickOnSignInButton();
	}
		
	@After
	public void tearDown() {
		BrowserFactory.CloseBrowser();
	}
}