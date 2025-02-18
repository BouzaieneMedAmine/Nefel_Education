import Boxes from'./Boxes'



const BoxDisplay = (props) => {
    const {boxes} = props;
    const {deleteBox} = props;
    return (
        <div className="boxContainer">
            {
                boxes.map((b, i) => <div key={i} style={{height:`${b.boxSize}px`, width:`${b.boxSize}px`, backgroundColor: `${b.boxColor}`}}
                onClick={deleteBox} id={b.boxId}></div>)
            }
        </div>
    );
};
export default BoxDisplay;