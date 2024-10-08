import { InputForm } from "../Elements/Input"
import { Button } from "../Elements/Button"
export const FormLogin = () => {
    return (
        <form action="#">
            <InputForm htmlFor="email" text="email" label="Email" placeholder="example@gmail.com" />
            <InputForm htmlFor="password" text="password" label="Password" placeholder="********" />
            <Button classname=" bg-blue-600 w-full" />
            {/* <p className="mt-5 text-center text-sm">Dont have an account? <Link to="/register" className="text-blue-500 font-bold">Register</Link></p> */}
        </form>

    )
}