var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
   getInitialState: function(){
     return{
       isLoading: false
     }
   },
   handleSearch: function(location){
     var that = this;
     this.setState({
      isLoading :true,
      errorMessage:undefined
     });
     openWeatherMap.getTemp(location).then(function(temp){
       that.setState({
         location:location,
         temp:temp,
         isLoading:false
       });
     },function(errorMessage){
      that.setState({
        isLoading :false,
        errorMessage: e.message
      });
    //   alert(errorMessage);
     });
    },
    render: function(){
      var {isLoading, temp, location , errorMessage} = this.state;

      function renderMessage(){
        if(isLoading){
          return <h3 className="text-center">Getting Weather...</h3>;
        }else if (temp && location) {
          return <WeatherMessage location={location} temp={temp}/>;
        }
      }
      function renderError(){
        if(typeof errorMessage === 'string'){
          return(
            <ErrorModal message={errorMessage}/>
          )
        }
      }
      return (
        <div>
          <h3 className="text-center">Get Weather</h3>
          <WeatherForm onSearch={this.handleSearch}/>
          {renderMessage()}
          {renderError()}
        </div>
      );
    }
});

module.exports = Weather;
