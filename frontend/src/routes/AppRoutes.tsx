import { HomePage } from '../pages/HomePage'
import { ProductPage} from '../pages/ProductPage'
import { CartPage } from '../pages/CartPage'
import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from '../layout/AppLayout'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'


export const router = createBrowserRouter([
    {path: '/',
      element: <AppLayout />,
      children:[
    { index: true, element: <HomePage /> },
    { path: 'product/:slug', element: <ProductPage /> },
    { path: 'cart', element: <CartPage /> },
    { path: 'login', element: <LoginPage/>},
    { path: 'register', element: <RegisterPage/>}
    ]
  }
]);

