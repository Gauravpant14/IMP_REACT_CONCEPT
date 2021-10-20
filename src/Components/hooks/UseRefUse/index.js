import React,{useState,useEffect,useRef} from 'react'

const UseRefUse = () => {
    const [name,setName] = useState('');
    const ref = useRef(1);
    const inputRef = useRef();
    const focus = () => {
       inputRef.current.focus();
    }
    useEffect(() => {
       ref.current = ref.current +1;
    })
    return (
        <div className="container">
            <h2>UseRef Use</h2>
            <input value={name} onChange={(e)=> setName(e.target.value)} ref={inputRef}/>
            <button onClick={focus}>Focus</button>
            <h3>I rendered {ref.current} times</h3>

        </div>
    )
}

export default UseRefUse
