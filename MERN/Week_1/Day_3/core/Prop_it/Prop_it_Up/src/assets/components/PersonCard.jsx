const PersonCard = (props) =>{

    const {firstName, lastName, age, hairColor} = props;

    return(
        <div className="PersonCard">
            <h3>Full Name</h3>
            <h4 id= "firstName , lastName" > {firstName}, {lastName}</h4>
            <h5 id="age">Age : {age} </h5>
            <h5 id="hairColor">Hair Color: {hairColor} </h5>


        </div>
    )
}

export default PersonCard