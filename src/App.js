import { Button, Stack } from "react-bootstrap";
import Container from "react-bootstrap/Container";

function App() {
  return <Container className="my-4">
    <Stack direction="horizontal" gap="2" className="mb-4"> 
    <h1 className="me-auto">Budgets</h1>
    <Button variant="primary">Add Budget</Button>
    <Button variant="outline-primary">Add Expense</Button>

    </Stack> 
  </Container> //container comes from react bootstrap and gives us spacing around the edges
}

export default App;
//stack is something we import from bootstrap 