import {useState} from 'react'


export const useCounter = function (auto=0){
    
    const [state, setState] = useState(auto)

    const sumar = (param) => {
        setState(state + param);
    };
    const restar = (param) => {
        setState(state - param);
    };
    const reset = () => {
        setState(auto);
    };
    return{
        state,
        sumar,
        restar,
        reset
  }
};




