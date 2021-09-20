import styled from 'styled-components';
import { useStateValue } from '../state/StateProvider';
import CheckoutProduct from '../components/CheckoutProduct';
import TotalPrice from '../components/TotalPrice';

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
  border-bottom: 1px solid #000;
  h4 {
    height: 2.75rem;
    letter-spacing: 0.1rem;
    line-height: 2.75rem;
    text-transform: uppercase;

    text-align: center;
  }
`;
const CheckoutProductSummaryCost = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.6rem;
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
  button {
    display: flex;
    position: relative;
    border: none;
    font-weight: bold;
    letter-spacing: 0.1rem;
    border-left: 1px solid #000;
    border-top: 1px solid;
    background: ${({ theme }) => theme.color.buttonGreen};
    top: 0.6rem;
    height: 2.5rem;
    text-align: center;
    justify-content: center;
    text-transform: uppercase;
    width: 9rem;
    cursor: pointer;
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
      <CheckoutProductSummary>
        <CheckoutProductSummaryCost>
          <p>Shipping cost</p>
          <p>0.00</p>
        </CheckoutProductSummaryCost>
        <CheckoutProductSummaryCost>
          <p>
            <strong>Estimated total</strong>
          </p>
          <TotalPrice />
        </CheckoutProductSummaryCost>
      </CheckoutProductSummary>
    </CheckoutPageContainer>
  );
}
