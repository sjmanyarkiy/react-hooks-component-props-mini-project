import React from 'react'

function Article({ title, date="January 1, 1970", preview }) {
  
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  )
}

export default Article

// { title, date="January 1, 1970", preview }

// key={post.id} 
//           title ={post.title}
//           date={post.date}
//           preview={post.preview}