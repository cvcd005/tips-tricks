## Example custom copyToClipboard 

```jsx
import { useState, useRef } from "react";

const App = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);
  const [text, setText] = useState('');

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess("Copied!");
  }

  const onChange = (e) => {
    setText(e.target.value);
  } 

  return (
    <div>
      {
        /* Logical shortcut for only displaying the 
            button if the copy command exists */
        document.queryCommandSupported("copy") && (
          <div>
            <button onClick={copyToClipboard}>Copy</button>
            {copySuccess}
          </div>
        )
      }
    
        <textarea ref={textAreaRef} value={text} onChange={onChange}  />

    </div>
  );
};

export default App;
```