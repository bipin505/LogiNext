import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../context/UserContext';
import { faPhone, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';

const UserProfile = ({ user }) => {
  const { openEditModal, toggleLike, confirmDelete } = useContext(UserContext);

  return (
    <div className="user-card">
      <img
        src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${user.name}`}
        alt={user.name}
      />
      <h2>{user.name}</h2>
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> {user.email}
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} /> {user.phone}
        </p>
        <p>
          <FontAwesomeIcon icon={faGlobe} /> {user.website}
        </p>

      <div className="action-buttons">
        <button onClick={() => toggleLike(user.id)}>
          <FontAwesomeIcon icon={faHeart} color={user.liked ? 'red' : 'gray'} />
        </button>
        <button onClick={() => openEditModal(user)}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button onClick={() => confirmDelete(user.id)}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
