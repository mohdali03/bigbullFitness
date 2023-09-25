
import Header from "./components/Header/Header.tsx";
import HeroBanner from "./components/HeroBanner/HeroBanner.tsx";
import Services from './components/Services/Services.tsx';
import Training from './components/TRAINING/Training.tsx';
// import {Button} from '@/components/ui/button.tsx'

const App = () => {
  return (
    <div>
      <div style={{backgroundImage: `url(https://lh3.googleusercontent.com/p/AF1QipPq7xSGdsZth4bdf2WmmXut5OuSvDI-S_ZBpDGX=s1360-w1360-h1020)` }}>

      <Header />
      <HeroBanner/>
      </div>
      <Services/>
      <Training/>
    </div>
  )
}

export default App