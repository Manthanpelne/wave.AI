import React from 'react'

export const Footer = () => {
  return (
    <div className=' md:flex mt-15 justify-between bg-white text-black'>
        <div className="md:flex p-7 gap-7 text-left">
            <div className='mr-7'>
                <p className='text-[12px]'>FIND A STORE</p>
                <p className='text-[12px]'>bECOME A MEMBER</p>
                <p className='text-[12px]'>sEND US FEEDBACK</p>
            </div>
            <div className=''>
                <p  className='text-[14px]'>HELP</p>
                <p className='text-[12px]'>Get Help</p>
                <p className='text-[12px]'>Order Status</p>
                <p className='text-[12px]'>Delivery</p>
                <p className='text-[12px]'>Returns</p>
                <p className='text-[12px]'>Payment Options</p>
                <p className='text-[12px]'>Contact us on Nike.com</p>
                <p className='text-[12px]'>Inquires</p>
            </div>
            <div>
                <p className='text-[14px]'>COMPANY</p>
                <p className='text-[12px]'>Delivery</p>
                <p className='text-[12px]'>Returns</p>
                <p className='text-[12px]'>Payment Options</p>
                <p className='text-[12px]'>Inquires</p>
            </div>
        </div>

        <div className="md:flex gap-7 p-7 text-3xl text-gray-700">
        <span className='cursor-pointer'>
        <ion-icon name="logo-twitter"></ion-icon>
        </span>
        <span className="cursor-pointer">
        <ion-icon name="logo-facebook"></ion-icon>
        </span>
        <span className="cursor-pointer">
        <ion-icon name="logo-youtube"></ion-icon>
        </span>
        </div>
    </div>
  )
}
