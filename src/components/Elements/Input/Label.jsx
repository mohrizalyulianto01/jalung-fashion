import PropTypes from "prop-types"

export const Label = ({ htmlFor, label }) => {

    return (
        <label htmlFor={htmlFor} className="font-bold block text-sm text-slate-700">{label}</label>
    )
}
Label.propTypes = {
    label: PropTypes.string.isRequired,
    htmlFor: PropTypes.string.isRequired,
}
