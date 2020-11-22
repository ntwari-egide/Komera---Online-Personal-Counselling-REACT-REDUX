import './App.css';
import TestimonialComponentHandler from "./components/TestimonialComponentHandler";
import {Provider} from "react-redux";
import testimonialsStore from "./store/testimonialStore";

function App() {
  return (
    <Provider store={testimonialsStore} className="App">
        <TestimonialComponentHandler />
    </Provider>
  );
}

export default App;
