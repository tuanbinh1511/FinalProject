import { useRoutes } from 'react-router-dom'
import Header from './components/Header'
import MainLayout from './layouts/MainLayout'
import Login from './pages/Login'
import ProductList from './pages/ProductList'
import Register from './pages/Register'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      )
    },
    {
      path: 'login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    }
  ])
  return routeElements
}
