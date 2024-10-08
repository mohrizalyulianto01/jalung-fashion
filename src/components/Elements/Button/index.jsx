import PropTypes from 'prop-types';
export function Button(props) {
    return (
        <button className={`h-10 px-6 font-semibold rounded-md ${props.classname} text-white`} type="submit">
            Login
        </button>
    )
}

Button.propTypes = {
    classname: PropTypes.string.isRequired,
}

