import React, { useState } from 'react';
import { FaCaretDown, FaEllipsisV } from 'react-icons/fa';

const ModuleBox = ({ module, onEdit, onDelete }) => {
  const [showSubOptions, setShowSubOptions] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="flex items-center justify-between bg-white border-t border-gray-200 p-4 w-full" style={{ width: '966px', height: '56px', gap: '8px', borderRadius: '8px 0px 0px 0px', opacity: '1', border: '1px solid #EBEBEB' }}>
      <div className="flex items-center gap-4">
        <FaCaretDown 
          className="cursor-pointer" 
          onClick={() => setShowSubOptions(!showSubOptions)} 
        />
        <span>{module.name}</span>
      </div>
      <div className="relative">
        <FaEllipsisV 
          className="cursor-pointer" 
          onClick={() => setShowOptions(!showOptions)} 
        />
        {showOptions && (
          <ul className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => onEdit(module)}>Edit Module</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => onDelete(module)}>Delete Module</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default ModuleBox;
