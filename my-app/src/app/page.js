'use client'
import Image from "next/image";
import Header from './components/Header';
import {useState} from 'react';

// let myCss = {
//   fontSize:99,color:'red'
// }

// function Header(){ 
//   return (
//    <>
//    <p style = {myCss}> this is header </p>
//    </>
//   );
// }
{/* <dev>{count}</dev> */}
function Counter (props){
  const [count,setCount] = useState(props.initCount)
  return(
    
    <div>
      <p>Count = {count}</p>
      <button type='button' onClick={()=> setCount(count+1)}>Increase</button>
      <button type='button' onClick={()=> setCount(count-1)}>Decrease</button>
      <button type='button' onClick={()=> setCount(count==0)}>Reset</button>
    </div>
  );
}

function Footer(){
  return (
   <div>
   <p> this is footer </p>
   </div>
  );
}

 export default function Home() {
  return (
    <div>
      <Header />
      <Counter initCount={10} />
      <Counter initCount={-10} />
      <p>my name is gap</p>
      <Footer />
   </div>
  )}