import React from 'react';
import { cartActions } from '../app/cart-slice';
import { useAppDispatch } from '../app/hooks';
import Card from './Card';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 10,
    title: 'And Then There Were None',
    description: `Ten people, each with something to hide and something to fear, 
    are invited to an isolated mansion on Indian Island by a host who, surprisingly, fails to appear. 
    On the island they are cut off from everything but each other and the inescapable shadows of their own past lives. 
    One by one, the guests share the darkest secrets of their wicked pasts. And one by one, they die…`,
  },
  {
    id: 'p2',
    price: 7,
    title: 'The Art of War',
    description: `Sun-Tzu's Art of War is almost certainly the most famous study of strategy ever written. 
    This treatise has been credited with influencing some of the most legendary military operations. 
    Beyond the battlefield, people far and wide have long turned to Art of War for advice on how to succeed in 
    various competitive situations, and companies around the world now make this book required reading for their executives.`,
  },
  {
    id: 'p3',
    price: 15,
    title: 'The Prince',
    description: `From his perspective in Renaissance Italy, Machiavelli's aim in this classic work was to resolve conflict 
    with the ruling prince, Lorenzo de Medici. Machiavelli based his insights on the way people really are rather than 
    an ideal of how they should be. This is the world's most famous master plan for seizing and holding power.`,
  },
];


const Products : React.FC = () => {
  const dispatch = useAppDispatch();
  const addToCartHandler = (id: string, title: string, price: number) =>
    dispatch(cartActions.addItemToCart({ id, title, price }));
  return (
    <section className='products'>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id} className='item'>
            <Card>
              <header>
                <h3>{product.title}</h3>
                <div className='price'>${product.price.toFixed(2)}</div>
              </header>
              <p>{product.description}</p>
              <div className='actions'>
                <button
                  onClick={() =>
                    addToCartHandler(product.id, product.title, product.price)
                  }
                >
                  Add to Cart
                </button>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Products;
