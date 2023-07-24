
import AppHeader from './components/templates/header/AppHeader';
import AppFooter from './components/templates/footer/AppFooter';
import '../src/components/templates/header/appHeader.css'
import PropTypes from 'prop-types';


const AppLayout = ({ children }) => {
  return(
    <div className="app-layout">
      <AppHeader />
      { children }
      <AppFooter />
    </div>
  )
}


AppLayout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default AppLayout;