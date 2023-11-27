import React, { useContext, useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addAddress, updateAddress } from '../actions/address';
// import axios from 'axios'
import './adressModal.css';
import { addAddress, editAddress } from '../../services/AddressService';
import { AuthContext } from '../../context/auth/authContext';
import { AddressType } from '../../data/types';
interface AddressModalProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  addressToEdit?: any;
}
const AddressModal = ({ show, setShow, addressToEdit }: AddressModalProps) => {
  const [address, setAdress] = useState('');
  const [state, setState] = useState('');
  const [town, setTown] = useState('');
  const [city, setCity] = useState('');
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (addressToEdit) {
      setAdress(addressToEdit.address);
      setState(addressToEdit.state);
      setTown(addressToEdit.town);
      setCity(addressToEdit.city);
    }
  }, [addressToEdit]);

  const cleanFields = () => {
    setAdress('');
    setState('');
    setTown('');
    setCity('');
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await addAddress(auth.email, { address, state, town, city } as AddressType);
    cleanFields();
    setShow(false);
  };
  const handleUpdateAddress = async (e: any) => {
    e.preventDefault();
    await editAddress(addressToEdit.id, {
      id: addressToEdit.id,
      address: address,
      state: state,
      town: town,
      city: city
    } as AddressType);
    cleanFields();
    setShow(false);
  };

  useEffect(() => {
    return () => {
      cleanFields();
    };
  }, [show]);

  return (
    <div className={`black-scree ${show && 'show'}`} onClick={() => setShow(false)}>
      <div className="address-form" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={addressToEdit ? handleUpdateAddress : handleSubmit}>
          <input
            onChange={(e) => setAdress(e.target.value)}
            value={address}
            type="text"
            name="address"
            placeholder="Address"
          />
          <input
            onChange={(e) => setTown(e.target.value)}
            value={town}
            type="text"
            name="town"
            placeholder="Locality/Town"
          />
          <input
            onChange={(e) => setState(e.target.value)}
            value={state}
            type="text"
            name="state"
            placeholder="State"
          />
          <input
            onChange={(e) => setCity(e.target.value)}
            value={city}
            type="text"
            name="city"
            placeholder="City"
          />

          <div className="submit-btn">
            <button type="submit">{addressToEdit ? 'UPDATE ADDRESS' : 'ADD ADDRESS'}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressModal;
