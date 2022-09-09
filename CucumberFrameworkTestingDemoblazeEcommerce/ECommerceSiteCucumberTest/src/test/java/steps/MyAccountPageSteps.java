package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import pages.MyAccountPage;

public class MyAccountPageSteps extends BaseStep {
	
	WebDriver driver = GetDriver();
	MyAccountPage myacc = PageFactory.initElements(driver, MyAccountPage.class);
	
	@Then("^Click on sub menu Laptops$")
	public void click_on_sub_menu_Laptops() throws Throwable {
		myacc.Click_Laptop_Button();
	}

}
