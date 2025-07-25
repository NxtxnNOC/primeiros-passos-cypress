import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance');

const chance = new Chance()
const loginPage = new LoginPage() 
const dashboardPage = new DashboardPage() 
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage() 
 
describe('Orange HRM Tests', () => {

 
  it('User Info Update - Sucess', () => {
    loginPage.accessLoginPage() 
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    
    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo() 

    myInfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.string())
    myInfoPage.filEmployeeDetails('EmployId', 'otherId','Drivers Number', '2025-05-03', '123456', '0987654')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
})
})