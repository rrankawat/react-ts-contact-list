import {
  ATAllContact,
  ActionAllContact,
  Contact,
} from '../types/allContactTypes'

interface AllContactState {
  loading: boolean
  error: string | null
  data: Contact[]
}

const initialState = {
  loading: false,
  error: null,
  data: [],
}

const reducer = (
  state: AllContactState = initialState,
  action: ActionAllContact
) => {
  switch (action.type) {
    case ATAllContact.ALL_CONTACT:
      return { loading: true, error: null, data: [] }
    case ATAllContact.ALL_CONTACT_SUCCESS:
      return { loading: false, error: null, data: action.payload }
    case ATAllContact.ALL_CONTACT_ERROR:
      return { loading: false, error: action.payload, data: [] }
    default:
      return state
  }
}

export default reducer
