package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class CreateAnAccountPage extends BasePage {

	WebDriver driver;
	
	public CreateAnAccountPage(WebDriver driver) {
		this.driver = driver;
	}
	
	@FindBy(how = How.XPATH, using = "//input[@id='sign-username']") WebElement UserName_Field;
	@FindBy(how = How.XPATH, using = "//input[@id='sign-password']") WebElement Password_Field;
	@FindBy(xpath = "//button[contains(text(),'Sign up')]") WebElement buttonSignUp;
		
	public void Fill_UserName_Field(String UserName) {
		UserName_Field.sendKeys(UserName);
	}
		
	public void Fill_Password_Field(String Password) {
		Password_Field.sendKeys(Password);
	}
	
	public void Click_Register_Button() {
		buttonSignUp.click();
	}

}
