import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-slate-200'>
      <div className='container mx-auto p-4'>
        <p className='text-center font-bold' title="Youtube Channel">
            <Link to={"/"}>
              <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" width={50} height={50} className="rounded-full" />
            </Link>
          Welcome to GearHub! We offer the best gear for all your needs. Follow our 
          <a href="https://zalo.me/g/zysccq545" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"> Zalo Group K27 DoAn3 </a>
          for reviews, tutorials, and more.
        </p>
        <p className='text-center mt-2'>
          © 2024 GearHub. All rights reserved Đồ án 3.
        </p>
        
      </div>
    </footer>
  )
}

export default Footer
