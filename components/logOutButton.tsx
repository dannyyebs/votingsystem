import React from 'react'
import { Button } from './ui/button'
import { signOut } from 'next-auth/react'
import { redirect, useRouter } from 'next/navigation'

const LogOutButton = () => {
  const router = useRouter()
  
  return (
   <Button onClick={()=> {
    signOut()
    router.refresh()
    redirect('/login')
  }}>Log Out</Button>
  )
}

export default LogOutButton