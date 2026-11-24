import { useState } from "react";


export default function StateDemo() {
    const [value, setValue] = useState("John")

    const changeName = () => {
        setValue(value === "John" ? "New Value" : "John")
    }

    return (
    <div>
        <p>Value : {value}</p>

        <button onClick={() => changeName()}>Change</button>
        
    </div>
    )
}