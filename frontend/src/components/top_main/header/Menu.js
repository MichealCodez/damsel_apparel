function Menu() {
    const cat = [
        "Jewelry & Accessories", "Clothing & Shoes", "Home & Living", 
        "Wedding & Party", "Toys & Entertainment", "Art & Collectibles",
        "Craft Supplies & Tools"
    ];
    return(
        <ul id="menu">
            {cat.map((value, index) => (<li key={index}>{value}</li>))}
        </ul>
    );
}

export default Menu;