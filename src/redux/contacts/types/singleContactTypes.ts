export enum ATSingleContact {
  SINGLE_CONTACT = 'SINGLE_CONTACT',
  SINGLE_CONTACT_SUCCESS = 'SINGLE_CONTACT_SUCCESS',
  SINGLE_CONTACT_ERROR = 'SINGLE_CONTACT_ERROR',
}

export interface SingleContactAction {
  type: ATSingleContact.SINGLE_CONTACT
}

export interface SingleContactSuccessAction {
  type: ATSingleContact.SINGLE_CONTACT_SUCCESS
  payload: string[]
}

export interface SingleContactErrorAction {
  type: ATSingleContact.SINGLE_CONTACT_ERROR
  payload: string
}
