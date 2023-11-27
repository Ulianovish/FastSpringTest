import React, { useContext } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';
import { PizzaType } from '../../../data/types';
import { AddButton, PizzaCard } from './PizzasCard.styled';
import { CustomPizzaContext } from '../../../context/customPizza/customPizzaContext';
// import Spinner from '../Spinner';
interface PizzasCardProps {
  pizzas: PizzaType[];
}

const PizzasCard = ({ pizzas }: PizzasCardProps) => {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useContext(CustomPizzaContext);
  const navigate = useNavigate();

  const pathname = useLocation().pathname;
  return (
    <>
      {pizzas?.map((pizza, i) => (
        <PizzaCard key={i}>
          <div>
            <img src={`/images/pizzas/${pizza.image}`} alt="" />
          </div>
          <div>
            <h3>{pizza.name}</h3>
            <p>
              {' '}
              <span>$ </span> {pizza.price}
            </p>
          </div>
          <AddButton
            className="add-button"
            onClick={() => {
              dispatch('setSelectedPizza', pizza);
              navigate(`/custom-pizza/${pizza.id}`);
            }}
          >
            <IoMdAdd />
          </AddButton>
        </PizzaCard>
      ))}
    </>
  );
};

export default PizzasCard;
