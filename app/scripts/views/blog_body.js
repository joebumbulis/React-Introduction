import React from 'react'

export default React.createClass({
  getInitialState: function(){
    return {
      hidden: false
    };
  },

  hideContent: function(){
    this.setState({
      hidden: !this.state.hidden
    });
  },

    render: function(props){
      var pClass = 'show-content';
      if (this.state.hidden){
        pClass = 'hide-content';
      }

      return(<article>
        <h2>{this.props.title}</h2>
        <button onClick={this.hideContent} type="button" >TOGGLE</button>
        <h3 className={pClass}>{this.props.time}</h3>
        <p className={pClass}>{this.props.body}</p>
        </article>)
    }
})
