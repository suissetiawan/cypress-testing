describe("add to cart product", () => {
  it("Test Tab Functionality", () => {
    cy.visit("/");
    cy.get("h2:contains('Best')").scrollIntoView({ duration: 1000 });
    cy.get(
      "#best-selling-products > div > div > div > ul > li > div > a[data-product_id='168']"
    ).click();
    cy.wait(1000);
    cy.get("#ast-site-header-cart").scrollIntoView({ duration: 1000 }).click();
  });
});
