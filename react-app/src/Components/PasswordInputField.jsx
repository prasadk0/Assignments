import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
export default function PasswordInputField() {
    const [inputType, setInputType] = useState("password")
    return (
        <>
            <input style={{ border: "1px solid grey" }} type={inputType} />
            {<FontAwesomeIcon onClick={() => { inputType === "password" ? setInputType("text") : setInputType("password") }} icon={inputType === "password" ? faEyeSlash : faEye} />
            }
        </>
    )
}