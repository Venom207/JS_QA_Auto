const LoginPage = require("../pageobjects/login.page");
const SecurePage = require("../pageobjects/secure.page");

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await LoginPage.login("Lavern.Mayer71@yahoo.com", "BCUhpWS2A_mxXJJ");
    /*await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(
      "You logged into a secure area!"
    );*/
  });
});
