import React, { useState } from 'react';
import { FaCaretDown, FaEllipsisV } from 'react-icons/fa';

const Header = ({ onCreateModule }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto mt-4">
      <div className="bg-white p-4 flex justify-between items-center" style={{ width: '966px', height: '40px', gap: '24px', opacity: '1' }}>
        <h1 className="text-black text-xl">Course Builder</h1>
        <div className="relative">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded inline-flex items-center"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Actions <FaCaretDown className="ml-2" />
          </button>
          {showDropdown && (
            <ul className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={onCreateModule}>Create Module</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Add a Link</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Upload</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
