package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import cucumber.api.java.en.Then;
import pages.ProductPage;

public class ProductPageSteps extends BaseStep {

	WebDriver driver = GetDriver();
	ProductPage prodp = PageFactory.initElements(driver, ProductPage.class);
	
	@Then("^User Clicks on Cart$")
	public void user_Clicks_on_Cart() throws Throwable {
		prodp.Click_Cart_Button();
	}
	
	@Then("^User Clicks on Place Order$")
	public void user_Clicks_on_Place_Order() throws Throwable {
		prodp.ClickOnPlaceOrderButton();
	}
	
}
