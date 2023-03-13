import { ChangeEvent, useState } from "react"


const InputEmail = () => {
    const [email, setEmail] = useState("")

    const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }
    return (
        <div>
            <input
                type="email"
                className="intro-x login__input form-control py-3 px-4 block mt-4"
                placeholder="Email"
                value={email}
                onChange={handleEmailInput}></input>
        </div>

    )

}

export default InputEmail