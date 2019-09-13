import React, { useState, useReducer } from 'react';
import { addMinutes } from 'date-fns';

import './App.css';
import AlarmStarts from './pages/AlarmStarts';
import { IPageModule, IGameState, IGameStateAction } from './types';

const reducer = (state: IGameState, action: IGameStateAction) => {
  switch(action.type) {
    case 'incrementTime':
      return {
        ...state,
        timeOfDay: addMinutes(state.timeOfDay, action.payload.incrementMinutes)
      }
    default:
      return state
  }
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(AlarmStarts as IPageModule)
  const [state, dispatch] = useReducer(
    reducer,
    {
      timeOfDay: new Date(2019, 9, 13, 6, 0),
      playerName: "Samantha"
    }
  )

  return (
    <div className="App">
      <currentPage.PageContent
        navigateToPage={setCurrentPage}
        state={state}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;
