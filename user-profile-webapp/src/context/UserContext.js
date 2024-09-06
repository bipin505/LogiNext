import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingUser, setEditingUser] = useState(null);
  const [deleteUser, setDeleteUser] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        const userData = response.data.map(user => ({ ...user, liked: false }));
        setUsers(userData);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const openEditModal = (user) => setEditingUser(user);

  const saveEditUser = (updatedUser) => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
    setEditingUser(null);
  };

  const toggleLike = (id) => {
    setUsers(users.map(user => user.id === id ? { ...user, liked: !user.liked } : user));
  };

  const confirmDelete = (id) => setDeleteUser(id);

  const deleteUserById = () => {
    setUsers(users.filter(user => user.id !== deleteUser));
    setDeleteUser(null);
  };

  return (
    <UserContext.Provider
      value={{ users, loading, editingUser, openEditModal, saveEditUser, toggleLike, confirmDelete, deleteUserById, deleteUser ,setEditingUser}}
    >
      {children}
    </UserContext.Provider>
  );
};
