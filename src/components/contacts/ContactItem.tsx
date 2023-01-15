import { useNavigate } from 'react-router-dom'

import { IContact } from './ContactList'

interface CIProps {
  contact: IContact
}

const ContactItem: React.FC<CIProps> = ({ contact }) => {
  const history = useNavigate()

  return (
    <div
      onDoubleClick={() => history(`/edit/${contact.id}`)}
      style={{ cursor: 'pointer' }}
    >
      {contact.firstName} {contact.lastName} ({contact.type})
      <hr />
    </div>
  )
}

export default ContactItem
