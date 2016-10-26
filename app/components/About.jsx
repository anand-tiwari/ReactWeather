var React = require('react');

var About = (props) => {
  return (
    <div>
      <h3 className="text-center">About component !</h3>
      <p>
        This is weather application build using Reactjs. I have build this for learning .
      </p>
      <p>
        Here are some tools that i used :
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the Javascript framework uesd.
        </li>
        <li>
        <a href="https://openweathermap.org">React</a> - I used Open Weather Map to search for weather data by city name.
        </li>
      </ul>
    </div>
  );
}
module.exports = About;
