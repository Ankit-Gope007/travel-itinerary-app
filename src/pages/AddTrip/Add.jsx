import React from 'react'
import Header from './components/Header'
import useUserStore from '../../store/User.Store'
import Form from './components/Form'
import Footer from '../Home/components/Footer'

const Add = () => {
  const {theme} = useUserStore()
  return (
    <div className={`min-h-screen w-full max-w-screen  overflow-x-hidden transition-all duration-300 ${theme=="dark"?"bg-gradient-to-b from-[#1a1a1a] to-[#000000] text-white":"bg-white"}`}>
      <Header theme={theme} />
      <Form theme={theme} />
     
    </div>
  )
}

export default Add