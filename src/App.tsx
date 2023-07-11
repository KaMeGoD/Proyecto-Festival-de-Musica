import 'normalize.css'
import './app.scss'
import { Header } from './components/Header'
import { Video } from './components/Video'
import { SobreFestival } from './components/SobreFestival'
import { LineUp } from './components/LineUp'
import { Galeria } from './components/Galeria'
import { Boleteria } from './components/Boleteria'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <Video />
      <SobreFestival />
      <LineUp />
      <Galeria />
      <Boleteria />
      <Footer />
    </>
  )
}

export default App
