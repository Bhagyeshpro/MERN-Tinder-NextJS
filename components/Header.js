import React from 'react'
import Image from 'next/image';
// or
import { IconButton } from '@mui/material';
import { Person, Forum } from "@mui/icons-material"

function Header() {
  return (
    <div className="py-2">
      <div className='flex justify-between h-14 px-3'>
        <IconButton>
          <Person fontSize='large' />
        </IconButton>
        <div className='relative w-32 cursor-pointer p-3 pb-2'>
          <Image
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiG9f_TYqjcvC2S6H364flWj9VozSW8ybAFQOxXM_kMFbqgrje8bmiQRjLAz_Mh5MjSe8U3HvXSOCkPggILVUf7aJ1GgykAydLFMTNocSUH3Mt3TmJIkiLNef7_kiVuNewhgvGtNYpRRLQ8niXPCtXYdkM3znivi724cu6wAZzv_70vU0bCorTsaVuK/s320/logoTinder.png"
            layout='fill'
            objectFit='contain'
          />
        </div>

        <IconButton>
          <Forum fontSize="large" />
        </IconButton>
      </div>
    </div>
  )
}

export default Header