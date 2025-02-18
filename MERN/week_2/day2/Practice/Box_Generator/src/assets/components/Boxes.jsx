import { useState } from 'react';

const Boxes = (props) => {
    const {stateUpdater} = props;

    const [boxColor, setBoxColor] = useState("blue");
    const [boxSize, setBoxSize] = useState(100);
    const [boxId, setBoxId] = useState(1);

    const createBox = (e) => {
        e.preventDefault();

        const newBox = {boxColor, boxSize, boxId};
        stateUpdater(newBox);
        setBoxColor("");
        setBoxSize("");
        setBoxId(boxId+1);
    }

    return(
        <div className="container">
            <div className="formContainer">
                <h3>Box Generator</h3>
                <form onSubmit={createBox}>
                    <label>Color</label>
                    <input type="text" value={boxColor} onChange={(e)=>{setBoxColor(e.target.value)}} />
                    <input type="text" value={boxSize} onChange={(e)=>{setBoxSize(e.target.value)}} />
                    <input type="submit" value="Add Box" />
                </form>
            </div>
        </div>
    )
} 
export default Boxes;