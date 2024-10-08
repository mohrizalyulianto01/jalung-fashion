import { CardProduct } from "../components/Fragments/CardProduct"

const ProductsData = [
    {
        id: 1,
        img: "/image/shoes-1.jpg",
        title: "Shoes Jordan Original",
        price: "Rp. 4000.000",
        description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
        id: 2,
        img: "/image/shoes-1.jpg",
        title: "Shoes Nike Original",
        price: "Rp. 150.000",
        description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
        id: 3,
        img: "/image/shoes-1.jpg",
        title: "Shoes Adidas Original",
        price: "Rp. 1.000.000",
        description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },

]

export const Products = () => {
    return (
        <div className="flex justify-center items-center py-5">
            {
                ProductsData.map(data => (
                    <CardProduct key={data.id}>
                        <CardProduct.Header img={data.img} />
                        <CardProduct.Body title={data.title} description={data.description} />
                        <CardProduct.Footer price={data.price} />
                    </CardProduct>
                ))
            }
        </div>
    )

}