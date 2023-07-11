import React, { useState } from 'react';
import axios from 'axios';
import DialogConfirmation from '../dialogs/DialogConfirmation';
import { openModalDialog } from '../../redux/AppSlice';
import { useSelector , useDispatch } from 'react-redux';
const CreatProduct = () => {
  const dispatch = useDispatch()
  const baseUrl = useSelector((state) => state.Slice.baseUrl);
  const returnDialogconfirmation = useSelector((state) => state.Slice.returnDialogconfirmation);
  const isOpenDialog = useSelector((state) => state.Slice.isOpenDialog);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(openModalDialog())

if(returnDialogconfirmation && !isOpenDialog){

    try {
      const token = localStorage.getItem('token');

      // Make the API POST request with the token in the headers
      const response = await axios.post(`${baseUrl}/product/creat`, {
        title,
        description,
      }, {
        headers: {
          token: token,
        },
      });

      setTitle('');
      setDescription('');
    } catch (error) {

    }
}
// else{
//   setTitle('');
//   setDescription('');
  
// }
  };
  const msg = {
    title:"add product ", 
    div: "are you sure "
  }


  return (
    <>
    <div>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="w-full border border-gray-400 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
            Description:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            className="w-full border border-gray-400 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Product
        </button>
      </form>
    </div>
    <DialogConfirmation title="title" content='content'/>

    </>
  );
};


export default CreatProduct;



