import React from 'react'
import BlogComponent from './blog_component'
import BlogInput from './blog_input'

export default React.createClass({
  render: function () {
    return (
      (<main>
        <BlogInput/>
        <BlogComponent/>
      </main>)
    );
  }
});
