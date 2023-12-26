import React from 'react';
import useCategory from '../Hooks/useCategory';
import CategoryDetails from '../CategoryDetails/CategoryDetails';
import './Category.css'
const Category = () => {
    const categorys = useCategory();
    return (
        <section className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className='title-size fw-bolder'>Job Category List</h2>
                        <p className='description fw-medium'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-4">
                    {
                        categorys.map(category => <CategoryDetails key={category.id} category={category}></CategoryDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Category;