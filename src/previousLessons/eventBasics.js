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
//Attribute, event handler
  //onClick,  onMouseOver
  const functionHandler = (e) => {
    console.log(e)
    console.log(e.target)
    alert("Yo");
  }
  
  const complexExample = (author) => {
    console.log(author);
  }

  return (
    <article className="book" onMouseOver={() => {
      console.log({title})
    }}>
      <img src={img} alt="" />
      <h1 onClick={() => console.log({title})}>{title}</h1>
      <h4 onClick={() => console.log({author})}>{author}</h4>
    <button type="button" onClick={functionHandler}>Reference</button>
    <button type="button" onClick={()=>complexExample(author)}>ComplexExample</button>
    
    {//Without arrow function this will render the author name of all the objects
    //initially when the application starts
    //By using arrow function as shown above we can disable the render 
    // <button type="button" onClick={complexExample(author)}>ComplexExample</button>
      }
    
     </article>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<BookList />);
// ReactDom.render(<BookList />, document.getElementById("root"));
