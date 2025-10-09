import React, { useState, useEffect } from 'react';
import { useLoaderData, useSearchParams } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utils/addToDB';
import Book from '../Book/Book';


const ReadList = () => {

    const [readList, setReadList] = useState([]);
    const data = useLoaderData();
    // console.log(data);

    useEffect (() =>{
        const storedBookData = getStoredBook();
        // console.log(storedBookData);
        const convertedStoredBookData = storedBookData.map(id => parseInt(id));
        // console.log(convertedStoredBookData);
        const myReadList = data.filter(book=> convertedStoredBookData.includes(book.bookId));
        setReadList(myReadList);
    },[])

    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>My Wish List</Tab>
                </TabList>

                <TabPanel className="">
                    <h2>Books I read: {readList.length}</h2>
                    <div className='m-10 '>
                        {
                        readList.map(b=>
                        <Book 
                        key={b.bookId} 
                        singleBook={b}>
                        </Book>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>My Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;