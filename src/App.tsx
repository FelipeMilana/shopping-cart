import { useState } from "react";
import Cart from "./Components/Cart";
import { CartModel, ProductModel } from "./Components/Models/models";
import ProductCard from "./Components/ProductCard";
import Data from "./data.json";


function App() {

  const products: ProductModel[] = Data;
  const [cartProducts, setCartProducts] = useState<CartModel[]>([]);

  const handleAdd = (product: ProductModel) => {
    const findProduct = cartProducts.find(x => x.id === product.id);

    if (findProduct) {
      setCartProducts(cartProducts.map(x => x.id === product.id ? { ...findProduct, quantity: findProduct.quantity + 1 } : x));
    }
    else {
      setCartProducts([...cartProducts, { ...product, quantity: 1 }]);
    }
  }

  const handleRemove = (product: ProductModel) => {
    const findProduct = cartProducts.find(x => x.id === product.id);

    if (findProduct?.quantity === 1) {
      setCartProducts(cartProducts.filter(x => x.id !== product.id));
    } else {
      if (findProduct) {
        setCartProducts(cartProducts.map(x => x.id === product.id ? { ...findProduct, quantity: findProduct.quantity - 1 } : x));
      }
      else {
        return;
      }
    }
  }

  const handleClean = () => {
    setCartProducts([]);
  }

  return (

    <div>
      <Cart products={cartProducts} addProduct={handleAdd} removeProduct={handleRemove} cleanCart={handleClean} />
      <div className="container">
        <div className="row">
          {products.map(p => (
            <div key={p.id} className="col-sm-3">
              <ProductCard product={p} addProduct={handleAdd} />
            </div>
          ))}
        </div>
      </div>
    </div>

  );


}

export default App;
