import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import { Contact } from './ContactList'

const AddContact = () => {
  const history = useNavigate()
  const [contact, setContact] = useState<Contact>({
    firstName: '',
    lastName: '',
    type: '',
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact((preState) => ({ ...preState, [e.target.name]: e.target.value }))
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const config = {
      headers: {
        'Contact-Type': 'application/json',
      },
    }

    if (contact.firstName && contact.lastName && contact.type) {
      const res = await axios.post(
        `http://localhost:5000/contacts`,
        contact,
        config
      )

      if (res?.status === 201) {
        history('/')
      }
    }
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center my-5">
        <h2>
          Add <span className="text-primary-emphasis">New</span>
        </h2>

        <Link to="/" className="btn btn-danger d-block">
          Back
        </Link>
      </div>

      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            value={contact.firstName}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            value={contact.lastName}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="type">Contact Type</label>
          <input
            type="text"
            name="type"
            className="form-control"
            value={contact.type}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <input type="submit" value="Submit" className="btn btn-success" />
        </div>
      </form>
    </>
  )
}

export default AddContact
