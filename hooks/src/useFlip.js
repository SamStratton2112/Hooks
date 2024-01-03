import {useState} from 'react';

const useFlip = ()=>{
    const [state, setState] = useState();
    const toggleState = ()=>{
        setState(state=>!state);
    }

    return [state, toggleState]
}

export default useFlip;