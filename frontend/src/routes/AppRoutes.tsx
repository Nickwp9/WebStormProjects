import { HomePage } from '../pages/HomePage'
import { ProductPage} from '../pages/ProductPage'
import { CartPage } from '../pages/CartPage'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    { path: '/home', element: <HomePage /> }
    { path: '/product', element: <ProductPage /> }
    { path: '/cart', element: <CartPage /> }
]);
