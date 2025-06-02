class MyInfoPage {

    selectorsList() {
        const selectors = {
          firstNameField: "[name='firstname']",
          lastNameField: "[name='lastname']",
          genericNameField: " .oxd-input--active",
          dateField: "[placeholder='yyyy-mm-dd'",
          genericCombobox: ".oxd-select-text--arrow",
          secondItemCombox: "'.oxd-select-dropdown > :nth-child(2)'",
          thirdItemCombox: "'.oxd-select-dropdown > :nth-child(3)'",
          dateCloseButton: ".--close",
          submitButton: ".orangehrm-left-space"
        }
    
        return selectors 
    }

    fillPersonalDetails(firstname, lastName, nickName){
        cy.get(this.selectorsList().firstNameField).clear().type(firstname) 
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        cy.get(this.selectorsList().genericNameField).eq(3).clear().type(nickName)
      }
     
      filEmployeeDetails(employeeId, otherId, driversLicensenNumber, expiryDate, ssnNumber, sinNumber) {
        cy.get(this.selectorsList().genericNameField).eq(4).clear().type(employeeId)
        cy.get(this.selectorsList().genericNameField).eq(5).clear().type(otherId)
        cy.get(this.selectorsList().genericNameField).eq(6).clear().type( expiryDate)
        cy.get(this.selectorsList().genericNameField).eq(7).clear().type(driversLicenseDate)
        cy.get(this.selectorsList().dateCloseButton).click() 
        cy.get(this.selectorsList().genericNameField).eq(8).clear().type(ssnNumber)
        cy.get(this.selectorsList().genericNameField).eq(9).clear().type(sinNumber)
    }

    saveForm(){
        cy.get(this.selectorsList().submitButton).eq(0).click({force: true })
        cy.get('body').should('contains', 'Sucessfuly Updated')
        cy.get('.oxd-toast-close')
    }

    fillStatus(){
        cy.get(this.selectorsList().genericCombobox).eq(0).click({force: true })
        cy.get(this.selectorsList().secondItemCombox).click()
        cy.get(this.selectorsList().genericCombobox).eq(1).click({force: true })
        cy.get(this.selectorsList().thirdItemCombox).click()
    }
}






export default MyInfoPage