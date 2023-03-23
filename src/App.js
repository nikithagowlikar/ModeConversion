// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
function App() {
  return (
    <>
<Navbar title="TextUtensils"  about="textabout"/>
<div className="container my-3">
{/* <TextForm heading="enter text here..."></TextForm> */}
<About/>

</div>

    </>
  );
}

export default App;
