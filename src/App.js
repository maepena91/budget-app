import { Button, Stack } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import BudgetCard from "./components/BudgetCard";


function App() {
  return <Container className="my-4">
    <Stack direction="horizontal" gap="2" className="mb-4"> 
    <h1 className="me-auto">Budgets</h1>
    <Button variant="primary">Add Budget</Button>
    <Button variant="outline-primary">Add Expense</Button>
    </Stack> 
  <div style={{
    display:"grid", 
    gridTemplateColumns: "repeat(auto-fill,minimax(300px, 1fr))",
     gap: "1rem", 
     alignItems:"flex-start",
     }}
     >
      <BudgetCard name="Entertainment" amount={200} max={1000}></BudgetCard>
     </div>
  </Container> //container comes from react bootstrap and gives us spacing around the edges
}

export default App;
//stack is something we import from bootstrap 
//margin me-auto and mb-4 give it enough spacing that is much needed
