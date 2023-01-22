import React from 'react';
class Mytask extends React.Component {
render() {
   const { params } = this.props.match
      return (
         <div>
            <h1>Mytask</h1>
            <p>{params.id}</p>
         </div>
      )
   }
}
export default Mytask