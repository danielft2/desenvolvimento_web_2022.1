import { useState } from 'react';
import { NavBarVeri } from './components/navbar/NavBar';
import { Routers } from './routers/Routers'

import FirebaseContext from './utils/FirebaseContext';

export const AppPage = () => {
  return (
    <FirebaseContext.Consumer>
      {(firebase) => <App firebase={firebase} />}
    </FirebaseContext.Consumer>
  )
}

function App({ firebase }) {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      <NavBarVeri isLogged={isLogged} firebase={firebase} setIsLogged={setIsLogged}/>
      <div className='container-fluid container-reset mt-4'>
        <Routers isLogged={isLogged} setIsLogged={setIsLogged} />
      </div>
    </>

  )
}

