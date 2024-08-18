import { ReactSetState } from "../types/utils";

type InputType = {
    type: 'text' | 'check' | 'color';
    inputVal: string;
    set_InputVal: ReactSetState<string>;
}

function Inputs({ type, inputVal, set_InputVal }: InputType) {
    return (
        <input
            placeholder="Things ToDo...🖊️"
            type={type}
            className='w-full p-2 rounded-md mb-2'
            value={inputVal}
            onChange={(event) => { set_InputVal(event.target.value) }} />
    )
}

export default Inputs;
