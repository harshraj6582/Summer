import React, { useState } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import ModuleBox from './components/ModuleBox';
import centerSVG from './center.svg';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modules, setModules] = useState([]);
  const [moduleToEdit, setModuleToEdit] = useState(null);

  const handleCreateModule = () => {
    setModuleToEdit(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCreate = (moduleName) => {
    setModules([...modules, { name: moduleName }]);
    setIsModalOpen(false);
  };

  const handleEdit = (module, newName) => {
    setModules(modules.map(m => m === module ? { ...m, name: newName } : m));
    setIsModalOpen(false);
  };

  const handleEditModule = (module) => {
    setModuleToEdit(module);
    setIsModalOpen(true);
  };

  const handleDeleteModule = (module) => {
    setModules(modules.filter(m => m !== module));
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      <Header onCreateModule={handleCreateModule} />
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onCreate={handleCreate} 
        onEdit={handleEdit} 
        moduleToEdit={moduleToEdit} 
      />
      <div className="flex flex-col items-center mt-4 w-full max-w-4xl" style={{ marginTop: '113px', gap: '80px', opacity: '1' }}>
        <div className="w-full" style={{ border: '1px solid #EBEBEB' }}>
          {modules.map((module, index) => (
            <ModuleBox 
              key={index} 
              module={module} 
              onEdit={handleEditModule} 
              onDelete={handleDeleteModule} 
            />
          ))}
        </div>
        <img src={centerSVG} alt="Center SVG" style={{ width: '560px', height: '264px', marginTop: '327.54px', gap: '16px', opacity: '1' }} />
      </div>
    </div>
  );
}

export default App;
