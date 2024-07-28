import React from 'react';

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/users');
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}

export default function Home({ users }) {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}