import "./App.css";
import Form from "./components/Form";
import { schema } from "./schema/schema";

function App() {
  return (
    <>
      <Form schema={schema}/>
    </>
  );
}

export default App;
