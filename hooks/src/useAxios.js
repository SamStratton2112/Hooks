import axios from 'axios';
import {v4 as uuid} from "uuid";
import {useState} from 'react';
// have the option of additional information with a default value of empty sting 
const useAxios = (baseUrl, urlInfo='')=>{
    // genaric state and setState
    const [state, setState] = useState([]);
    // handle state update in the function that will return 
    console.log(baseUrl)
    const addState = async()=>{
        const res = await axios.get(`${baseUrl}${urlInfo}`)
        // update state to include new piece of state
        setState(oldState=>[...oldState, {...res.data, id: uuid()}])
    }
    return [state, addState];
}
 
export default useAxios;