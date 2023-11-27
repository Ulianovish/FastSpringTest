import './App.css';
import './skeleton.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Cart from './pages/Cart/Cart';
import Shipping from './pages/Shipping/Shipping';
import Payment from './pages/Payment/Payment';
import OrderSummry from './pages/OrderSummary/OrderSummary';
import OrderDetails from './pages/OrderDetails/OrderDetails';
import AllOrders from './pages/Orders/AllOrders';
import CustomPizza from './pages/CustomPizza/CustomPizza';
import { CustomPizzaProvider } from './context/customPizza/customPizzaContext';
import { CartOrderProvider } from './context/cartOrder/cartOrderContext';
import Signin from './pages/Auth/SignIn';
import Signup from './pages/Auth/SignUp';
import { AuthProvider } from './context/auth/authContext';
import { AuthInterceptor } from './services/RequestInterceptor';
import AuthRole from './pages/Auth/AuthRole';

function App() {
  return (
    <HashRouter>
      <main>
        <CustomPizzaProvider>
          <CartOrderProvider>
            <AuthProvider>
              <AuthInterceptor />
              <Routes>
                {/* Routes that only role USER can access */}
                <Route element={<AuthRole allowedRoles={['USER']} />}>
                  <Route path="/shipping" element={<Shipping />} />
                  <Route path="/payment" element={<Payment />} />
                  <Route path="/order" element={<OrderSummry />} />
                  <Route path="/order/:id" element={<OrderDetails />} />
                  <Route path="/orders" element={<AllOrders />} />
                </Route>
                <Route path="/cart" element={<Cart />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/custom-pizza/:id" element={<CustomPizza />} />
                {['/', '*'].map((path) => (
                  <Route key={path}>
                    <Route path={path} element={<Home />} />
                  </Route>
                ))}
              </Routes>
            </AuthProvider>
          </CartOrderProvider>
        </CustomPizzaProvider>
      </main>
    </HashRouter>
  );
}

export default App;
