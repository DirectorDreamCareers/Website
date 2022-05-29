import React from 'react'
import Image from 'next/image'

function Clients() {
  const clients = [
    {
      key: "patner_1",
      img: "/img/patner_1.png",
      width: 148,
      height: 80
    },
    {
      key: "patner_2",
      img: "/img/patner_2.png",
      width: 148,
      height: 80
    },
    {
      key: "patner_3",
      img: "/img/patner_3.png",
      width: 148,
      height: 80
    },
    {
      key: "patner_4",
      img: "/img/patner_4.png",
      width: 148,
      height: 80
    },
    {
      key: "patner_5",
      img: "/img/patner_5.png",
      width: 148,
      height: 80
    },
    {
      key: "patner_6",
      img: "/img/patner_6.png",
      width: 98,
      height: 80
    },
  ];
  return (
    <div className='py-24' style={{backgroundColor: '#e3f6f9'}}>
    <div className='px-4 mx-auto xl:max-w-6xl lg:max-w-4xl md:max-w-2xl'>
      <div className='relative px-4'>
        <div className='mb-20 text-center'>
          <h1 className='text-6xl font-semibold' style={{fontFamily: 'sans-serif', color: '#0a325a'}}>Our <span style={{color: '#f2a24f'}}>Clients</span></h1>
        </div>
      </div>
     <div className='flex justify-between'>
      {clients.map((ele)=>(
        // <Image className='h-12' src={ele.img} width={ele.width} height={ele.height} layout='intrinsic'/>
        <img key={ele.key} className='h-12' src={ele.img}/>
      ))}
     </div>
    </div>
  </div>
  )
}

export default Clients
