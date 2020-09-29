import React from 'react';
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from 'mdbreact';

const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={8}
        showControls={true}
        showIndicators={true}
        className='z-depth-1'>
        <MDBCarouselInner>
          <MDBCarouselItem itemId='1'>
            <MDBView>
              <img
                className='d-block w-100'
                src='img/ad.jpg'
                alt='First slide'
              />
              <MDBMask overlay='black-light' />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className='h3-responsive'>Light mask</h3>
              <p>First text</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId='2'>
            <MDBView>
              <img
                className='d-block w-100'
                src='img/ad1.jpg'
                alt='Second slide'
              />
              <MDBMask overlay='black-strong' />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className='h3-responsive'>Strong mask</h3>
              <p>Second text</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId='3'>
            <MDBView>
              <img
                className='d-block w-100'
                src='img/ad2.jpg'
                alt='Third slide'
              />
              <MDBMask overlay='black-slight' />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className='h3-responsive'>Slight Mast</h3>
              <p>Third text</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId='4'>
            <MDBView>
              <img
                className='d-block w-100'
                src='img/ad3.jpg'
                alt='First slide'
              />
              <MDBMask overlay='black-light' />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className='h3-responsive'>Light mask</h3>
              <p>First text</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId='5'>
            <MDBView>
              <img
                className='d-block w-100'
                src='img/ad4.jpg'
                alt='Second slide'
              />
              <MDBMask overlay='black-strong' />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className='h3-responsive'>Strong mask</h3>
              <p>Second text</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId='6'>
            <MDBView>
              <img
                className='d-block w-100'
                src='img/ad5.jpg'
                alt='Third slide'
              />
              <MDBMask overlay='black-slight' />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className='h3-responsive'>Slight Mast</h3>
              <p>Third text</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId='7'>
            <MDBView>
              <img
                className='d-block w-100'
                src='img/ad6.jpg'
                alt='Second slide'
              />
              <MDBMask overlay='black-strong' />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className='h3-responsive'>Strong mask</h3>
              <p>Second text</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId='8'>
            <MDBView>
              <img
                className='d-block w-100'
                src='img/ad7.jpg'
                alt='Third slide'
              />
              <MDBMask overlay='black-slight' />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className='h3-responsive'>Slight Mast</h3>
              <p>Third text</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default CarouselPage;
