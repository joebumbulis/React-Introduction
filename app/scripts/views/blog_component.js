import React from 'react'
import BlogBody from './blog_body'


export default React.createClass({
  getInitialState: function(){
    return {
      hidden: false
    };
  },
  render: function(){
  return  <div>
      <BlogBody title="Happy Day" time="March 31, 2017" body="Quo cu munere graeci deserunt. Quo tantas percipitur at, ei aeterno fabulas civibus sed. Sea recusabo consetetur ea. Vide explicari consequat per eu. Tamquam iuvaret eam in, ridens eligendi interpretaris ei sed. Dicta fuisset his no. Brute indoctum an eam, bonorum delicata eos ex. Quo minim graeco accusam at, ad viris impetus est, ius appareat convenire cu. Mel erat nihil iudico ad, ad altera splendide vis, dicta inermis referrentur ne vis."/>
      <BlogBody title="Rainy Day" time="April 1st, 2017" body="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences
      that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. "/>
      <BlogBody title="Busy Day" time="April 3rd, 2017" body="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia n"/>
      <BlogBody title="BEST Day" time="April 7th, 2017" body="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."/>
      <BlogBody title="What Day? Today" time="April 10th, 2017" body="Yay for this day today!" />
    </div>
  }
})
