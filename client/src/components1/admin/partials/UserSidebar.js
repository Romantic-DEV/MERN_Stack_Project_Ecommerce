import React,{Fragment} from 'react';

const UserSidebar = (props) => {
  return (
    <Fragment>
    	<div style={{boxShadow: '1px 1px 8px 0.2px #aaaaaa'}} id="sidebar" className="hidden md:block sticky top-0 left-0 h-screen md:w-2/12 sidebarShadow bg-white text-gray-600">
        <div className="hover:bg-gray-200 cursor-pointer flex flex-col items-center justify-center border-l-4 border-gray-800 py-6">
          <span><svg className="w-8 h-8 text-gray-600 hover:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></span>
          <span className="hover:text-gray-800">Dashboard</span>
        </div>
        <hr className="border-b border-gray-200" />
        <div className="hover:bg-gray-200 cursor-pointer flex flex-col items-center justify-center border-b py-6">
          <span><svg className="w-8 h-8 text-gray-600 hover:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg></span>
          <span className="hover:text-gray-800">Order</span>
        </div>
        <div className="hover:bg-gray-200 cursor-pointer flex flex-col items-center justify-center border-b py-6">
          <span><svg className="w-8 h-8 text-gray-600 hover:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg></span>
          <span className="hover:text-gray-800">Profile</span>
        </div>
      </div>
    </Fragment>
  )
}

export default UserSidebar;