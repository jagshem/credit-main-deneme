import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminPanel() {
  const [contacts, setContacts] = useState([]);
  const [creditCards, setCreditCards] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/api/getContacts");
        setContacts(response.data.kisiler);
        setCreditCards(response.data.krediKartlari);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Admin Paneli</h1>
      <h2>Kişiler</h2>
      {contacts.map((contact, index) => (
        <p key={index}>
          {contact.name} {contact.surname} - {contact.phone}
        </p>
      ))}
      <h2>Kredi Kartları</h2>
      {creditCards.map((card, index) => (
        <p key={index}>
          {card.cardNumber} - {card.expiry} - {card.cvc}
        </p>
      ))}
    </div>
  );
}
