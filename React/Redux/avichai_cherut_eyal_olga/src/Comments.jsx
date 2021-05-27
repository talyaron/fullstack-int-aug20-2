import React from 'react'
import {
    BrowserRouter as Router,
    useParams
  } from "react-router-dom";
  import { useDispatch, useSelector } from "react-redux";
  import { addComment } from "./Redux/action/Comments";

const Comments = () => {
    let {id , picID} = useParams();
    const Dispatch = useDispatch();   
    const Images = useSelector((state) => state.Images.Images.find((Image) => Image.imageId == picID && Image.userId == id));
    const CommentsStore = useSelector((state) => state.Comments.Comments);

 
    // const foundUser = Images.find((Image) => Image.imageId == picID && Image.userId == id);
    const filterUserComments = CommentsStore.filter((Comments) => (Comments.userId == id) && (Comments.imgId === picID));
    /*   const foundUserImages = Images.filter((image) => image.userId == id); */
    
  const  handleSubmit= (event) => {
    event.preventDefault();
    const comment = event.target.children.comment.value;
    Dispatch(addComment(picID, id , comment));
  }  
  
  return (
        <div>
           <h1> {console.log(Images)}</h1> 
           <img src={Images.imgUrl} alt=""/>
           <form onSubmit={handleSubmit}>
               <input type="text" name="comment" id="comment"/>
               <input type="submit" value="OK"/>
           </form>
            {filterUserComments.map(comment =>{return(
                <p>{comment.Comment}</p>
            )}) }

        </div>
    )
}

export default Comments
