import { ProductModel } from "../Models/models";
import './styles.css';

type Props = {
    product: ProductModel;
    addProduct: Function;
}


function ProductCard({ product, addProduct}: Props) {

    return (
        <div className="card">
            <h1>{product.name}</h1>
            <h2>Dados Nutricionais:</h2>
            <h3>Carboidratos: {product.nutritions.carbohydrates}</h3>
            <h3>Proteína: {product.nutritions.protein}</h3>
            <h3>Gordura: {product.nutritions.fat}</h3>
            <h3>Calorias: {product.nutritions.calories}</h3>
            <h3>Açúcar: {product.nutritions.sugar}</h3>
            <button className="btn btn-primary card-btn" onClick={() => addProduct(product)}>Adicionar ao carrinho</button>
        </div>
    );
}

export default ProductCard;