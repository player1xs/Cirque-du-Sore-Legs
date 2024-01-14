import {Outlet, useNavigation } from 'react-router-dom'

// custom
import Nav from './components/Nav'
import Loading from './images/ostrich_animation.gif'

function App() {
  const navigation = useNavigation()
  return (
    <>
      <Nav />
      <main>
        {
          navigation.state === 'idle' ?
          <Outlet />
          :
          <div className='centred'>
            <img src={Loading} alt="spinner" style={{width: '20rem' }} className="spinner"/>
          </div>
        }
      </main>
      
    </>
  )
}

export default App
