import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import PizzasCard from './PizzasCard/PizzasCard';
import { PizzaType } from '../../data/types';
import useApiCall from '../../hooks/useApiCall';
import { getPizzas } from '../../services/PizzaService';
import SkeletonArticle from '../../skeleton/SkeletonArticle';
import { PizzaCard, PizzasContainer } from './Pizzas.styled';
const Pizzas = () => {
  const pizzasData = useApiCall<PizzaType[]>(getPizzas);

  return (
    <PizzasContainer>
      {pizzasData.data?.length === 0 || pizzasData.isLoading ? (
        <>
          {[1, 2, 3].map((n) => (
            <PizzaCard key={n}>
              <SkeletonArticle key={n} />
            </PizzaCard>
          ))}
        </>
      ) : (
        <PizzasCard pizzas={pizzasData.data.sort((a, b) => a.id - b.id)} />
      )}
    </PizzasContainer>
  );
};

export default Pizzas;
