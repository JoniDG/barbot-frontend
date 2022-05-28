import { AuthContext } from "./auth/AuthContext";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  let token = localStorage.getItem('token');
  return (
    
    <div className="App">
      <header className="App-header">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      </header>
      <AuthContext.Provider
        value={token}
      >
        <AppRoutes/>
      </AuthContext.Provider>
    </div>
  );
}



export default App;
