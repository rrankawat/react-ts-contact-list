export enum ATAddContact {
  ADD_CONTACT = 'ADD_CONTACT',
  ADD_CONTACT_SUCCESS = 'ADD_CONTACTS_SUCCESS',
  ADD_CONTACT_ERROR = 'ADD_CONTACTS_ERROR',
}

export interface AddContactAction {
  type: ATAddContact.ADD_CONTACT
}

export interface AddContactSuccessAction {
  type: ATAddContact.ADD_CONTACT
  payload: string[]
}

export interface AddContactErrorAction {
  type: ATAddContact.ADD_CONTACT
  payload: string
}
