import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/layouts/Header/Header';
import Meal from './components/Meal/Meal';
import CartProvider from './store/cartProvider';

function App() {

  console.log("hi i am app");
  const [isCartModalShown, setIsCartModalShown] = useState(false)

  return (
    <CartProvider>
      {isCartModalShown && <Cart isCartShown={setIsCartModalShown}/>}
      <Header isCartShown={setIsCartModalShown}/>
      <main>
        <Meal/>
      </main>
    </CartProvider>
  );
}

export default App;
