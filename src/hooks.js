import { useState } from "react";
export function useFormInput (initalValue){
    const [value, setValue] = useState(initalValue);

    function handleChange(e){
        setValue(e.target.value);
    }

    return{
        value,
        onChange : handleChange
    }
}