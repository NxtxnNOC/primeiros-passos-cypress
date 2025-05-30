import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import menuPage from '../pages/menuPage'

const loginPage = new LoginPage() 
const dashboardPage = new DashboardPage() 
 
describe('Orange HRM Tests', () => {

 const selectorsList = {
   wrongCredencialAlert: "[role='alert']",
   myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
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
   
   it.only('User Info Update - Sucess', () => {
    LoginPage.accessloginPage() 
    LoginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    
    dashboardPage.checkDashboardPage()

    menuPage.accessMyinfo()

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
    cy.get(selectorsList.submitButton).eq(0).click({force: true })
    cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > ')
    cy.get('body').should('contains', 'Sucessfuly Updated')
    cy.get('.oxd-toast-close')
    
    cy.get(selectorsList.genericCombobox).eq(0).click({force: true })
    cy.get(selectorsList.secondItemCombox).click()
    cy.get(selectorsList.genericCombobox).eq(1).click({force: true })
    cy.get(selectorsList.thirdItemCombox).click()


})

  it('login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredencialAlert)
  })
})