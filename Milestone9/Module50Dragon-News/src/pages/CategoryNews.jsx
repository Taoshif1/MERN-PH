import { useParams } from 'react-router';


const CategoryNews = () => {

    const { id }  = useParams();
    // console.log(id)

    return (
        <div>
            <h4>Category News! - {id}</h4>
        </div>
    );
};

export default CategoryNews;