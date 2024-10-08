import { AuntLogin } from "../components/Layout/AuntLayout"
import { FormLogin } from "../components/Fragments/FormLogin"
export const Login = () => {
    return (
        <AuntLogin title="Login"  type= "login" formComponent={<FormLogin />} />
    )
}