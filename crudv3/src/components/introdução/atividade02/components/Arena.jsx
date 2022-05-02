import React, {Component} from "react";

const Arena = (props) => {
    return (
        <div>
            {
                React.Children.map(props.children, (person) => {
                    return React.cloneElement(
                        person, 
                        {arena:props.arena}
                    )
                })
            }
        </div>
    )
}

export default Arena;