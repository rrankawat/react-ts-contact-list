import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

import { Contact } from './ContactList'

const AddContact = () => {
  const history = useNavigate()
  const { id } = useParams()
  const [contact, setContact] = useState<Contact>({
    firstName: '',
    lastName: '',
    type: '',
  })

  const getContact = async (id: string) => {
    const res = await axios.get(`http://localhost:5000/contacts/${id}`)
    setContact(res?.data)
  }

  useEffect(() => {
    if (id) {
      getContact(id)
    }
  }, [id])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact((preState) => ({ ...preState, [e.target.name]: e.target.value }))
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const url = id
      ? `http://localhost:5000/contacts/${id}`
      : `http://localhost:5000/contacts`

    const config = {
      headers: {
        'Contact-Type': 'application/json',
      },
    }

    if (contact.firstName && contact.lastName && contact.type) {
      const res = id
        ? await axios.put(url, contact, config)
        : await axios.post(url, contact, config)

      if (res?.status === 201 || res?.status === 200) {
        history('/')
      }
    }
  }

  const onDelete = async () => {
    if (id) {
      await axios.delete(`http://localhost:5000/contacts/${id}`)
      history('/')
    }
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center my-5">
        <h2>
          Add <span className="text-primary-emphasis">New</span>
        </h2>

        <div className="d-flex">
          <Link to="/" className="btn btn-secondary d-block">
            Back
          </Link>
          {id && (
            <button className="btn btn-danger mx-3" onClick={onDelete}>
              <i className="fa-solid fa-trash"></i>
            </button>
          )}
        </div>
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
          <input
            type="submit"
            value={id ? 'Update' : 'Submit'}
            className="btn btn-success"
          />
        </div>
      </form>
    </>
  )
}

export default AddContact
