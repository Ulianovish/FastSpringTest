import './allorders.css';
import SideBar from '../../components/SideBar/SideBar';
import Header from '../../components/Header/Header';
import LeftSide from '../../components/LeftSide/LeftSide';
import { DivMainArea } from '../../components/MainArea/MainArea.styled';
import { getAllOrders } from '../../services/OrderService';
import useAuth from '../../hooks/useAuth';
import useApiCall from '../../hooks/useApiCall';
import { OrderType } from '../../data/types';
const AllOrders = () => {
  const { auth } = useAuth();
  const orders = useApiCall<OrderType[]>(() => getAllOrders(auth.email));
  console.log('ORDERS', orders);
  return (
    <>
      <SideBar />
      <DivMainArea>
        <Header />
        <div className="all-orders-area">
          <h2>My Orders</h2>
          <div className="display-orders">
            {orders?.data?.length > 0 ? (
              orders?.data?.map((order) => (
                <div className="order-detail-card" key={order?.id}>
                  <div className="order-left-details">
                    <h4>Order ID: {order?.id}</h4>
                    <p>PRICE:{order?.price}</p>
                  </div>
                  <div className="status">
                    <span>Your item has been placed.</span>
                  </div>
                </div>
              ))
            ) : (
              <h1>No Past Orders</h1>
            )}
          </div>
        </div>
      </DivMainArea>
      <LeftSide />
    </>
  );
};

export default AllOrders;
