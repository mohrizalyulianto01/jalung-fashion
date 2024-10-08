import { AuntLogin } from "../components/Layout/AuntLayout"
import { FormRegister } from "../components/Fragments/FormRegister"
export const Register = () => {
    return (
        <AuntLogin title="Register" type="register" formComponent={<FormRegister />} />
    )
}