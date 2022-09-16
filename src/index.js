import React from "react";
// import ReactDom from "react-dom";
import * as ReactDOM from "react-dom/client";
// CSS
// import "./index.css";

const books = [
  {
    id: 1,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/816vWy-0AJL._AC_UL116_SR116,116_.jpg",
    title: "Fairy Tale",
    author: "Stephen King",
  },
  {
    id: 2,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/61Bdp7XZhDL._AC_UL116_SR116,116_.jpg",
    title: "The Silent Patient",
    author: "Alex Michaelides",
  },
  {
    id: 3,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/61tqfa+xbWL._AC_UL210_SR195,210_.jpg",
    title: "Verity",
    author: "Colleen Hoover",
  },
];

function BookList() {
  return (
    <section className="bookList">
      {books.map((book,index) => {
        return (
          // <Book key = {book.id} book = {book}></Book>
          // Can use spread operator too , the same thing
          <Book key = {book.id} {...book}></Book>
        )
      })}
    </section>
  );
}
const Book = ({img, title, author}) => {
  // console.log(props)
  //Passing props as parameter or passing img,title,author is the same thing 
  // const { img, title, author } = props.book; //Destructing the book property not props
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<BookList />);
// ReactDom.render(<BookList />, document.getElementById("root"));
