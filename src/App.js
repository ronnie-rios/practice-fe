import { useState } from 'react';
import { Cart } from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [toggle, setToggle] = useState(false);

  const showCartHandler = () => {
    setToggle(true)
  }
  const hideCartHandler = () => {
    setToggle(false)
  }
  return (
    <>
    {toggle && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  
  );
}

export default App;
