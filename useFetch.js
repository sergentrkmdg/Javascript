import { useEffect, useState } from "react";

const useFetch=(url)=> {
    const[data,setData]=useState(null)
    const[error,setError]=useState(null)
    const[loading,setLoading]=useState(false)

useEffect(()=>{

setLoading(true)

fetch(url)
.then(response=>{
    return response.json()
}) .then(json=>{
    setData(json)
    setLoading(false)
}) .catch((err)=>{
    setError(err.message)
    setLoading(false)
})

},[url])

return {data,loading,error}
}
export default useFetch