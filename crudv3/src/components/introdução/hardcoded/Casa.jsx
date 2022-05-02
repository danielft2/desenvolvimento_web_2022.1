import React, { Component } from "react";
// const Casa = () => {
//     return(
//         <div>

//         </div>
//     )
// }

class Casa extends Component {
    render() {
        return (
           <div>
               <h1>Game of Thrones</h1>
                {
                    React.Children.map(this.props.children, (personagem) => {
                        return React.cloneElement(
                           personagem, 
                           {casa:this.props.casa, horario:this.props.horario} // {...props};
                        )
                    })
                }
           </div>
        )
    }
}

export default Casa;