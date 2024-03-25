import React from 'react'

export const FlexDivs = () => {
  return (
    <>
    <p className="text-left mt-15">FEATURED</p>
    <div className="flex gap-4 m-auto mt-4">
        <div className='w-2/6'>
            <img className="w-full md:h-5/6" src="https://images.unsplash.com/photo-1588117260148-b47818741c74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG5pa2V8ZW58MHx8MHx8fDA%3D" alt="" />
            <h3 className="pt-7 font-semibold">Nike Air Max Dn Coming soon</h3>
            <p className="underline underline-offset-8 pt-5">Get Notified</p>
        </div>
        <div className='w-2/6'> 
        <img className='w-full md:h-5/6' src="https://images.unsplash.com/photo-1618453292507-4959ece6429e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fG5pa2V8ZW58MHx8MHx8fDA%3D" alt="" />
        <h3 className="pt-7 font-semibold">Retro Running Shoes</h3>
            <p className="underline underline-offset-8 pt-5">Shop</p>
        </div>
        <div className='w-2/6'>
        <img className='w-full md:h-5/6' src="https://images.squarespace-cdn.com/content/v1/5bf92b3c89c1727b3aade5ce/1552929789413-1JW0K0BWQLD02YXXCM6W/Malcom+Oliveira+Nike+Air+Max+photoshoot+full+body.jpg" alt="" />
        <h3 className="pt-7 font-semibold">From The J's Up</h3>
            <p className="pt-5 underline underline-offset-8">Shop</p>
        </div>
    </div>
    </>
  )
}
