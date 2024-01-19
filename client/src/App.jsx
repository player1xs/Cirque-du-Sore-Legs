import {Outlet, useNavigation } from 'react-router-dom'

// custom
import Nav from './components/Nav'
import Loading from './images/ostrich_animation.gif'
import AdColumn from './components/AdColumn'

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
            <img src={Loading} alt="spinner" style={{width: '20rem' }} className="center spinner"/>
          </div>
        }
      </main>
      <AdColumn />
    </>
  )
}

export default App
