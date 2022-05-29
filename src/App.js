
import { useRef, useState } from "react";
import './App.css';

function App() {
  const [val, setVal] = useState('ok');

  const handleChange = e => setVal(e.target.value);

  const text = useRef(null)

  const handleSubmit = () => {
    alert(val)
  };

  return (
    <div>
      <form>
        <h1>トイレ状態管理</h1>
        <hr />
        <div className="uiForm">
          <div className="formField">
            <label>綺麗でしたか？</label>
            <div>
              <label>
                <input
                  type="radio"
                  value="ok"
                  onChange={handleChange}
                  checked={val === "ok"}
                />
                ok</label>
              <label>
                <input
                  type="radio"
                  value="none"
                  onChange={handleChange}
                  checked={val === 'none'}
                   />
                none</label>
            </div>
            <p>選択された値は{val}</p>
          </div>
          <button className="submitButton" onClick={handleSubmit} type="submit">送信してね</button>
        </div>
      </form>
    </div>
  );
}

export default App;
