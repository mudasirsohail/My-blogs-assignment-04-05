import Header from "../components/header"
export default function WORD(){
    return(
        <>
        <Header/>
        <div className="parentContainer">
            <div className="childContainerSkills">
        <div className="imageContainer"> 
          <img src="word.webp" alt="word-pic" className="picture" />
        </div>
        <h1 className="headings"> Word </h1>
        <p> Microsoft Word is a widely used word processing software developed by Microsoft. It allows users to create, edit, format, and share text documents with a variety of features designed to enhance productivity and collaboration.</p>
            <hr />
            <h1><b>Key Features: </b></h1>
            <p> Rich Text Formatting, Templates, Spell Check and Grammar Check, Collaboration Tools, Tables and Charts, Mail Merge, Comments and Track Changes, Hyperlinks and Bookmarks, Document Protection, and Integration with OneDrive </p>
            <hr />
            <h1><b>Conclusion: </b></h1>
            <p>Microsoft Word is a powerful and versatile word processing tool that caters to a wide range of document creation needs. Its extensive features and collaborative capabilities make it an essential application for individuals and organizations alike, enhancing productivity and streamlining the document workflow.</p>
      </div>
        </div>
        </>
    )
}