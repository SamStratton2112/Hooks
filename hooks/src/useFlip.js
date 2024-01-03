import {useState} from 'react';

const useFlip = ()=>{
    // genaric state and setState
    const [state, setState] = useState();
    // create function to toggle state and pass it as alrering function on return
    const toggleState = ()=>{
        // set state to opposit of current state
        setState(state=>!state);
    }
    return [state, toggleState]
}
export default useFlip;