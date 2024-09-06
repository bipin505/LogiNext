import React, { useContext } from 'react';
import { UserContext } from './context/UserContext';
import UserProfile from './components/UserProfile';
import LoadingSpinner from './components/LoadingSpinner';
import EditModal from './components/EditModal';
import DeleteConfirmationModal from './components/DeleteConfirmationModal';
import './App.css'

const App = () => {
  const { users, loading } = useContext(UserContext);

  return (
      <div className="App">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="user-list">
            {users.map(user => (
              <UserProfile key={user.id} user={user} />
            ))}
          </div>
        )}
        <EditModal />
        <DeleteConfirmationModal />
      </div>
  );
};

export default App;
