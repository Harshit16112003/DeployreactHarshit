// import logo from './logo.svg';
// import './App.css';
// import Newcom from './components/Newcom';

// import Aboutpage from './pages/About';
// import Home from './pages/Home';
// import Contact from './pages/Contact';
// import Blogs from './pages/Blogs';
// import NoPage from './pages/Nopages';

// function App() {
//   // const x=5;
//   // let text= "Goodbye";
//   // if( x<10){
//   //   text="Hello Harshit";
//   // }
//   // const myElement= <h1>{text}</h1>
//   return (
//     // When we using the html code inside the java script code ir could be called XML file
//     <> 
//     <Newcom> Hello</Newcom>
    
//     </>
//     // By usig this curly braces we can write the java script code inside the html tag
//     // This is the method how can we run react application on this platform
//   );
// }

// export default App;
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Nopages from "./pages/Nopages";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Nopages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

