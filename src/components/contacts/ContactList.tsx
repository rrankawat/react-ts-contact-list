import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTypedSelector, useTypedDispatch } from '../../redux/store'
import { allContact } from '../../redux/contacts/actions/allContactAction'
import { toast } from 'react-toastify'

import ContactItem from './ContactItem'
import Spinner from '../spinner/Spinner'

export interface IContact {
  id?: number
  firstName: string
  lastName: string
  type: string
}

const Contacts = () => {
  const dispatch = useTypedDispatch()
  const { data, error, loading } = useTypedSelector((state) => state.allContact)

  useEffect(() => {
    dispatch(allContact())
  }, [dispatch])

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
      {data?.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
      {error && toast.error(error)}
      {loading && <Spinner />}
    </>
  )
}

export default Contacts
