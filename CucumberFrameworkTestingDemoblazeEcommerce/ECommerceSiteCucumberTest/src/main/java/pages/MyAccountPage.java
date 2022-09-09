package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class MyAccountPage {

	WebDriver driver;

	public MyAccountPage(WebDriver driver) {
		this.driver = driver;
	}

	//Element Library
	@FindBy(how = How.XPATH, using = "//a[contains(text(),'Laptops')]")
	WebElement Laptop_Button;

	//InteractiveMethods	
	public void Click_Laptop_Button() throws InterruptedException {
		Thread.sleep(5000);
		Laptop_Button.click();
	}

}
