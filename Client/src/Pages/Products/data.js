import pokemonEspresso from "../../images/espresso.jpg";
import icedMocha from "../../images/mocha.jpg";
import Cheese from "../../images/jcheesecake.jpg";
import cake from "../../images/cake.jpg";
import cookie from "../../images/cookie.jpg";
import icedlatte from "../../images/icedlatte.jpg";



export const productItem = [
    {
        image: pokemonEspresso,
        alt: "Coffee",
        name: "Espresso",
        desc: "Mo Espresso, Less Depresso!",
        price: "$2.99",
        btn: "Add to Cart"

    },
    {
        image: icedMocha,
        alt: "Coffee",
        name: "Iced Mocha",
        desc: "Cool like an Iced Mocha!",
        price: "$4.99",
        btn: "Add to Cart"
    },
    {
        image: icedlatte,
        alt: "Coffee",
        name: "Iced Latte",
        desc: "yum",
        price: "$5.99",
        btn: "Add to Cart"
    },
    {
        image: Cheese,
        alt: "Pastry",
        name: "Cheesecake",
        desc: "Jiggly",
        price: "$20,000.00",
        btn: "Add to Cart"
    },
    {
        image: cake,
        alt: "Pastry",
        name: "Rainbow Cake",
        desc: "Taste The Rainbow",
        price: "$3.99",
        btn: "Add to Cart"
    },
    {
        image: cookie,
        alt: "Pastry",
        name: "Chocolate Chip Cookie",
        desc: "Melts in Your Mouth",
        price: "$2.99",
        btn: "Add to Cart"
    }
]

export default productItem;