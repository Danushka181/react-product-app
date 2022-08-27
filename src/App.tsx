import React from 'react';
import RightPanel from './components/RightPanel';
// import logo from './logo.svg'; 

const App = () => {
  return (
    <div className="main-wrapper">
      <div className="main-wrapper__inner">
        <div className="main-wrapper__inner-left">
          this is main content left panel
        </div>
        <div className="main-wrapper__inner-right">
          <RightPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
