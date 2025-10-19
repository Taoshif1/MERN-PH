import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';


const CategoryNews = () => {

    const { id }  = useParams();
    const data = useLoaderData();

    // console.log(id, data);

    const [categoryNews, setCategoryNews] = useState([]);

    useEffect(()=>{

        if(id=="0"){ // Show All News (id = 0)
            setCategoryNews(data);
            return;
        }
        else if(id=="1"){  // Show if is today pick is true (id == 1)
            const filteredNews = data.filter((news) => news.others.is_today_pick == true);
            setCategoryNews(filteredNews);
        }
        else {   // Remaining Ids
            const filteredNews = data.filter(news =>
            news.category_id == id)
            // console.log(filteredNews)
            setCategoryNews(filteredNews);
        }
    },[data, id]);

    return (
        <div>
            <h4>Total: {categoryNews.length} News Found</h4>
        </div>
    );
};

export default CategoryNews;