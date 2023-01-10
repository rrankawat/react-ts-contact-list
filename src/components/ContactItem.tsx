import { Contact } from './ContactList'

interface CIProps {
  contact: Contact
}

const ContactItem: React.FC<CIProps> = ({ contact }) => {
  return (
    <div>
      {contact.firstName} {contact.lastName} ({contact.type})
      <hr />
    </div>
  )
}

export default ContactItem
