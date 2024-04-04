import PhotoDetail from '@/components/PhotoDetail';
import React from 'react';

const page = ({params:{id,lang}}) => {
    return (
        <div>
            <PhotoDetail id={id} lang={lang} />
        </div>
    );
};

export default page;