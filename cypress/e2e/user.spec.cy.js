import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {

const selectorsList = {
   usernameField: "[name='username']",
   passwordField: "[name='password']",
   loginButton:   "[type='submit']",
   sectionTitleTopbar: ".oxd-topbar-header-breadcrumb-module",
   dashboardGrid: ".orangehrm-dashboard-grid", 
   wrongCredencialAlert: "[role='alert']",
   myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
   firstNameField: "[name='firstname']",
   lastNameField: "[name='lastname']",
   genericNameField: " .oxd-input--active",
   dateField: "[placeholder='yyyy-mm-dd'",
   dateCloseButton: ".--close",
   submitButton: "[type='submit']",
}

  it.only('User Info Update - Sucess', () => {

    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index') 
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericNameField).eq(3).clear().type('NicknameTest')
    cy.get(selectorsList.genericNameField).eq(4).clear().type('EmployeeTest')
    cy.get(selectorsList.genericNameField).eq(5).clear().type('OtherIdTest')
    cy.get(selectorsList.genericNameField).eq(6).clear().type('DriversLicenseTest')
    cy.get(selectorsList.genericNameField).eq(7).clear().type('2025-03-210')
    cy.get(selectorsList.dateCloseButton).click() 
    cy.get(selectorsList.genericNameField).eq(8).clear().type('ssnNumberTest')
    cy.get(selectorsList.genericNameField).eq(9).clear().type('sinNumberTest')
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get ('body').should('contains', 'Sucessfuly Updated')

})

  it('login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredencialAlert)
  })
})