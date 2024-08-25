import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const generateRandomCardNumber = () => {
  let cardNumber = ''
  for (let i = 0; i < 16; i++) {
    if (i % 4 === 0 && i !== 0) cardNumber += ' '
    cardNumber += Math.floor(Math.random() * 10)
  }
  return cardNumber
}

const Card = () => {
  const [cardNumber, setCardNumber] = useState('1234 5678 9012 3456')

  useEffect(() => {
    const interval = setInterval(() => {
      setCardNumber(generateRandomCardNumber())
    }, 5000) // Change every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <div className="bg-gradient-to-r from-[#1E201E] to-black text-white rounded-lg p-6 w-96 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Credit Card</h2>
          <Image
            width={50}
            height={100}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1200px-Visa.svg.png"
            alt="Visa"
            className="h-8"
          />
        </div>
        <div className="mb-4">
          <p className="text-sm">Card Number</p>
          <motion.p
            key={cardNumber} // Ensures animation triggers on change
            initial={{ opacity: 0, filter: 'blur(10px)', }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.5 }}
            className="text-lg tracking-widest font-mono"
          >
            {cardNumber}
          </motion.p>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-sm">Cardholder Name</p>
            <p className="font-semibold">John Doe</p>
          </div>
          <div>
            <p className="text-sm">Expiry Date</p>
            <p className="font-semibold">12/24</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
