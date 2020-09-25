describe('Initial Layout', () => {
  before(() => {
    cy.visit('./index.html')
  })
  it('has a header reading Ghibli Review App', () => {
    cy
    .get("h1:first-of-type")
    .should("have.text", "Ghibli Review App")
  })
})
