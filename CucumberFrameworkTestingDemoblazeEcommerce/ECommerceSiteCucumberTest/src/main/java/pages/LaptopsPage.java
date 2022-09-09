package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LaptopsPage {
	
	WebDriver driver;
	
	public LaptopsPage(WebDriver driver) {
		this.driver = driver;
	}
	
	//Element Library
	@FindBy(how = How.XPATH, using = "//a[contains(text(),'Sony vaio i5')]")WebElement More_Button_Product_One;
	@FindBy(how = How.XPATH, using = "//a[contains(text(),'Add to cart') and contains(@class,'btn btn-success btn-lg')]")WebElement wishlistProduct;

	public void Click_More_Button_Product_One() {
		More_Button_Product_One.click();
	}
	
	public void Click_wishlistProduct() {
		wishlistProduct.click();
	}

}
