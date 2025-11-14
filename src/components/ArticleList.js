import React from 'react'
import Article from './Article'

function ArticleList({ props = [] }) {

    const { posts } = props

    const article = posts.map((post, index) => {
    return  <Article key={index}
          title ={post.title}
          date={post.date}
          preview={post.preview}/> 
     
  })

  return ( 
   <main>
      {article}
    </main>
  
  )
}

export default ArticleList
