import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Header() {

    const navigate = useNavigate();

    return (
        <header className="relative w-full bg-white shadow px-6 py-4 flex items-center justify-between">
            <div className="text-xl cursor-pointer font-bold text-blue-600">
                Dashboard
            </div>

            <div className="relative">
                <button onClick={() => navigate("/profile")}
                    className="text-gray-700 cursor-pointer font-medium hover:text-blue-600"
                >
                    Profile
                </button>
            </div>
        </header>
    )
}
