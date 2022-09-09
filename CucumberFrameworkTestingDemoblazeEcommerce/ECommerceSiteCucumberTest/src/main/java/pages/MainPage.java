package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class MainPage extends BasePage {

	WebDriver driver;

	public MainPage(WebDriver driver) {
		this.driver = driver;
	}

	// Element Library
    @FindBy(how = How.XPATH, using = "//a[contains(text(),'Log in')]")
	WebElement Sign_in_Button;
	@FindBy(how = How.XPATH, using = "//a[contains(text(),'Sign up')]")
	WebElement CreateAnAccount_Button;

	
	// InteractiveMethods
	public void ClickOnSignInButton() { 
		Sign_in_Button.click(); 
	}
	
	public void Click_CreateAnAccount_Button() { 
		CreateAnAccount_Button.click(); 
	}
	
}
