import hoodFront from '../images/hoodFront.jpg';
import ProductCard from '../components/ProductCard';
import styled from 'styled-components';

const ProductCardWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background: #f5f5f5;
`;

export default function MenPage() {
  return (
    <ProductCardWrapper>
      <ProductCard
        name='hood Black est. 1917'
        image={hoodFront}
        price={1245}
        size='L'
      />
      <ProductCard
        name='hood Black est. 1917'
        image={hoodFront}
        price={1245}
        size='L'
      />
      <ProductCard
        name='hood Black est. 1917'
        image={hoodFront}
        price={1245}
        size='L'
      />
      <ProductCard
        name='hood Black est. 1917'
        image={hoodFront}
        price={1245}
        size='L'
      />
      <ProductCard
        name='hood Black est. 1917'
        image={hoodFront}
        price={1245}
        size='L'
      />
      <ProductCard
        name='hood Black est. 1917'
        image={hoodFront}
        price={1245}
        size='L'
      />
      <ProductCard
        name='hood Black est. 1917'
        image={hoodFront}
        price={1245}
        size='L'
      />
      <ProductCard
        name='hood Black est. 1917'
        image={hoodFront}
        price={1245}
        size='L'
      />
      <ProductCard
        name='hood Black est. 1917'
        image={hoodFront}
        price={1245}
        size='L'
      />
    </ProductCardWrapper>
  );
}
