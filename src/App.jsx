import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/header";

function App() {
  return (
    <ChakraProvider>
      <Header></Header>
    </ChakraProvider>
  );
}

export default App;
