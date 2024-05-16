"use client"
import React from 'react'
import { Button } from './ui/button'
import { StartVote } from '@/app/actions/voting/voting'

const VoteButton = () => {
  return (
    <Button size={'lg'} className='py-6 px-24' onClick={()=> StartVote()}>
        Begin Voting
    </Button>
  )
}

export default VoteButton