import React, { useState } from 'react';
import './App.css';
import AlarmStarts from './pages/AlarmStarts';
import { IPageModule } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(AlarmStarts as IPageModule)

  return (
    <div className="App">
      <currentPage.PageContent navigateToPage={setCurrentPage} />
    </div>
  );
}

export default App;
