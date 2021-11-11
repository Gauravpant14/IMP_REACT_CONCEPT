import React from "react";
import { carsdetail } from "../../data/SampleCarResponse.json";
const HomePage = () => {
  const car = [];
  // carsdetail.forEach((ele) => car.push(ele.vehicle_details.image_url));
  const cheapCars = carsdetail
    ?.filter((res) => res.type === "R")[0]
    .cars.map((e) => e)
    .map((item) => {
      return {
        car_size: item.vehicle_details.car_size,
        car_type: item.vehicle_details.car_type.value,
      };
    })

  console.log(cheapCars);
  return (
    <div>
      {/* {cars.map((ele) => (
        <div className="card">
          <div className="section">
                <h4>{ele.vehicle_details.car_model}</h4>
          </div>
          <div className="img">
          <img src={ele.vehicle_details.image_url} alt="ele" />
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default HomePage;
