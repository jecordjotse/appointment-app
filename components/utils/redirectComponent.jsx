import {useRouter} from 'next/router'
import React, { useEffect } from 'react'

const RedirectComponent = ({url}) => {
    const router = useRouter()

    useEffect(()=>{
        if(window)
            router.push(url)
    },[])

  return (
  <></>
  )
}

export default RedirectComponent