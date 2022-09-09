package steps;

import org.openqa.selenium.Alert;
import org.openqa.selenium.NoAlertPresentException;
import org.openqa.selenium.UnhandledAlertException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import cucumber.api.java.en.Then;
import pages.LoginPage;

public class LoginPageStep extends BaseStep {

	WebDriver driver = GetDriver();
	LoginPage login = PageFactory.initElements(driver, LoginPage.class);

	@Then("^User enters username and password and click login")
	public void user_enters_username_and_password_and_click_login() {

		login.Enter_UserName("Nalam HariPriya");
		login.Enter_Password("Hari123");
		try {
			login.Click_Signin_Button();
			System.out.println("Login successful");
		    }catch(UnhandledAlertException f) {
		    	try {
		    		Alert alert = driver.switchTo().alert();
		    		String alertText = alert.getText();
		    		System.out.println("Alert data: "+alertText);
		    		alert.accept();
		    	}catch(NoAlertPresentException e) {
		    		e.printStackTrace();
		    	}
		    }			
	}
	
}
