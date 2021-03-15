describe("Styling", () => {
  it("Body has a lavender background", () => {
    cy.get("body").should("have.css", "background-color", "rgb(230, 230, 250)");
  });
  it("Elements have the correct font", () => {
    cy.get("h1").should("have.css", "font-family", "monospace");
  });

  it("Header should have correct styling", () => {
    cy.get("header")
      .should("have.css", "background-color", "rgb(135, 206, 235)")
      .should("have.css", "height", "150px")
  });
  it("image has height of 150px", () => {
    cy.get("img").should("have.css", "height", "150px");
  });
});
