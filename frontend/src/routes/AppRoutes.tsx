import { HomePage } from '../pages/HomePage'
import { ProductPage} from '../pages/ProductPage'
import { CartPage } from '../pages/CartPage'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/product/:slug', element: <ProductPage /> },
    { path: '/cart', element: <CartPage /> }
]);

