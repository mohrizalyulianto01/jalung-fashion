import { Button } from "../Elements/Button"
import PropTypes from "prop-types"

export const CardProduct = ({ children }) => {
    return (
        <div className="w-full max-w-sm  bg-gray-800 rounded-lg border border-gray-200 shadow-md mx-5 flex flex-col justify-between">
            {children}
        </div>
    )
};

const Header = ({ img }) => {
    return (
        <a href="">
            <img src={img} alt="products" className="p-8 rounded-t-xl" />
        </a>
    )
};
Header.propTypes = {
    img: PropTypes.string.isRequired,
}


const Body = ({ title, description }) => {
    return (
        <div className="pb-5 px-5 h-full">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-white">{title}</h5>
                <p className="mb-3 font-normal text-gray-400">{description}</p>
            </a>
        </div>
    )
};

Body.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}
const Footer = ({ price }) => {
    return (
        <div className="flex justify-between items-center px-5 pb-5">
            <span className="text-3xl font-bold text-white">{price}</span>
            <Button title="Add to cart" classname="bg-blue-600" />
        </div>
    )
};
Footer.propTypes = {
    price: PropTypes.string.isRequired,
}


CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;


CardProduct.propTypes = {
    children: PropTypes.string.isRequired,

}
