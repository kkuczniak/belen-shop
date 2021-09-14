/* eslint-disable no-unused-vars */

import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../state/StateProvider';
import { useNavigate } from 'react-router-dom';
import { getBasketTotal } from '../state/reducer';

export default function TotalPrice() {
  const navigate = useNavigate();

  const [{ basket }, dispatch] = useStateValue();

  return (
    <div>
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
      <button onClick={(event) => navigate('/payment')}>
        Proceed to checkout
      </button>
    </div>
  );
}
