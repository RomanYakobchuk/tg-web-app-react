import "./ProductListItem.css"
import {Button} from "../Button/Button";

export const ProductListItem = ({product, className, onAdd}) => {

    const onAddHandler = () => {
      onAdd(product)
    }

    return (
        <div className={"product " + className}>
            <div className="img"/>
            <div className="title">
                {product.title}
            </div>
            <div className="description">
                {product.description}
            </div>
            <div className="price">
                <span>Вартість: <b>{product.price}</b></span>
            </div>
            <Button className={"add-btn"} onClick={onAddHandler}>
                Добавити в корзину
            </Button>
        </div>
    );
};

