import Table from "./components/Table/Table";
import SearchForm from "./components/Seachbar/Searchbar"
import Home from "./Home"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import ViewIdea from "./ViewIdea";


function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
            <Nav.Link href="/view-all">View All</Nav.Link>
          </Nav>
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
