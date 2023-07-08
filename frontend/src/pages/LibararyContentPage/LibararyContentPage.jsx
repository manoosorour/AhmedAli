import React from 'react';
import LargeWithNewsletter from '../LibraryFooter/LibarayFooter';
import CaptionCarousel from '../LibararyCarasoul/LibararyCarasoul';
import WithSubnavigation from '../LibarayHeader/LibararyHeader';
import ElectronicService from '../ElectonicService/ElectronicService';
import ProductAddToCart from '../LibararyNews/News';
import BasicStatistics from '../LIbararyStatics/LibabraryStatic';
import SmallWithNavigation from '../LibararyTitle/LibararyTilte';

const LibararyContentPage = () => {
    return (
        <>
        <SmallWithNavigation/>
            <WithSubnavigation />
            <CaptionCarousel />
            <ElectronicService />
            <ProductAddToCart />
            <BasicStatistics />
            <LargeWithNewsletter />
        </>
    );
}

export default LibararyContentPage;
