import React from 'react'
import Top from '../helper/Top'
import Header from '../helper/Header'

const Navbar = () => {
  return (
    <header className="w-full">
      {/* Top Bar - visible on sm and above */}
      <div className="hidden sm:block">
        <Top />
      </div>

      {/* Main Header - always visible */}
      <Header />
    </header>
  )
}

export default Navbar
