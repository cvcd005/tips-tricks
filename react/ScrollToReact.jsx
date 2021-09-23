import React, { useRef } from 'react'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   
// General scroll to element function

const ScrollDemo = () => {

   const myRef = useRef(null)
   const executeScroll = () => scrollToRef(myRef)

   return (
      <> 
         <div ref={myRef}>I wanna be seen</div> 
         <button onClick={executeScroll}> Click to scroll </button> 
      </>
   )
}

//or

class ReadyToScroll extends Component {

    constructor(props) {
        super(props)
        this.myRef = React.createRef()  
    }

    render() {
        return <div ref={this.myRef}></div> 
    }  

    scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop)   
    // run this method to execute scrolling. 

}
