import React, { useContext, useEffect, useState } from 'react';
import { RiAddFill } from 'react-icons/ri';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Shipping/shipping.css';
import AddressModal from '../../components/AddressModal/AddressModal';
import PriceDetails from '../../components/PriceDetails/PriceDetails';
import { AddressType } from '../../data/types';
import { getAllAddresses, removeAddress } from '../../services/AddressService';
import useApiCall from '../../hooks/useApiCall';
import { CartOrderContext } from '../../context/cartOrder/cartOrderContext';
import useAuth from '../../hooks/useAuth';
const Shipping = () => {
  const [show, setShow] = useState(false);
  const [deleteAddress, setDeleteAddress] = useState(false);
  const [selected, setSelected] = useState(0);
  const [addressToEdit, setAddressToEdit] = useState<AddressType>();
  const { auth } = useAuth();
  // eslint-disable-next-line no-empty-pattern
  const [{ order }, dispatch] = useContext(CartOrderContext);
  const addresses = useApiCall<AddressType[]>(() => getAllAddresses(auth.email), {
    dependencies: [show, deleteAddress]
  });
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();
  const proceedToPayment = () => {
    navigate('/payment');
  };

  const delteAddress = async (id: number) => {
    await removeAddress(id);
    setDeleteAddress(!deleteAddress);
  };
  const handleUpdateAddress = (address: AddressType) => {
    setAddressToEdit(address);
    setShow(true);
  };

  const handleSelectAddress = (address: AddressType, i: number) => {
    setSelected(i);
    dispatch('setSelectedAddress', address);
  };

  return (
    <>
      <div className="shipping">
        <div className="progress">
          <div className="status">
            <p>Bag</p>
            <div className={`divider`}></div>
            <p className={` ${path === '/shipping' && 'active'}`}>Shipping</p>
            <div className="divider"></div>
            <p className={` ${path === '/payment' && 'active'}`}>Payment</p>
          </div>
        </div>
        <div className="shipping-details">
          <div className="address">
            <h3>Select Delivery Address</h3>
            <div className="add-sec-area">
              {addresses?.data?.length > 0 ? (
                addresses?.data
                  ?.sort((a, b) => a.id - b.id)
                  .map((address, i) => (
                    <div
                      onClick={() => handleSelectAddress(address, i)}
                      className={`og-add ${selected === i && 'selected'}`}
                      key={address.id}
                    >
                      <p>{address.address}</p>
                      <span>{address.town}</span>
                      <span>
                        {address.city},{address.state}
                      </span>
                      <span>
                        <b>Mobile No:</b>
                        {auth.phone}
                      </span>
                      <div className="btns">
                        <button className="btn" onClick={() => delteAddress(address.id)}>
                          Remove
                        </button>
                        <button className="btn" onClick={() => handleUpdateAddress(address)}>
                          Edit
                        </button>
                      </div>
                    </div>
                  ))
              ) : (
                <h3 style={{ padding: '20px 0' }}>No Address found! Add one</h3>
              )}

              <div
                className="add-address"
                onClick={() => {
                  setAddressToEdit(undefined);
                  setShow(true);
                }}
              >
                <div className="add">
                  <RiAddFill />
                  <p>Add Address</p>
                </div>
              </div>
            </div>
          </div>
          <PriceDetails>
            <button onClick={proceedToPayment} disabled={order.price === 0}>
              PROCEED TO PAYMENT
            </button>
          </PriceDetails>
        </div>
      </div>
      <AddressModal show={show} setShow={setShow} addressToEdit={addressToEdit} />
    </>
  );
};

export default Shipping;
