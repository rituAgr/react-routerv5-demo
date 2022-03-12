import {useHistory, useParams} from "react-router-dom";

const Shop = () => {
    const {item, price} = useParams();
    console.log(item)
    console.log(price)

    const history = useHistory();

    const goBackHandler = () =>{
        history.goBack();
    }
    const goHomeHandler = () =>{
        history.push("/home")
    }
    return(
        <>
            <div>I am Shop Page</div>
            <button onClick={goBackHandler}>Go back</button>
            <button onClick={goHomeHandler}>Go Home</button>
        </>
    )
}

export default Shop;