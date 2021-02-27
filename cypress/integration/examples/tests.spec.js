describe ('Application tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    
    const submitBtn = () => cy.get("button[id=submit]")
    const nameInput = () => cy.get('input[name=name]')
    const sizeInput = () => cy.get('select[name=size]')
    const pepperoniInput = () => cy.get('input[name="pepperoni"]')
    const olivesInput = () => cy.get('input[name="olives"]')
    const onionsInput = () => cy.get('input[name="onions"]')
    const peppersInput = () => cy.get('input[name="peppers"]')
    const instructionsInput = () => cy.get('input[name=instructions]')

    it('they exist', ()=>{
        nameInput().should('exist')
        pepperoniInput().should('exist')
        olivesInput().should('exist')
        cy.get('input[name=onions').should('exist')
        cy.get('input[name=peppers').should('exist')
        submitBtn().should('exist')
        
    })

    it('can type', ()=>{
        nameInput()
            .should('have.value','')
            .type('i am the baddest of them all')
            .should('have.value','i am the baddest of them all')
    })
    it('can select things', ()=> {
        pepperoniInput()
        .check()
        olivesInput()
        .check()
        onionsInput()
        .check()
        peppersInput()
        .check()
    })
}) 