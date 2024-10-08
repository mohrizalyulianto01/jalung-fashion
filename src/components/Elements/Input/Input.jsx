import PropTypes from "prop-types"
export const Input = ({ text, placeholder }) => {
    return (
        <input className="text-sm rounded-lg mb-2 block w-full p-2.5
         bg-gray-50 border border-gray-300" type={text} id="email" name="email" placeholder={placeholder} />
    )
}

Input.propTypes = {
    text: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
}

