import React, { useState } from 'react';
import useFetchUsers from './useFetchUsers'
import User from './User'




const App = () => {
  //destructuring data available from fetchusers hook
  const { users, loading, error } = useFetchUsers();
  // setting state for search bar
  const [searchValue, setSearchValue] = useState("");


  return (
    <div className="App">
      <section className="text-gray-600 body-font">
        {/*handling errar and loading */}
        {loading && <h1>Loading</h1>}
        {error && <h1> Error...Try Refreshing</h1>}
        {/*using tailwind for styling the webpage */}
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Dummy API</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Here is the List Of the Users Displayed.</p>
          </div>
          <div className="flex flex-col text-center w-full mb-20">
            <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-4 space-y-4 sm:px-0 items">
              <div className="relative flex-grow ">
                <label className="leading-7 text-lg text-gray-600">Search</label>
                {/*input field */}
                <input type="text" id="search" name="search"
                  placeholder="Search"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(event) => {
                    setSearchValue(event.target.value)
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -m-2">
            {/*using filter for search br functionality and map  to loop through array */}
            {users.filter((user) => {
              if (searchValue === "") {
                return user;
              } else if (user.firstName.toLowerCase().includes(searchValue.toLowerCase())) {
                return user;
              }
            }).map(user => {
              return (
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                  {/*providing props to User Component */}
                  <User key={user.id} user={user} />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  );
};



export default App;
