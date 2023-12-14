import React from 'react';
import useCategory from '../Hooks/useCategory';
import CategoryDetails from '../CategoryDetails/CategoryDetails';

const Category = () => {
    const categorys = useCategory();
    return (
        <section className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Job Category List</h2>
                        <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        {
                            categorys.map(category => <CategoryDetails key={category.id} category={category}></CategoryDetails>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Category;