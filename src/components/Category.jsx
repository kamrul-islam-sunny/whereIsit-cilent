import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Category = () => {
    const [allData, setAllData] = useState([]);
    const [uniqueCategories, setUniqueCategories] = useState([]);

    useEffect(() => {
      axios.get(`http://localhost:4002/allItems`)
        .then(res => {
          setAllData(res.data);
  
          // Extract unique categories
          const categories = [...new Set(res.data.map(item => item.category))];
          setUniqueCategories(categories);
        });
    }, []);
    console.log(uniqueCategories)
    return (
        <div className='py-8 border-t-2 border-dashed'>
             <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center pb-14">Browse by categories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 lg:px-0">
                    {
                        uniqueCategories.map((item, idx) => <button key={idx} className='btn bg-indigo-100 border-indigo-600 border-opacity-50 text-xl justify-start text-indigo-600 ml-4 lg:ml-0 font-semibold border-2'>{item === "create_new"? 'Uncategorized' : item}</button>)
                    }
            </div>
        </div>
    );
};

export default Category;