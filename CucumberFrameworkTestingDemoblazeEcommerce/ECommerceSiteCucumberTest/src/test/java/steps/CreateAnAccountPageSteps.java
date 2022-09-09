package steps;

import org.openqa.selenium.Alert;
import org.openqa.selenium.NoAlertPresentException;
import org.openqa.selenium.UnhandledAlertException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import pages.CreateAnAccountPage;

public class CreateAnAccountPageSteps extends BaseStep {
	
	WebDriver driver = GetDriver();
	CreateAnAccountPage createacc = PageFactory.initElements(driver, CreateAnAccountPage.class);
	
	@Then("enter username and pasword and click Register")
	public void user_enters_username_and_password() throws UnhandledAlertException,NoAlertPresentException,InterruptedException {
	    createacc.Fill_UserName_Field("Hari Priya Nalam");
	    createacc.Fill_Password_Field("Hari123");
	    createacc.Click_Register_Button();
	    Thread.sleep(5000);
		Alert alert = driver.switchTo().alert();
		String alertText = alert.getText();
		System.out.println(alertText);
		Thread.sleep(5000);
		alert.accept();
	}
}
