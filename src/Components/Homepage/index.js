import React from "react";
import { cars } from "../../data/SampleCarResponse.json";
const HomePage = () => {
  const car = [];
  cars.forEach((ele) => car.push(ele.vehicle_details.image_url));

  console.log(car);
  return (
    <div>
      {cars.map((ele) => (
        <div className="card">
          <div className="section">
                <h4>{ele.vehicle_details.car_model}</h4>
          </div>
          <div className="img">
          <img src={ele.vehicle_details.image_url} alt="ele" />
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default HomePage;
