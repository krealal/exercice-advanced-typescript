type AcceptedInput = TextInput | Checkbox | Date

interface Input {
    id: "string"
    type: "text" | "checkbox" | "date"
}

interface TextInput extends Input {
    type: "text"
    value: string
}

interface Checkbox extends Input {
    type: "checkbox"
    isChecked: boolean
}

interface Date extends Input {
    type: "date"
    isToday: boolean
}



function handleInput(input: AcceptedInput): void {
    switch (input.type) {
        case "text": 
            console.log(input.type)
            break;
    
        case "checkbox":
            console.log(input.type)
            break;

        case "date":
            console.log(input.type)
            break;

        default: {
            const _exhaustiveChecking: never = input
        } 
    }
}