import {useState, useEffect} from 'react'
import './App.css';
import {useHistory} from 'react-router-dom'

function App() {
  const[locationKeys, setLocationKeys] = useState([])
  const history = useHistory()

  useEffect(() => {
    return history.listen(location => {
      if(history.action === 'PUSH'){
        setLocationKeys([location.key])
      }
      if(history.action === 'POP'){
        if(locationKeys[1] === location.key){
          setLocationKeys(([ _, ...keys ]) => keys)
          window.onpopstate = (event) => {
            console.log(event)
          }
          //Handle forward event
        }else{
          setLocationKeys((keys) => [location.key, ...keys ])
          // Handle back event
        }
      }
    })
  }, [locationKeys])
  return (
    <div className="App">
      Hi there
    </div>
  );
}

export default App;
