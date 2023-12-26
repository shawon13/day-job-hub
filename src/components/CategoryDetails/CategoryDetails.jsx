import React from 'react';
import './CategoryDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/free-solid-svg-icons';
const iconList = Object.keys(Icons).filter((key) => key !== 'fas' && key !== 'prefix').map((icon) => Icons[icon]);
library.add(...iconList);

const CategoryDetails = ({ category }) => {
    const { category_name, icon, availability } = category;
    return (
        <div className="col">
            <div className="card text-center card-bg mt-3">
                <div className='icon-box mx-auto d-flex align-items-center justify-content-center rounded mt-4'>
                    <FontAwesomeIcon style={{ fontSize: '24px', color: 'rgba(126, 144, 254, 1)' }} icon={icon} />
                </div>
                <div className="card-body">
                    <h5 className="card-title fs-5 fw-bolder">{category_name}</h5>
                    <p className="card-text description">{availability}</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryDetails;