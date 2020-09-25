describe('Styling', () => {
  it("Body has a lavender background", () => {
    cy
    .get('body')
    .should('have.css', 'background-color', 'rgb(230, 230, 250)')
  })
  it("Elements have the correct font", () => {
    cy
    .get('h1')
    .should('have.css', 'font-family', 'monospace')
  })
  it("Header has a skyblue background", () => {
    cy
    .get('#header')
    .should('have.css', 'background-color', 'rgb(135, 206, 235)')
  })
})
