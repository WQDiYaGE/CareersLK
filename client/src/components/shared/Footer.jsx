import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t border-t-gray-200 py-8'>
        <div className='container mx-auto px-4'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='mb-4 md:mb-0'>
                <h2 className='text-xl font-bold'>Job Portal</h2>
                <p className='text-sm'>© 2024 CareersLK. All rights reserved.</p>
            </div>
            <div className='flex space-x-4 mt-4 md:mt-0'>
                <a href="https://facebook.com" className='hover:text-gray-400' aria-label='Facebook'>
                    <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'><path d="M22.675 0h-21.35C.604 0 0 .604 0 1.35v21.3c0 .746.604 1.35 1.325 1.35h11.512v-9.288H9.615V9.905h3.223V7.615c0-3.133 1.91-4.843 4.702-4.843 1.336 0 2.485.099 2.819.144v3.267l-1.938.001c-1.517 0-1.812.721-1.812 1.779v2.329h3.622l-.472 3.507h-3.15V24h6.18c.746 0 1.35-.604 1.35-1.35v-21.3C24 .604 23.396 0 22.675 0z" /></svg>
                </a>
                <a href="https://twitter.com" className='hover:text-gray-400' aria-label='Twitter'>
                    <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'><path d="M24 4.557c-.883.392-1.832.656-2.828.775a4.933 4.933 0 002.163-2.724 9.866 9.866 0 01-3.127 1.195A4.92 4.92 0 0016.847 3c-2.707 0-4.917 2.21-4.917 4.917 0 .385.044.76.127 1.124A13.978 13.978 0 011.671 3.15a4.917 4.917 0 001.523 6.556A4.903 4.903 0 01.964 9.71v.062a4.917 4.917 0 003.946 4.827 4.929 4.929 0 01-2.212.084 4.917 4.917 0 004.588 3.417 9.868 9.868 0 01-6.102 2.104c-.397 0-.787-.023-1.175-.068A13.933 13.933 0 007.548 21c9.142 0 14.307-7.721 14.307-14.416 0-.22-.005-.439-.014-.657A10.243 10.243 0 0024 4.557z" /></svg>
                </a>
                <a href="https://linkedin.com" className='hover:text-gray-400' aria-label='LinkedIn'>
                    <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'><path d="M22.23 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24H22.23C23.207 24 24 23.226 24 22.271V1.729C24 .774 23.207 0 22.23 0zM7.12 20.452H3.545V9.036h3.575v11.416zm-1.787-13.08a2.077 2.077 0 110-4.154 2.077 2.077 0 010 4.154zM20.452 20.452h-3.573v-5.57c0-1.326-.027-3.035-1.848-3.035-1.849 0-2.132 1.443-2.132 2.934v5.671h-3.574V9.036h3.43v1.553h.048c.478-.903 1.647-1.848 3.391-1.848 3.624 0 4.292 2.384 4.292 5.481v6.23z" /></svg>
                </a>
            </div>
            </div>
        </div>

    </footer>
  )
}

export default Footer
