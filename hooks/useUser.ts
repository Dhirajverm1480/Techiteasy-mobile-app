import { getUsers } from '@/api/userService';
import React, { useEffect, useState } from 'react'

export const useUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, [])

  const fetchUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  return users;
}
