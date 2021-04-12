import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory
} from "react-router-dom";


const RenderImages = () => {
    const dispatch = useDispatch();

    let data = useSelector(state => state)
    console.log(data)
    



return (
<div>

</div>
)
}

export default RenderImages