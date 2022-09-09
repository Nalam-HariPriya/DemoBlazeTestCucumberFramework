package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class OrderPage {
	
	WebDriver driver;
	
	public OrderPage(WebDriver driver) {
		this.driver = driver;
	} 
 
	
	//Element Library
	@FindBy(how = How.XPATH, using = "//input[@id='name']") WebElement inputTextName;
	@FindBy(how = How.XPATH, using = "//input[@id='country']")WebElement inputTextCountry;
	@FindBy(how = How.XPATH, using = "//input[@id='city']")WebElement inputTextCity;
	@FindBy(how = How.XPATH, using = "//input[@id='card']")WebElement inputTextCard;
	@FindBy(how = How.XPATH, using = "//input[@id='month']")WebElement inputTextMonth;
	@FindBy(how = How.XPATH, using = "//input[@id='year']")WebElement inputTextYear;
	@FindBy(how = How.XPATH, using = "//button[text()='Purchase']")WebElement buttonPurchase;
	@FindBy(how = How.XPATH, using = "//button[contains(text(),'OK')]")WebElement buttonOk;

	
	//InteractiveMethods

	public void clickOnPurchase() {
		buttonPurchase.click();;
	}
	
	public void enterPlaceOrderData(String name, String country, String city, String card, String month, String year) {
		inputTextName.sendKeys(name);
		inputTextCountry.sendKeys(country);
		inputTextCity.sendKeys(city);
		inputTextCard.sendKeys(card);
		inputTextMonth.sendKeys(month);
		inputTextYear.sendKeys(year);
	}
	
	public void clickOnOk() throws InterruptedException {
		Thread.sleep(3000);
		buttonOk.click();
	}	

}
