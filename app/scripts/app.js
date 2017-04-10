import { render } from 'react-dom'
import React from 'react'
import AppRoot from './views/app_root.js'

export default function app() {

const BlogBody = React.createClass({
    render: function(){
      return(<article>
        <h2>{this.props.title}</h2>
        <h3>{this.props.time}</h3>
        <p>{this.props.body}</p>
        </article>)
    }
})

const Content = React.className({
  render: function(){
    <BlogBody title="" time="" body=""/>
    <BlogBody title="" time="" body=""/>
    <BlogBody title="" time="" body=""/>
    <BlogBody title="" time="" body=""/>
    <BlogBody title="" time="" body=""/>
  }
})



const App = React.createClass({
  render: function() {
    return (<main>
      < Content/>
    </main>)
  }
})

  render(<App />, document.querySelector('#app'));
}
