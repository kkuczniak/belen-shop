/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import CurrencyFormat from 'react-currency-format';
import { useNavigate } from 'react-router-dom';
import CheckoutProduct from '../components/CheckoutProduct';
import { useStateValue } from '../state/StateProvider';
import { getBasketTotal } from '../state/reducer';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from '../axios';

const PaymentPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 48rem;
  margin: 0 auto;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
`;
const PaymentProductSummary = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #000;

  h4 {
    height: 2.75rem;
    letter-spacing: 0.1rem;
    line-height: 2.75rem;
    text-transform: uppercase;

    text-align: center;
  }
`;
const PaymentProductSummaryCost = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #000;
  p {
    font-size: 0.75rem;
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
    strong {
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
    }
  }
`;
const PaymentMethod = styled.form`
  display: flex;
  width: 100%;
  height: 8rem;
  justify-content: space-between;
  flex-direction: column;
  border-bottom: 1px solid #000;
  p {
    padding: 0.4rem 1rem 1rem;
    font-weight: bold;
    font-size: 0.75rem;
  }
  div {
    width: 100%;
    padding: 0 1rem 1rem;
  }
  button {
    border: 1px solid #000;
    font-weight: bold;
    letter-spacing: 0.1rem;
    background: ${({ theme }) => theme.color.buttonGreen};
    height: 2.5rem;
    text-transform: uppercase;
    width: 9rem;
    cursor: pointer;
  }
`;

export default function PaymentPage() {
  // eslint-disable-next-line no-unused-vars
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(null);
  const [processing, setProcessing] = useState('');
  const [succeed, setSucceed] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  const handleSubmit = async (e) => {
    e.preventDefault;
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceed(true);
        setError(null);
        setProcessing(false);

        navigate('/orders', { replace: true });
      });
  };
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : '');
  };

  return (
    <PaymentPageContainer>
      <PaymentProductSummary>
        <h4>Checkout</h4>
      </PaymentProductSummary>
      <PaymentProductSummaryCost>
        <p>e-mail</p>
        <p>{user?.email}</p>
      </PaymentProductSummaryCost>
      <PaymentProductSummaryCost>
        <p>Address</p>
        <p>12 Boulevard New York</p>
      </PaymentProductSummaryCost>
      {basket.map((item) => (
        <CheckoutProduct
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          size={item.size}
        />
      ))}
      <PaymentProductSummaryCost>
        <p>Order Total</p>
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                <strong>{value}</strong>
              </p>
            </>
          )}
          value={getBasketTotal(basket)}
          suffix={'€'}
          decimalScale={2}
          displayType={'text'}
          thousandSpacing={'3'}
          thousandSeparator={true}
        />
      </PaymentProductSummaryCost>
      <PaymentMethod onSubmit={handleSubmit}>
        <p>Payment Method</p>
        <CardElement
          onChange={handleChange}
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button disabled={processing || disabled || succeed}>
          <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
        </button>
        {error && <div>error</div>}
      </PaymentMethod>
    </PaymentPageContainer>
  );
}
