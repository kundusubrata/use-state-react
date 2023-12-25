import React,{useState,useEffect} from 'react'

export const Home = () => {
    let [inputValue,setInputValue] = useState(0);
    // const changeHandler = (e) =>{
    //     inputValue = e.target.value;
    //     console.log(inputValue);
    // }

    // console.log(inputValue);
    const increment = () => {
        setInputValue(inputValue++);
    }
    const decrement = () => {
        setInputValue(inputValue--);
    }
    const btnStyle = {
        padding: 20,
        border: "2px solid rgba(0,0,0,0.8)",
        backgroundColor: "rgb(142, 142, 255)",
        margin: 10,
    }

    useEffect(() => {
      console.log("Run");
    }, [])
    
    
  return (
    <div>
        <input style={{padding:20, border: "1px solid rgba(0,0,0,0.4) "}}
        type="number"
        placeholder='Enter Something' 
        // onChange={(e) => {
        //     inputValue = e.target.value;
        //     console.log(inputValue)
        // }}
        // onChange={changeHandler}
        value={inputValue}
        readOnly
        />
        <button style={btnStyle} onClick={increment}>+</button>
        <button style={btnStyle} onClick={decrement}>-</button>
    </div>
  )
}




// import React,{useState,useEffect} from 'react'

// export const Home = () => {
//     let [inputValue,setInputValue] = useState(0);
//     console.log(inputValue);  // here you can see the value because of using useState
    
//   return (
//     <div>
//         <input style={{padding:20, border: "1px solid rgba(0,0,0,0.4) "}}
//         type="number"
//         placeholder='Enter Something'
//         value={inputValue} 
//         onChange={(e) => {
//             setInputValue(e.target.value);
//             // console.log(inputValue);
//         }}       
//         />
//     </div>
//   )
// }
