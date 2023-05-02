import React, { useState } from 'react'
import axios from 'axios'

const Index = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [phone, setPhone] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')

  const handleSubmit = async () => {
    try {
      await axios.post('/api/submit', {
        name: name,
        surname: surname,
        phone: phone,
        cardNumber: cardNumber,
        expiry: expiry,
        cvc: cvc,
      })
      alert('Başarıyla kaydedildi!')
    } catch (error) {
      console.error(error)
      alert('Bir hata oluştu.')
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="İsim"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Soy isim"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
      <input
        type="text"
        placeholder="Telefon Numarası"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="text"
        placeholder="Kredi Kartı Numarası"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="Son Kullanma Tarihi (MM/YY)"
        value={expiry}
        onChange={(e) => setExpiry(e.target.value)}
      />
      <input
        type="text"
        placeholder="CVC"
        value={cvc}
        onChange={(e) => setCvc(e.target.value)}
      />
      <button onClick={handleSubmit}>Gönder Booolum</button>
    </div>
  )
}

export default Index
