class menuPage {

    selectorsList() {
        const selectors = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
        }
    
        return selectors 
    }

     accessMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()
    }   


    accessorPerformance() {
        cy.get(this.selectorsList().performanceButton).click()
    }
}

export default menuPage 