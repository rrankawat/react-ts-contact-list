export interface Contact {
  id?: number
  firstName: string
  lastName: string
  type: string
}

// Action Type
export enum ATAllContact {
  ALL_CONTACT = 'ALL_CONTACT',
  ALL_CONTACT_SUCCESS = 'ALL_CONTACT_SUCCESS',
  ALL_CONTACT_ERROR = 'ALL_CONTACT_ERROR',
}

// Action
interface AllContactAction {
  type: ATAllContact.ALL_CONTACT
}

interface AllContactsSuccessAction {
  type: ATAllContact.ALL_CONTACT_SUCCESS
  payload: Contact[]
}

interface AllContactsErrorAction {
  type: ATAllContact.ALL_CONTACT_ERROR
  payload: string
}

export type ActionAllContact =
  | AllContactAction
  | AllContactsSuccessAction
  | AllContactsErrorAction
