import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import ProfileCard from './Components/ProfileCard/ProfileCard';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Footer/>
      <ProfileCard contact="03122055123" />
      <ProfileCard name="Abdullah Javed" age="24" />
      <ProfileCard name="Haris" jobDescription="Ui/UX Designer" email= "Haris32@gmail.com"/>
    </div>
  );
}

export default App;
