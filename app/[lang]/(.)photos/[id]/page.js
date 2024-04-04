import React from 'react';
import Modal from '@/components/Modal';
import PhotoDetail from '@/components/PhotoDetail';

const PhotoModal =({params:{id,lang}}) =>{

    return (
        <Modal>
            <PhotoDetail id={id} lang={lang}/>
        </Modal>
    )
}

export default PhotoModal;