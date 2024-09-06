import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import './DeleteConfirmationModal.css';
const DeleteConfirmationModal = () => {
  const { deleteUserById, deleteUser } = useContext(UserContext);

  if (!deleteUser) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Are you sure you want to delete this user?</h2>
        <button onClick={deleteUserById}>Yes</button>
        <button onClick={() => deleteUser(null)}>No</button>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
