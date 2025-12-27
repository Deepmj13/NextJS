import {assets} from '@/assets/assets';
import React from 'react';
import Image from 'next/image';
import './commonstyle.css';

const Header = () =>{
    return(
        <>
        <div className='flex flex-col items-center justify-center w-full h-screen'>
            <Image src={assets.profile_img} className='rounded-full w-32'  alt=''/>
        </div>
                    <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 ovo'>
                Hii, I am Deep. <Image src={assets.hand_icon} className='w-6' alt='' />
            </h3>
        </>
    )
}

export default Header
