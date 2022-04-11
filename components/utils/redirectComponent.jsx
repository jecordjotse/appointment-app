import {useRouter} from 'next/router'
import React, { useEffect } from 'react'

const RedirectComponent = ({url}) => {
    const router = useRouter()

    useEffect(()=>{
        if(window)
            router.push(url)
            // eslint-disable-next-line
    },[])

  return (
  <></>
  )
}

export default RedirectComponent