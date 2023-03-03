import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import ModalPic from './Components/Modal/ModalPic';
import NavBar from './Components/NavBar/NavBar';
import BlogPage from './Pages/BlogPage/BlogPage';
import BudgetPage from './Pages/BudgetPage/BudgetPage';
import CleanUpsPage from './Pages/CleanUpsPage/CleanUpsPage';
import CompanyPage from './Pages/CompanyPage/CompanyPage';
import ConstructionEnd from './Pages/ConstructionEnd/ConstructionEnd';
import ContactPage from './Pages/ContactPage/ContactPage';
import EventPage from './Pages/EventPage/EventPage';
import FurniturePage from './Pages/FurniturePage/FurniturePage';
import HomePage from './Pages/Homepage/HomePage';
import IndividualPage from './Pages/IndividualPage/IndividualPage';
import ServicePageComp from './Pages/ServiceCompanyPage/ServicePageComp';
import TipsPage from './Pages/TipsPage/TipsPage';



function App() {
  return (
    <div className="App">
      <NavBar alt='logoBlue' />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Empresa' element={< CompanyPage />} />
        <Route path='/Limpiezas' element={<CleanUpsPage />} />
        <Route path='/Blog' element={<BlogPage />}  />
        <Route path='/Contacto' element={<ContactPage />} />
        <Route path='/Presupuesto' element={<BudgetPage />} />
        <Route path='/Particulares' element={<IndividualPage />} />
        <Route path='/Fin-de-obra' element={<ConstructionEnd />} />
        <Route path='/Muebles' element={< FurniturePage />} />
        <Route path='/Servicio-empresa' element={< ServicePageComp />} />
        <Route path='/Eventos' element={< EventPage />} />
        <Route path='/Consejos' element={< TipsPage />} />
        
      </Routes>
      <Footer href='#' />
    </div>
  );
}

export default App;
