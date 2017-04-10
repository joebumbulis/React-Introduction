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

const Content = React.createClass({
  getInitialState: function(){
    return {
      hidden: false
    };
  },
  render: function(){
  return  <div>
      <BlogBody title="Happy Day" time="March 31, 2017" body="Quo cu munere graeci deserunt. Quo tantas percipitur at, ei aeterno fabulas civibus sed. Sea recusabo consetetur ea. Vide explicari consequat per eu. Tamquam iuvaret eam in, ridens eligendi interpretaris ei sed.

        Dicta fuisset his no. Brute indoctum an eam, bonorum delicata eos ex. Quo minim graeco accusam at, ad viris impetus est, ius appareat convenire cu. Mel erat nihil iudico ad, ad altera splendide vis, dicta inermis referrentur ne vis."/>
      <BlogBody title="" time="" body=""/>
      <BlogBody title="" time="" body=""/>
      <BlogBody title="" time="" body=""/>
      <BlogBody title="" time="" body=""/>
    </div>
  }
})





      render(<App />, document.querySelector('#app'));
}
