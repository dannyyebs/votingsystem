import React from 'react'
import { Button } from './ui/button'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const LogOutButton = () => {
  const router = useRouter()
  
  return (
   <Button onClick={()=> {
    
    signOut()
    router.push("/login")
  }}>Log Out</Button>
  )
}

export default LogOutButton