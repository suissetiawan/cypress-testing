describe("login to Home Page", () => {
  it("Test Tab Functionality", () => {
    cy.visit("/");
    cy.get("a:contains('Login')").click();
    cy.wait(1000);
    cy.get("input[name='xoo-el-rememberme']").check();
    cy.wait(1000);
    cy.get("input[name='xoo-el-rememberm']").uncheck();
    cy.wait(1000);
    cy.get("li[data-tab='register']").click();
    cy.wait(1000);
    cy.get("li").should("contain", "Sign Up");
    cy.get("input").should("not.have.value", "Jane");
  });

  it("Login to Website", () => {
    cy.visit("/");
    cy.get("a:contains('Login')").click();
    cy.wait(1000);
    cy.get("input[name='xoo-el-username']").type("testing_user1@yopmail.com");
    cy.get("input[name='xoo-el-password']").type(`Sup3rm@n123 {enter}`);
    cy.get("input[name='xoo-el-username']").should(
      "not.have.value",
      "testing_user1@yopmail.com"
    );
    cy.wait(1000);
    cy.get("a").should("contain", "Logout");
  });
});
