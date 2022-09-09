package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage extends BasePage{

	WebDriver driver;
	
	public LoginPage(WebDriver driver) {
		this.driver = driver;
	}
	
	//Element Library
	@FindBy(how = How.XPATH, using = "//input[@id='loginusername']") WebElement UserName_Field;
	@FindBy(how = How.XPATH, using = "//input[@id='loginpassword']") WebElement Password_Field;
	@FindBy(xpath = "//button[contains(text(),'Log in')]")  WebElement SignIn_Button;
	@FindBy(xpath = "(//span[text()='×'])[2]") WebElement buttonX;
	
	//InteractiveMethods
	public void Enter_UserName(String Username) {
		UserName_Field.sendKeys(Username);
	}
	
	public void Enter_Password(String Password) {
		Password_Field.sendKeys(Password);
	}
	
	public void Click_Signin_Button() {
		SignIn_Button.click();
	}

    public void closeSignUpPageUsingX(){
        buttonX.click();
    }
}
