import "./FeaturedProducts.scss"
import Card from "../Card/Card"
import useFetch from "../../hooks/useFetch";


export const FeaturedProducts = ({ type }) => {



    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][type][$eq]=${type}
    `);





    return (
        <div className='featuredProducts'>
            <div className="top">
                <h1>{type} products</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rem quisquam inventore quasi accusantium, blanditiis ea
                    eos voluptatibus, excepturi repudiandae, esse sed totam voluptatem
                    officia dolorem. Natus, eius. Ad, asperiores magni?
                </p>
            </div>
            <div className="bottom">
                {error
                 ? "something went wrong" 
                 : loading 
                 ? "loading" 
                 : data?.map((item) => <Card item={item} key={item.id} />)}
            </div>
        </div>
    )
}


export default FeaturedProducts