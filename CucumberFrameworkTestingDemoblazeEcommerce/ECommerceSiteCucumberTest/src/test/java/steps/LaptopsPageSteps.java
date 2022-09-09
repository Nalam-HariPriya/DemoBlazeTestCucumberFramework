package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import pages.LaptopsPage;

public class LaptopsPageSteps extends BaseStep {

	WebDriver driver = GetDriver();
	LaptopsPage tp = PageFactory.initElements(driver, LaptopsPage.class);
	
	@Then("^Mouse Click on the first product displayed$")
	public void more_button_will_be_displayed_click_on_More_button() throws Throwable {
		tp.Click_More_Button_Product_One();

	}
	
	@Then("^User clicks on Add to Cart$")
	public void user_clicks_on_Add_to_Wishlist() throws Throwable {
	    tp.Click_wishlistProduct();
	}
	
	public void accept() {
		driver.switchTo().alert().accept();
	}
	
}
