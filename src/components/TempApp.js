import React, { useEffect, useState } from "react";
import "./css/style.css";
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//  ...MY appid    2fda33bc4c3826739d31a0eddcd61023
//combination..  https://api.openweathermap.org/data/2.5/weather?q=bhopal&appid=2fda33bc4c3826739d31a0eddcd61023
const TempApp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("pune");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2fda33bc4c3826739d31a0eddcd61023`
      const response = await fetch(url);
      //    console.log(response);
      const resjson = await response.json();
      ///////////////..Convert json formet
      // console.log(resjson);
      setCity(resjson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputFeild"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p className="errorMsg"> No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}°Cel </h1>
              <h3 className="tempmain_max">
                min : {city.temp_min}°Cel / max : {city.temp_max}°Cel
              </h3>
            </div>
            
          </div>
        )}
      </div>
    </>
  );
};
export default TempApp;