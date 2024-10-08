import Header from "../components/header"
export default function CSS(){
    return(
    <>
        <Header/>
        <div className="parentContainer">
            <div className="childContainerSkills">
        <div className="imageContainer"> 
        <img src="css.svg" alt="css-picture" className="picture" />  
        </div>
        <h1 className="headings"> CSS </h1>
        <p>CSS, or Cascading Style Sheets, is a stylesheet language used to describe the presentation of a document written in HTML or XML. It controls the layout, colors, fonts, and overall visual appearance of web pages.</p> 
        <hr />
        <h1><b> key features: </b></h1> <p>Separation of Content and Style, Selectors, Properties and Values, Cascading and Inheritance, Responsive Design, Responsive Design, Flexibility and Control, Animations and Transitions</p> 
        <hr />
        <h1> <b>Conclusion: </b> </h1>
        <p>CSS is an essential technology for web development, enabling the design and layout of web pages in a flexible and maintainable way. It plays a critical role in enhancing the aesthetic appeal and usability of websites.</p>
      </div>
        </div>
    </>
    )
}