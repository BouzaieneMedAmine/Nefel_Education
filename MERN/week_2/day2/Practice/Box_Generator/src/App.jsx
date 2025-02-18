import './App.css'
import { useState } from 'react'
import  Boxes  from './assets/components/Boxes';
import  BoxDisplay  from './assets/components/BoxDisplay';

function App() {
  const [boxes, setBoxes] = useState([]);

  const stateUpdater = (newBox)=>{
    setBoxes((oldBoxes)=>[...oldBoxes, newBox]);
  }

  const deleteBox = (e) => {
    e.preventDefault();
    const filteredBoxes = boxes.filter((box, index) => {
        return box.boxId!=e.target.id;
    });
    setBoxes(filteredBoxes);
  }

  return (
    <>
      <Boxes stateUpdater={ stateUpdater }/>
      <BoxDisplay boxes={boxes} deleteBox={deleteBox} />
    </>
  )
}

export default App