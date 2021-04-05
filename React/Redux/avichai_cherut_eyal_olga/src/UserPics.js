import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addImg } from "./Redux/action/Images";

const UserPics = () => {
  const Dispatch = useDispatch();

  const Users = useSelector((state) => state.Users.Users);
  const Images = useSelector((state) => state.Images.Images);

  const { id } = useParams();
  console.log(id);
  /* https://www.focus2move.com/wp-content/uploads/2020/01/Tesla-Roadster-2020-1024-03-696x522.jpg.webp */
  const foundUser = Users.find((user) => user.id == id);
  const foundUserImages = Images.filter((image) => image.userId == id);
  console.log(foundUserImages);

  const handleAddUserImg = (e) => {
    e.preventDefault();
    const img = e.target.children.imgUrl.value;
    console.log(img);
    Dispatch(addImg(img, id));
  };
  return (
    <div>
      <h3>Hello {foundUser.name}!</h3>

      <form onSubmit={handleAddUserImg}>
        <input name="imgUrl" type="url" required />
        <button>Add image</button>
      </form>

      {foundUserImages.map((image, index) => {
        {
          console.log("test", image.imgUrl);
        }
        return (
          <Link to={'/'+id+'/'+image.imageId}>
            <img src={image.imgUrl} />
          </Link>
        );
      })}
    </div>
  );
};
export default UserPics;
