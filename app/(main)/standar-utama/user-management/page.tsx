import Link from 'next/link';
import React from 'react'

interface User {
    id: number;
    name: string;

}

const UserManagement = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache : 'no-store'});
  const users: User[] = await res.json();

  return (
    <>
    <h1>Users</h1>
    <p>{new Date().toLocaleDateString()} - {new Date().toLocaleTimeString()}</p>
    <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
    <Link href="/">Kembali ke Halaman Utama</Link>
    </>
  )
}

export default UserManagement