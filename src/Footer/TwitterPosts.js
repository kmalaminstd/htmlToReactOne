import React from 'react'

function TwitterPosts() {
    const posts = [ <p> Lorem + <a href="a">aIpsum</a> + is a dummy text used as a text filler in designs. This is just a dummy text. via + <a href="a">@designerdada</a></p>,
     <p> Lorem + <a href="a">aIpsum</a> + is a dummy text used as a text filler in designs. This is just a dummy text. via + <a href="a">@designerdada</a></p>,
     <p> Lorem + <a href="a">aIpsum</a> + is a dummy text used as a text filler in designs. This is just a dummy text. via + <a href="a">@designerdada</a></p> ]
  return (
    <div>
        {
            posts.map( (post, i) => {
                return (
                    <div key={i}>{post} <hr/></div>
                )
            })
        }
    </div>
  )
}

export default TwitterPosts