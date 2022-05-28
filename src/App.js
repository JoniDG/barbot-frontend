import { AuthContext } from "./auth/AuthContext";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  let user = JSON.parse(localStorage.getItem('user'));
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
        value={user}
      >
        <AppRoutes/>
      </AuthContext.Provider>
    </div>
  );
}



export default App;
