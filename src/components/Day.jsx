import PropTypes from 'prop-types';
import './Day.css';
import Hour from './Hour';

const Day = ({day, dayInfo}) => {
    return (
        <div>
            <div className='day-container'>
            <div className='day'>Day : {day}</div>
            </div>
        {dayInfo.map((hour, index) => (
            <Hour key={index} hour={hour} />
        ))}
        </div>
    );
        };
   
        Day.propTypes = {
            day: PropTypes.string.isRequired,
            dayInfo: PropTypes.array.isRequired
        };

        export default Day;
