import React, { useContext } from 'react';
import { AuthDataContext } from '../context/userContext'; // Use AuthDataContext, not AuthContext

const App = () => {
  const { checked, setChecked } = useContext(AuthDataContext);

  return (
    <div>
      <h1>Click on the checkbox to get authenticated</h1>
      {
        !checked ? (
          <p>You are not authenticated</p>
        ) : (
          <p>You are now authenticated, you can proceed</p>
        )
      }

      <input
        type="checkbox" // Changed to checkbox for better clarity
        checked={checked} // Use `checked` attribute instead of `value`
        onChange={() => setChecked(!checked)}
      />
      <label>I'm not a robot</label>
    </div>
  );
};

export default App;
