import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { createStore } from "./features/store";
import { Provider } from "react-redux";
import { GoogleLoginCmp } from "./GoogleLogin";

function App() {
  const store = createStore();
  return (
    <Provider store={store}>
      <div className="App">
        <h1>ciao</h1>
        <GoogleOAuthProvider clientId="192710632585-6dvq7283tr2pug31h5i6ii07fgdeu6q3.apps.googleusercontent.com">
         <GoogleLoginCmp/>
        </GoogleOAuthProvider>
      </div>
    </Provider>
  );
}

export default App;
