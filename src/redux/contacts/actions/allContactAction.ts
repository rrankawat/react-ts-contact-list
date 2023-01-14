import axios from 'axios'
import { Dispatch } from 'redux'
import { ATAllContact, ActionAllContact } from '../types/allContactTypes'

export const allContact =
  () => async (dispatch: Dispatch<ActionAllContact>) => {
    dispatch({ type: ATAllContact.ALL_CONTACT })

    try {
      const { data } = await axios.get(`/contacts?_sort=firstName`)

      dispatch({ type: ATAllContact.ALL_CONTACT_SUCCESS, payload: data })
    } catch (err: any) {
      dispatch({ type: ATAllContact.ALL_CONTACT_ERROR, payload: err.message })
    }
  }
