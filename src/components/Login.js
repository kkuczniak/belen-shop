import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

export default function Login() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div>
      <h1>{account}</h1>
      <p>Hello There</p>
      <button onClick={() => depositMoney(100)}>deposit</button>
      <button onClick={() => withdrawMoney(100)}>withdraw</button>
    </div>
  );
}
