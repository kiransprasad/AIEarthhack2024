import Table from "./components/Table/Table";
import SearchForm from "./components/Seachbar/Searchbar"
import Home from "./Home"
import ViewIdea from "./ViewIdea";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './index.css';

function App() {
  return (
    <Router>
    <Navbar data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
            <Nav.Link href="/view-all">View All</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchForm />} />
        <Route path="/view-all" element={<Table />} />
        <Route path="/view-idea" element={<ViewIdea />} />
      </Routes>
    </Router>
  );
}

export default App;
