
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>

        <nav
          className=" fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-xl z-20 border-b "
        >
            <div
              className=' max-w-7xl mx-auto px-6 py-4 flex items-center justify-between '
            >
                {/* logo */}
                <Link
                  href={'/'}
                  className="flex items-center" 
                >
                  <image 
                    src="/soptt.png" 
                    alt="Spott Logo"
                    width={500}
                    height={500}
                    className="w-fulll h-11"
                    priority
                  />

                </Link>
                {/* search & location - desktop only */}
                

                {/* right side action */}

                
            </div>
            
            {/* mobile search & location - below header */}

        </nav>
        

        {/* modals */}

        
    </>
  )
}

export default Header