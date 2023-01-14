export enum ATDeleteContact {
  DELETE_CONTACT = 'DELETE_CONTACT',
  DELETE_CONTACT_SUCCESS = 'DELETE_CONTACT_SUCCESS',
  DELETE_CONTACT_ERROR = 'DELETE_CONTACT_ERROR',
}

export interface DeleteContactAction {
  type: ATDeleteContact.DELETE_CONTACT
}

export interface DeleteContactSuccessAction {
  type: ATDeleteContact.DELETE_CONTACT
  payload: string[]
}

export interface DeleteContactErrorAction {
  type: ATDeleteContact.DELETE_CONTACT
  payload: string
}
