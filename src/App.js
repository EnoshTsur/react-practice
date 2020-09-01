import React from 'react';
import Home from './components/Home/Home'
import Signup from './components/Signup/Signup'
import { Context, } from './context/context'


function App() {

  // state
  const [username, setUsername,] = React.useState()

  React.useEffect(() => {

    const name = localStorage.getItem('username')

    if(name) {
      setUsername(name)
    }

  }, [])

  return (
    <>
      <Context.Provider value={({ username, setUsername })}>
        <Home />
        {!username && <Signup />}
      </Context.Provider>
    </>
  );
}

export default App;
