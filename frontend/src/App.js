import Table from "./components/Table/Table";
import SearchForm from "./components/Seachbar/Searchbar"
import Home from "./Home"
import ViewIdea from "./ViewIdea";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <div className="container">
            <Link to="/" className="filler"><b>AIEarthHack 2024</b></Link>
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
            <Link to="/view-all">View All</Link>
          
          </div>
        </header>
        <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchForm />} />
          <Route path="/view-all" element={<Table />} />
          <Route path="/view-idea" element={<ViewIdea />} />
       </Routes>
        </div>
      </BrowserRouter>
    </div>
    // <Router>
    // <Navbar data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
    //   <Container>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="/">Home</Nav.Link>
    //         <Nav.Link href="/search">Search</Nav.Link>
    //         <Nav.Link href="/view-all">View All</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/search" element={<SearchForm />} />
    //     <Route path="/view-all" element={<Table />} />
    //     <Route path="/view-idea" element={<ViewIdea />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
