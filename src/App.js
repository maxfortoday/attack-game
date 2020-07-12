import React from 'react';
import './App.css';
import Directory from './components/directory/Directory';
import Loader from './components/loader/Loader';
 
class App extends React.Component {

    state = {
      campainName: null,
      teams: null,
      isLoading: true
    }

  componentDidMount() {
    const apiKey = "9Iaq5lP41La1PWe8XMRdRTQNTZCypPJ6NbdjHxy9"
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://i3gy725noe.execute-api.us-east-1.amazonaws.com/default/VisualizatorApi?`
    
    fetch(proxyurl + url, {
            method: 'GET',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'x-api-key': apiKey
            }
        })
        .then(res => res.json())
        .then(data => {
            this.setState({
              campainName: data.campaign_name,
              teams: data.team_instances,
              isLoading: false
            })            
          })
        .catch(error => {
          console.log(error);
        })
  }

render() {
  return (
    <div className="App">
      {
        this.state.isLoading ? <Loader/> : <Directory headername={this.state.campainName} teams={this.state.teams}/>
      }
      
    </div>
  );
}
  
}

export default App;
