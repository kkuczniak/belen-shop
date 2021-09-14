import styled from 'styled-components';
import { useStateValue } from '../state/StateProvider';
import CheckoutProduct from '../components/CheckoutProduct';

const CheckoutPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 48rem;
  margin: 0 auto;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
`;
const CheckoutProductSummary = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    height: 2.75rem;
    letter-spacing: 0.1rem;
    line-height: 2.75rem;
    text-transform: uppercase;
    border-bottom: 1px solid #000;
    text-align: center;
  }
`;

export default function CheckoutPage() {
  const [{ basket }] = useStateValue();

  return (
    <CheckoutPageContainer>
      <CheckoutProductSummary>
        <h4>Order Summary</h4>
      </CheckoutProductSummary>
      {basket?.map((item) => (
        <CheckoutProduct
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          size={item.size}
        />
      ))}
    </CheckoutPageContainer>
  );
}
