import React, { Suspense } from 'react';
import Categories from '../Categories';

const LeftAside = () => {
    return (
        <div>
            <Suspense 
                fallback={<span class="loading loading-spinner text-secondary"></span>}>
                    <Categories></Categories>
            </Suspense>
        </div>
    );
};

export default LeftAside;