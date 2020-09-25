describe('Initial Layout', () => {
  before(() => {
    cy.visit('./index.html')
  })
  it('has a header reading Ghibli Review App', () => {
    cy
    .get("h1:first-of-type")
    .should("have.text", "Ghibli Review App")
  })
  it('has a select box', () => {
    cy
    .get("select")
    .should("exist")
  })
  it('has a select box containing the title of each movie', () => {
    cy
    .get("select > option")
    .then((options) => {
      const actual = [...options].map(o => o.innerText).filter(el => el !== "")
      const expected = [
        'Castle in the Sky',
        'Grave of the Fireflies',
        'My Neighbor Totoro',
        "Kiki's Delivery Service",
        'Only Yesterday',
        'Porco Rosso',
        'Pom Poko',
        'Whisper of the Heart',
        'Princess Mononoke',
        'My Neighbors the Yamadas',
        'Spirited Away',
        'The Cat Returns',
        "Howl's Moving Castle",
        'Tales from Earthsea',
        'Ponyo',
        'Arrietty',
        'From Up on Poppy Hill',
        'The Wind Rises',
        'The Tale of the Princess Kaguya',
        'When Marnie Was There'
      ]
      expect(actual.sort()).to.deep.eq(expected.sort())
    })
  })
})
