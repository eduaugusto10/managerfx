import "./App.css";
import Router from "./routes";
import { AuthProvider } from "./context/auth";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router />
            </AuthProvider>
        </div>
    );
}

export default App;
