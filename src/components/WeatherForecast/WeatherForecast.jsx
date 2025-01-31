import './WeatherForecast.css';
import WeatherIcon from './WeatherIcon/WeatherIcon';
import WeatherData from './WeatherData/WeatherData';

const WeatherForecast = ({ forecast }) => {
    return (    
        <div className="weather">
            <WeatherData day={forecast.day} conditions={forecast.conditions} time={forecast.time} />
            <WeatherIcon img={forecast.img} imgAlt={forecast.imgAlt} />
        </div>
    )
};

export default WeatherForecast;