// import React, { useState } from 'react'

// export default function UseState() {
//     const [count,setCount] = useState(0);
//   return (
//     <div>
//       <h1>UseState</h1>
//       <h1>{count}</h1>
//       {/* <button onClick={updateCount}>Update Count</button> */}
//       <button onClick={()=>setCount(count+1)}>Update Count</button>
//     </div>
//   );
// }

import React, { Component } from 'react'

export default class UseState extends Component {
  render() {
    componentDidMount(()=>{
      
    })
    componentDidUpdate(()=>{

    })
    componentWillUnmount(()=>{

    })
    this.state.count = 0 
    this.setState(this.state=34)
    return (
      <div>
        
      </div>
    )
  }
}

