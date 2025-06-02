import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'

const loginPage = new LoginPage() 
const dashboardPage = new DashboardPage()
 
describe('Login Orange HRM Tests', () => {

  it('login - Fail', () => {
    cy.visit('/auth/login')
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
})
    it('login - Success ', () => {
    cy.visit('/auth/login')
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()

  })

})