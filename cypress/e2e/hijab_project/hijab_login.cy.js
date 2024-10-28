describe("Login Feature", () => {
  it("success login to website", () => {
    cy.viewport("macbook-13");
    cy.visit("https://hijab.id");
    cy.wait(1000);
    cy.get("ul.uliconnav a:contains('LOGIN')").click({ force: true });
    cy.get("input[name='txtemail']").type("testing_user1@yopmail.com");
    cy.wait(1000);
    cy.get("input[name='txtpwd']").type("P@ssw0rd123");
    cy.wait(1000);
    cy.get("input[type='submit").click();
    cy.get("span").should("contain", "Dashboard");
  });
});
