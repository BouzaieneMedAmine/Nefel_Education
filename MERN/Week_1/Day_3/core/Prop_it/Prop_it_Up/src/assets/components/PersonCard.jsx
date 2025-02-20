import React from "react";

function PersonCard(props) {
  const { firstName, lastName, age, hairColor } = props;

  return (
    <div class="card">
      <center>
        <div class="card-body">
          <h1>
            {" "}
            {firstName} {lastName}
          </h1>

          <h3>Age:{age}</h3>
          <h3>Hair Color:{hairColor}</h3>
        </div>
      </center>
    </div>
  );
}

export default PersonCard;