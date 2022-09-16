import React from "react";
// import ReactDom from "react-dom";
import * as ReactDOM from "react-dom/client";
// CSS
// import "./index.css";
import SpecificBook from "./book"
import {books} from "./books.js"
function BookList() {
  return (
    <section className="bookList">
      {books.map((book,index) => {
        return (
          // <Book key = {book.id} book = {book}></Book>
          // Can use spread operator too , the same thing
          <SpecificBook key = {book.id} {...book}></SpecificBook>
        )
      })}
    </section>
  );
}


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<BookList />);
// ReactDom.render(<BookList />, document.getElementById("root"));
