import { AppStyle } from 'components/App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import './styles.css';

export const App = () => {
  return (
    <AppStyle
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101'
    // }}
    >
      <Searchbar />
    </AppStyle>
  );
};
