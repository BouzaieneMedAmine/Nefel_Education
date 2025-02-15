import Advertisement from "./Advertisement"
import Subcontent from "./Subcontent"



function MainContent (){
    return (
        <main className="main-content">
            <div className="subcontent-container">
                <Subcontent/>
                <Subcontent/>
                <Subcontent/>
            </div>
            <Advertisement/>
        </main>
    );
}

export default MainContent