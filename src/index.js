import React from 'react'
import ReactDom from 'react-dom';

// CSS
import './index.css';


function  BookList() {
  <section className='bookList'>
    <Book
        img={first}
}

function BookList() {
}
const Book = (props) => {
  const {img, title, author, children} = props;
  return (
    <article className='book'>
    <img src={img} alt='' />
    <h1>{title}</h1>
    <h4>{author}</h4>
    {children}
    </article>
  )
}


ReactDom.render(<BookList />, document.getElementById('root'));
