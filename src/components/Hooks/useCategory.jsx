import React, { useEffect, useState } from 'react';

const useCategory = () => {
    const [categorys, setCategorys] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategorys(data))
    }, [])
    return (
        categorys
    );
};

export default useCategory;