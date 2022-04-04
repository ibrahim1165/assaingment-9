import { useEffect, useState } from "react"

const useRivewData =()=>{
 const [review ,setriview]= useState([])
 useEffect(()=>{
    fetch("riview.json")
    .then(res =>res.json())
    .then(data =>setriview(data))
 },[])
 return [review ,setriview]

}
export default useRivewData;