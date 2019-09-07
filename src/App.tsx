import React, { useState } from 'react';
import './App.css';
import PageOne from './pages/PageOne';
import { IPageModule } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(PageOne as IPageModule)

  return (
    <div className="App">
      <currentPage.PageContent navigateToPage={setCurrentPage} />
    </div>
  );
}

export default App;
