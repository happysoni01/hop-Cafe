import React from "react";
import { data } from "../restApi.json";
const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
            Meet the dedicated and talented individuals who work tirelessly behind the scenes to bring you an exceptional dining experience. From our skilled chefs crafting each dish to perfection, to our friendly staff ensuring you feel right at home, our team is committed to delivering the best in food and hospitality.
          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <a href={element.link}>
                <img src={element.image} alt={element.name} />
                <h3 >{element.name}</h3></a>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
