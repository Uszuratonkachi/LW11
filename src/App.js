import './css/App.css';
import 'https://kit.fontawesome.com/5b219f8c6d.js';
import Header from "./components/Header";
import Search from "./components/Search";
import Main_parent from "./components/Main_parent";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
        <Header />
        <Search />
        <Main_parent />
        <Footer />
    </div>
  );
}

export default App;