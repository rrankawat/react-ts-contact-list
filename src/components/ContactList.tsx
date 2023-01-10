import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import ContactItem from './ContactItem'

export interface Contact {
  id: number
  firstName: string
  lastName: string
  type: string
}

const Contacts = () => {
  const [contacts, setContacts] = useState<Contact[] | undefined>([])

  const getContacts = async () => {
    const res = await axios.get(`http://localhost:5000/contacts`)
    setContacts(res.data)
  }

  useEffect(() => {
    getContacts()
  }, [])

  return (
    <>
      <div className="d-flex justify-content-between align-items-center my-5">
        <h2>
          Contact <span className="text-primary-emphasis">List</span>
        </h2>

        <Link to="/add" className="btn btn-primary d-block">
          Add New
        </Link>
      </div>

      <hr />
      {contacts?.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </>
  )
}

export default Contacts
