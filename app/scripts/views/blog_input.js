import React from 'react'

export default React.createClass({
  // getInitialState: function(){
  //   return {
  //     hidden: false
  //   };
  // },
  render: function(){
    return <aside>
    <input type="text" placeholder="blog title"/>
    <textarea rows="30" cols="20" placeholder="blog body" />
    <button type="button" >POST</button>

    </aside>
  }
})
