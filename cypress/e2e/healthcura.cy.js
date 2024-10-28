describe("Login Feature", () => {
  it("User success Login", () => {
    cy.visit("https://katalon-demo-cura.herokuapp.com");
    cy.wait(1000);
    cy.get("#btn-make-appointment").click();
    cy.get("#txt-username").type("John Doe");
    cy.wait(1000);
    cy.get("#txt-password").type("ThisIsNotAPassword");
    cy.wait(1000);
    cy.get("button[type='submit']").click();

    // verify expected result
    cy.get("h2").should("contain", "Make Appointment");
  });

  it("User failed Login", () => {
    cy.visit("https://katalon-demo-cura.herokuapp.com");
    cy.wait(1000);
    cy.get("#btn-make-appointment").click();
    cy.get("#txt-username").type("John Doe");
    cy.wait(1000);
    cy.get("#txt-password").type("ThisIsAPassword");
    cy.wait(1000);
    cy.get("button[type='submit']").click();

    // verify expected result
    // cy.get("h2").should("contain", "Make Appointment");
  });
});

//id : #login
// class : .login-button
// tag html : li a button
// atribute dalam tag : a[type="button"], button[name="buttonLogin"]
