import {LoginPage} from "./pages/login_pages"
import {Product} from "./pages/product"

let loginPage = new LoginPage()
let product = new Product()
const URL = 'https://www.saucedemo.com/'

it('TS03_TC_0301 Successfully added a product to cart', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    product.addProduct()
    product.assertionCart()
})

it('TS04_TC_0401 Successfully checkout a product', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    product.addProduct()
    product.CartClick()
    product.checkoutProduct()
    product.checkoutInfoProduct()
    product.checkoutOverviewAssrt()
})
