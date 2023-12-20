import React from 'react'
import CommentsDisabledIcon from '@mui/icons-material/CommentsDisabled';
export default function page() {
  return (

    <div className='my-32 flex items-center justify-center gap-x-4'>
      <CommentsDisabledIcon style={{fontSize: '4rem'}} className='text-meta-5 '   />
      <h5 className='text-4xl font-semibold text-black dark:text-white'>No Chats Selected</h5>
    </div>
  )
}
