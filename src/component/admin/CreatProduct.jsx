import React, { useState } from 'react';
import axios from 'axios';
import DialogConfirmation from '../dialogs/DialogConfirmation';

import { useSelector } from 'react-redux';
const CreatProduct = () => {
  const baseUrl = useSelector((state) => state.Slice.baseUrl);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showDialog, setShowDialog] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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

      // Handle the response as needed

      // Reset the form
      setTitle('');
      setDescription('');
      setShowDialog(true);

    } catch (error) {
      // Handle the error
    }
  };


  return (
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
  );
};


export default CreatProduct;



