import React, { useEffect, useState } from 'react'

import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState({})
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/sumit588").then((res) => res.json()).then((res) => setData(res))
    // }, [])
    
   const data = useLoaderData();
    
  return (
    <div>
      <h2 className = "bg-gray-700 text-white m-4 text-center p-4">Github followers : {data.followers}</h2>
    </div>
  )
}

export default Github

export const getGitData = async () => {
    const res = await fetch("https://api.github.com/users/sumit588");
    return res.json()
}
