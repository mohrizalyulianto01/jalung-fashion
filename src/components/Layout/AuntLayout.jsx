import PropTypes from "prop-types"
import { Link } from "react-router-dom"
export const AuntLogin = ({ title, formComponent, type }) => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-sm p-6 bg-white rounded-lg border border-gray-200 shadow-md">
                <h1 className="font-bold text-2xl  text-blue-600">{title}</h1>
                <p className="font-medium text-slate-500 mb-8">Welcome, Please input your details</p>
                {formComponent}
                <p className="mt-5 text-center text-sm">
                    {type === "login" ? "Don't Have an account? " : "Already an have account? "}
                    {type === "login" && (
                        <Link to="/register" className="text-blue-500 font-bold">Register</Link>
                    )
                    }
                    {type === "register" && (
                        <Link to="/login" className="text-blue-500 font-bold">Login</Link>
                    )
                    }
                </p>
            </div>
        </div>
    )
}

AuntLogin.propTypes = {
    title: PropTypes.string.isRequired,
    formComponent: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}

