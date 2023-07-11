import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import DialogConfirmation from '../component/dialogs/DialogConfirmation'
import { useSelector  , useDispatch} from 'react-redux'
import { closeModalDialog , openModalDialog } from '../redux/AppSlice'
 function Test() {
  const dispatch = useDispatch();
  

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={() => dispatch(openModalDialog())}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>
      <DialogConfirmation msg= 'hello'/>

      </>
  )
}
export default Test