import { useState } from "react"


function PersonCard({firstName, lastName, age,hairColor}){
    const[showAge, setShowAge] = useState(age)

    return(
        <div className="PersonCard">
            <h3>Full Name</h3>
            <h4 id= "firstName , lastName" > {firstName}, {lastName}</h4>
            <h5 id="age">Age : {showAge} </h5>
            <h5 id="hairColor">Hair Color: {hairColor} </h5>
            <button onClick={() =>setShowAge(showAge+1)}>Birthday Button for {firstName}, {lastName}</button>


        </div>
    )
}

export default PersonCard