import "./ProductList.css"
import {ProductListItem} from "../ProductListItem/ProductListItem";
import {useState} from "react";
import {useTelegram} from "../../hooks/useTelegram";

const products = [
    {id: '1', title: "Джинси", price: 500, description: "Сині прямі"},
    {id: '2', title: "Сорочка", price: 400, description: "Біла, короткі рукава"},
    {id: '3', title: "Капелюх", price: 250, description: "Синій"},
    {id: '4', title: "Футболка", price: 350, description: "Чорна, оверсайз"},
    {id: '5', title: "Кросівки", price: 3000, description: "Шкіряні"},
    {id: '6', title: "Куртка", price: 2000, description: "Червона, зима"},
    {id: '7', title: "Туфлі-2", price: 3500, description: "Чорні, весільні"},
    {id: '8', title: "Джинси-2", price: 300, description: "Сині прямі"},
]

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

export const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);

    const {tg} = useTelegram()

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id)
        let newItems = [];

        if (alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id)
        }else {
            newItems = [...addedItems, product]
        }
        setAddedItems(newItems)
        if(newItems.length === 0){
            tg.MainButton.hide()
        }else {
            tg.MainButton.show()
            tg.MainButton.setParams({
                text: `Купити: ${getTotalPrice(newItems)}`
            })
        }
    }

    return (
        <div className={"list"}>
            {
                products.map((item) => (
                    <ProductListItem key={item.id} product={item} onAdd={onAdd} className={"item"}/>
                ))
            }
        </div>
    );
};

