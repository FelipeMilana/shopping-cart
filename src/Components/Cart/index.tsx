import { CartModel } from "../Models/models";
import './styles.css';

type Props = {
    products: CartModel[];
    addProduct: Function;
    removeProduct: Function;
    cleanCart: Function;
}

function Cart({ products, addProduct, removeProduct, cleanCart }: Props) {

    const cartProducts = products;

    return (
        <div className="card-cart">
            <h1>Carrinho de compras</h1>
            <div>{cartProducts.length === 0 && <h3>carrinho vazio</h3>}</div>

            <div>
                {cartProducts.map(product => (
                    <div className="cart" key={product.id}>
                        <h2>{product.name}</h2>
                        <div className="cart-quantity">
                            <button className="btn btn-primary cart-btn" onClick={() => removeProduct(product)}> - </button>
                            <h2>{product.quantity}</h2>
                            <button className="btn btn-primary cart-btn" onClick={() => addProduct(product)}> + </button>
                        </div>
                    </div>
                ))}
            </div>
            <div>{cartProducts.length !== 0 && <button className=" btn btn-primary cart-btn-clear"onClick={() => cleanCart()}>Limpar carrinho</button>}</div>
        </div>
    );
}

export default Cart;