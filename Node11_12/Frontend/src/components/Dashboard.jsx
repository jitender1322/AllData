import React from 'react'
import Header from './Header'

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className='flex h-167'>
        <aside className="w-64 bg-white shadow-md">
          <nav className="px-4 space-y-2">
            <a href="#" className="block px-4 py-2 mt-6 rounded-lg bg-blue-100 text-blue-600 font-medium">
              Home
            </a>
            <a href="#" className="block px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100">
              Users
            </a>
            <a href="#" className="block px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100">
              Reports
            </a>
            <a href="#" className="block px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100">
              Settings
            </a>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              Overview
            </h1>
            <div className="text-gray-600">
              Welcome back 👋
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-500">Users</p>
              <h2 className="text-3xl font-bold">1,245</h2>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-500">Revenue</p>
              <h2 className="text-3xl font-bold">$8,430</h2>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-500">Orders</p>
              <h2 className="text-3xl font-bold">320</h2>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Recent Users</h2>
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-500 border-b">
                  <th className="py-2">Name</th>
                  <th>Email</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">John Doe</td>
                  <td>john@example.com</td>
                  <td className="text-green-600 font-medium">Active</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Jane Smith</td>
                  <td>jane@example.com</td>
                  <td className="text-yellow-500 font-medium">Pending</td>
                </tr>
                <tr>
                  <td className="py-2">Mike Brown</td>
                  <td>mike@example.com</td>
                  <td className="text-red-500 font-medium">Inactive</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  )
}
