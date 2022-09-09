package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import pages.OrderPage;
import pages.ProductPage;

public class OrderPageSteps extends BaseStep {

	WebDriver driver = GetDriver();
	OrderPage orderp = PageFactory.initElements(driver, OrderPage.class);
	ProductPage prodp = PageFactory.initElements(driver, ProductPage.class);
	
	@Then("^Complete the buy order process till payment$")
	public void complete_the_buy_order_process_till_payment() throws Throwable {
		orderp.enterPlaceOrderData("Nalam HariPriya","India","Guntur","435798763905","03","2025"); 
		orderp.clickOnPurchase();	
	}
	@Then("^Make sure that Product is ordered$")
	public void make_sure_that_Product_is_ordered() throws Throwable {
		orderp.clickOnOk();	
		System.out.println("Product purchased successfully");
	}
}
