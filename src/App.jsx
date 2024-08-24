
import Header from './components/Header'
import Category from './components/Category'
import Restro from './components/Restro'
import OnlineDel from './components/OnlineDel'
import Best from './components/Best'
import Footer from './components/Footer'
import MobileSize from './Hooks/MobileSize'
import MobileCat from './components/MobileCat'
import DelCard from './components/DelCard'




function App() {
 const isMobile = MobileSize()
 

  return (
    <>
    
 
     <div className={`${isMobile ? 'hidden' : ''}`}>
    <Category /> 
     <Restro />
     <OnlineDel />
     <Best />
 
  * </div> 
    
    <div className='p-4 lg:hidden'>
      <MobileCat />
      <Restro />
      <OnlineDel />
    </div>
    
    </>
  )
}

export default App
