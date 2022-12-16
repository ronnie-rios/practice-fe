import { useState } from 'react';
import { Cart } from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import { CartProvider } from './components/store/cart-context';
function App() {
  const [toggle, setToggle] = useState(false);

  const showCartHandler = () => {
    setToggle(true)
  }
  const hideCartHandler = () => {
    setToggle(false)
  }
  return (
    <CartProvider>
    {toggle && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
