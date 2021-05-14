import { PrismaClient } from '@prisma/client'
 
const prisma = new PrismaClient()

export default async (req, res) => {
    //res.status(200).json({ name: 'John Doe' })
    const contacts = await prisma.contact.findMany();
    console.log(contacts)
    res.status(200).json(contacts)

  }
