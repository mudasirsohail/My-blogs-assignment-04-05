import Header from "../components/header"
export default function TS(){
    return(
        <>
        <Header/>
        <div className="parentContainer">
      <div className="childContainerSkills">
        <div className="imageContainer"> 
          <img src="ts.png" alt="ts-picture" className="picture" />
        </div>
        <h1 className="headings"> Typescript </h1>
        <p> TypeScript is a statically typed superset of JavaScript developed by Microsoft that adds optional type annotations to the language. It compiles down to plain JavaScript, enabling developers to catch errors at compile time rather than runtime, making it easier to manage and maintain large codebases. </p>
            <hr />
        <h1><b> Key Features: </b></h1>
        <p> Static Typing, Type Inference, Interfaces, Generics, Modules, Access Modifiers, Decorators, Enhanced Tooling, Compatibility with JavaScript, and Rich Ecosystem. </p>
        <hr />
        <h1><b>Conclusion: </b></h1>
        <p>TypeScript enhances JavaScript development by introducing static typing and other powerful features that improve code quality and maintainability. Its ability to catch errors early and its compatibility with JavaScript make it a valuable tool for developers, especially when working on large-scale applications. </p>        
      </div>
      </div>
      </>
    )
}