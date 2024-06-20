import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose, onCreate, onEdit, moduleToEdit }) => {
  const [moduleName, setModuleName] = useState('');

  useEffect(() => {
    if (moduleToEdit) {
      setModuleName(moduleToEdit.name);
    } else {
      setModuleName('');
    }
  }, [moduleToEdit]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (moduleToEdit) {
      onEdit(moduleToEdit, moduleName);
    } else {
      onCreate(moduleName);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start mt-16">
      <div className="bg-white p-6 rounded-t-2xl mt-8" style={{ width: '966px', height: '292px', padding: '24px 24px 16px 32px', gap: '16px', borderRadius: '16px 16px 0px 0px', opacity: '1' }}>
        <h2 className="text-2xl mb-4">{moduleToEdit ? 'Edit Module' : 'Create New Module'}</h2>
        <input
          type="text"
          placeholder="Module Name"
          className="border p-2 w-full mb-4"
          value={moduleName}
          onChange={(e) => setModuleName(e.target.value)}
          style={{ width: '416px', height: '84px', gap: '4px', opacity: '1' }}
        />
        <div className="flex justify-end gap-4">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={onClose}
            style={{ width: '200px', height: '40px', borderRadius: '8px' }}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
            style={{ width: '200px', height: '40px', borderRadius: '8px' }}
          >
            {moduleToEdit ? 'Update' : 'Create'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
