import PropTypes from 'prop-types';
export function Button({ classname, title }) {
    return (
        <button className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`} type="submit">
            {title}
        </button>
    )
}

Button.propTypes = {
    classname: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

