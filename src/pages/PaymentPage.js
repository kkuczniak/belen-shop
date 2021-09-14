import styled from 'styled-components';
import CurrencyFormat from 'react-currency-format';
import { Link, useNavigate } from 'react-router-dom';
import CheckoutProduct from '../components/CheckoutProduct';
import { useStateValue } from '../state/StateProvider';
import { getBasketTotal } from '../state/reducer';

export default function PaymentPage() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}
