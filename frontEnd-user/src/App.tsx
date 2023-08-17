import "./App.css";
import Router from "./router/Router";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
function App() {
  const paypalClientId =
    "Af5Te-Z2KWf7cOM-TbLhk9Dj8aEhpLLB9w-IJ09jsi1bmT5H56mTVjU-YSd2DWE-8ElwcJc006NjgEfR";
  return (
    <PayPalScriptProvider options={{ clientId: paypalClientId }}>
      <Router />;
    </PayPalScriptProvider>
  );
}

export default App;
