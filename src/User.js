import React from 'react'

function User({ user }) {
    return (
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={user && user.picture} />
            <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">{user && user.firstName}</h2>
                <p className="text-gray-500">{user && user.email}</p>
            </div>
        </div>
    )
}

export default User
