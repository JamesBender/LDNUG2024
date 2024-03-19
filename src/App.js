import './App.css';
import { CardContainer } from './components/CardContainer';
// import { UpperLeft } from './components/UpperLeft';
// import { UpperRight } from './components/UpperRight';
// import { LowerLeft } from './components/LowerLeft';
// import { LowerRight } from './components/LowerRight';

import { UpperLeft } from './components/fixed/UpperLeft';
import { UpperRight } from './components/fixed/UpperRight';
import { LowerLeft } from './components/fixed/LowerLeft';
import { LowerRight } from './components/fixed/LowerRight';

function App() {
  return (
    <div className='App mx-4'>
      <CardContainer>
        <UpperLeft />
        <UpperRight />
        <LowerLeft />
        <LowerRight />
      </CardContainer>
    </div>
  );
}

export default App;
