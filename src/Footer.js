import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <p>Copy right &copy; {year}</p>
  )
}

export default Footer