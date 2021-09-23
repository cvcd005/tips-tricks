## Simple way to focus input in React

```jsx 
const utilizeFocus = () => {
    const ref = React.createRef()
    const setFocus = () => {ref.current &&  ref.current.focus()}

    return {setFocus, ref} 
}

class App extends Component {
  constructor(props) {
    super(props)
    this.inputFocus = utilizeFocus()
  }

  render() {
    return (
      <> 
          <button onClick={this.inputFocus.setFocus}>
             FOCUS
          </button>
          <input ref={this.inputFocus.ref}/>
      </>
    )
  } 
}
```