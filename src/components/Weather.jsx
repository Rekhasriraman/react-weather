import PropTypes from 'prop-types';
import './Weather.css';
import organizeWeather from '../utils/organizeWeather';
import Day from './Day';

const Weather = ({ weather }) => {
    const weatherData = organizeWeather(weather);

    return (
      
         <div className="weather-container">
      
            {weatherData.days &&
                Object.entries(weatherData.days).map(([key, value], index) => (
                    <Day key={index} day={key} dayInfo={value} />
                ))}
        </div>
    );
};

Weather.propTypes = {
    weather: PropTypes.object.isRequired
};

export default Weather;