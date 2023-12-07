import { menuData } from "./data/menuData"

export default function Menu() {

    const List = ({items}) => {
        let headingText;
        let menuImg;

        if (items === menuData.coffee) {
            headingText = "Drink menu";
            menuImg = "Happy-mug"
        } else if (items === menuData.sandwich) {
            headingText = "Sandwiches"
            menuImg = "Sandwich"
        } else {
            headingText = "Desserts"
            menuImg = "Cupcake"
        }

        return (
            <section className="menu-section">
                <h3 className={`sub-heading menu-heading`}>{headingText}</h3>
                <ul className="menu-list">
                    {items.map( item => {
                        return (
                            <li className="list-item" key={item.id}>
                                <div>
                                    <h4 className="item-heading">{item.name}</h4>
                                    {item.size && <p>{item.size}</p>}
                                </div>
                                <p className="item-price">{item.price}</p>
                            </li>
                        )
                    })}
                </ul>
                <img className={menuImg} src={`/icon/${menuImg}.png`} alt={menuImg} width="94"/>
            </section>
        )
    }

    return (
        <section>
            <main className="menu-full">
                <p className="menu-subtext">* All prices are in UAH</p>
                <List items={menuData.coffee}/>
                <List items={menuData.sandwich}/>
                <List items={menuData.dessert}/>
            </main>
        </section>
    )
}