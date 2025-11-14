import React from 'react'
import Article from './Article'

function ArticleList(props) {

    const { posts } = props

    const article = posts.map((post) => {
    return  <main>
        <Article 
    key={post.id} 
    title ={post.title}
    date={post.date}
    preview={post.preview}
    /> </main>
  })

  return ( 
    {article}
   
  )
}

export default ArticleList
