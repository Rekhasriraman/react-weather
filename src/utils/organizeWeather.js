const organizeWeather = (weatherData) => {
  const {
    elevation,
    latitude,
    longitude,
    timezone,
    hourly: { temperature_2m, time }
  } = weatherData;

  const days = time.reduce((result, hour, index) => {
    const now = new Date(hour);
    const day = now.getDate();
    const formattedHour = `${now.getHours().toString().padStart(2, '0')} : ${now.getMinutes().toString().padStart(2, '0')}`;
    const formattedTemp = `${temperature_2m[index].toFixed(1)}°C`;

    let up = 'no';
    if (index > 0) {
      up = temperature_2m[index] > temperature_2m[index - 1] ? 'up' : temperature_2m[index] < temperature_2m[index - 1] ? 'down' : 'same';
    }

    const hourAndTemp = {
      hour: formattedHour,
      temp: formattedTemp,
      up: up
    };

    if (!result[day]) {
      result[day] = [];
    }
    result[day].push(hourAndTemp);

    return result;
  }, {});

  return {
    elevation,
    latitude,
    longitude,
    timezone,
    days
  };
};

export default organizeWeather;