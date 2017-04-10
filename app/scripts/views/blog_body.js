import React from 'react'

export default React.createClass({
    render: function(){
      return(<article>
        <h2>{this.props.title}</h2>
        <h3>{this.props.time}</h3>
        <p>{this.props.body}</p>
        </article>)
    }
})
