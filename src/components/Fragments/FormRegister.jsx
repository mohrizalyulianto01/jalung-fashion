import { InputForm } from "../Elements/Input"
import { Button } from "../Elements/Button"
export const FormRegister = () => {
    return (
        <form action="#">
            <InputForm htmlFor="text" text="text" label="FullName" placeholder="Your Fullname" />
            <InputForm htmlFor="email" text="email" label="Email" placeholder="example@gmail.com" />
            <InputForm htmlFor="password" text="password" label="Password" placeholder="********" />
            <InputForm htmlFor="password" text="password" label="Confirm Password" placeholder="********" />
            <Button classname=" bg-red-600 w-full" />
        </form>

    )
}