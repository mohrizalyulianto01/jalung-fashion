import PropTypes from "prop-types" 
import { Label } from './Label'
import { Input } from './input'
export const InputForm = ({ htmlFor, text, placeholder, label }) => {
    return (
        <div className="mb-5">
            <Label htmlFor={htmlFor} label={label} />
            <Input type={text} placeholder={placeholder} />
        </div>
    )
}

InputForm.propTypes = {
    text: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    htmlFor: PropTypes.string.isRequired,
}
