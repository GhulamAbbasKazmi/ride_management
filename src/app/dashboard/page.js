"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <input
        type="text"
        placeholder="Search users"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border px-4 py-2 mb-4 w-full lg:w-[450px]"
      />

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Email
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Address
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Phone
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Website
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Company
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">
                  {user.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.address.street}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.phone}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.website}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.company.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
