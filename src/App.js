
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Result";
import './App.css';
import { useState } from "react";
import Loading from "./components/Loading"; 
import axios from "axios";


function App(){ 
  const [loading, setLoading] = useState(false);
  const [city, setCity]= useState("");
  const [results, setResults] = useState({

    country: "",
    cityName: "",
    temperatue: "",
    conditionText: "",
    icon: ""

  });
  const getWeather = (e) => {
    setLoading(true);
      e.preventDefault();
      axios.get(`https://api.weatherapi.com/v1/current.json?key=6883513188dd4b2c847120159221807&q=${city}&aqi=no`)
           .then(res => {
            setResults({
                country: res.data.location.country,
                cityName: res.data.location.name,
                temperature: res.data.current.temp_c,
                conditionText: res.data.current.condition.text,
                icon: res.data.current.condition.icon
               
            })
            setCity("");
            setLoading(false);
           })
           .catch( err => alert("エラーが発生しました。もう一度トライしてください"));
  }
  return(
    <div className="wrapper">
      <div className="container">
        <Title/>
        <Form setCity={setCity} getWeather={getWeather}  city={city}/>
        {loading ? <Loading/> : <Results results={results}/>}


        
      </div>

    </div>
  );
}
export default App;

