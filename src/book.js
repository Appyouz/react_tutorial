import React from "react"

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

export default Book
