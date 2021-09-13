import ProductCard from '../components/ProductCard';
import styled from 'styled-components';
// import { productData } from '../data/productData';
import { Link } from 'react-router-dom';
import { useStateValue } from '../state/StateProvider';

const ProductCardWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background: #f5f5f5;
  a {
    width: 25%;
    text-decoration: none;
    color: inherit;
  }
`;

export default function MenPage() {
  const [{ products }] = useStateValue();
  console.log(products);
  return (
    <ProductCardWrapper>
      {products.map(({ id, image, title, price, size }) => (
        // eslint-disable-next-line react/jsx-key
        <Link to={`/details/${id}`}>
          <ProductCard
            key={id}
            title={title}
            image={image}
            price={price}
            size={size}
            id={id}
          />
        </Link>
      ))}
    </ProductCardWrapper>
  );
}
