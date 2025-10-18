import Image from "next/image";

let myCss = {
  fontSize:99,color:'red'
}

export default function Header(){ 
  return (
   <>
   <p style = {myCss}> this is header </p>
   </>
  );
}