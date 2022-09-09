package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ProductPage extends BasePage {

	WebDriver driver;
	double DblCurrentTotal;

	public ProductPage(WebDriver driver) {
		this.driver = driver;
	}

	// Element Library
    @FindBy(how = How.XPATH, using = "//a[contains(text(),'Cart')]")WebElement Cart_Button;
    @FindBy(how = How.XPATH, using = "//button[text()='Place Order']")WebElement PlaceOrder_Button;

	// InteractiveMethods
	

	public void Click_Cart_Button() {
		Cart_Button.click();
	}

	public void ClickOnPlaceOrderButton() {
		PlaceOrder_Button.click();
	}

}
