describe ('Application tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    // const pizzaRedirect = () => cy.get("button[id=redirect]")
    const submitBtn = () => cy.get("button[id=submit]")
    const nameInput = () => cy.get('input[name=name]')
    const sizeInput = () => cy.get('select[name=size]')
    const pepperoniInput = () => cy.get('input[name=pepperoni')
    const olivesInput = () => cy.get('input[name=olives')
    const onionsInput = () => cy.get('input[name=onions')
    const peppersInput = () => cy.get('input[name=peppers')
    const instructionsInput = () => cy.get('input[name=instructions]')

    it('they exist', ()=>{
        cy.get('input[name="name"]')
        cy.get('input[name="pepperoni"]')
        cy.get('input[name=onions')
        cy.get('input[name=peppers')
        cy.get('button[id="submit"]')
        
    })
}) 