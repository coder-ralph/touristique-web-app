import React, { useState } from 'react'

const ScrollButton = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if(scrolled > 200){
      setVisible(true)
    }else{
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  window.addEventListener('scroll', toggleVisible);

  const scrollStyle = {
    position: 'fixed',
    right: '10px',
    bottom: '5px',
    fontSize: '2.5rem',
    zIndex: 99,
    cursor: 'pointer',
    color: '#7f71ff',
    display: visible ? 'inline' : 'none'
  }

  return (
    <div style={scrollStyle} onClick={scrollToTop}>
      <i className='fa-solid fa-circle-up'></i>
    </div>
  )
}

export default ScrollButton
