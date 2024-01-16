import 'lightbox.js-react/dist/index.css';

import { Grid } from '@mui/material';
import { SlideshowLightbox } from 'lightbox.js-react';
import { useState } from 'react';

import Text from '@/components/Text';
import { global } from '@/types/global';

export default function PictureGrid({ ...props }) {
  const [showGallaryView, setShowGallaryView] = useState<boolean>(false);
  const [indexOver, setIndexOver] = useState<number | null>(null);
  const images = props?.images?.map((item: global.TDataBlob) => {
    return item.url ?? item;
  });
  const displayGallaryImage = (images: string[]) => {
    if (images) {
      const newImages = images.map((src) => {
        return {
          src: src,
          alt: '',
        };
      });
      return (
        <SlideshowLightbox
          startingSlideIndex={indexOver ? indexOver : undefined}
          imageComponent
          images={newImages}
          open={showGallaryView}
          lightboxIdentifier="lbox1"
          showThumbnails={true}
          onClose={() => {
            setShowGallaryView(false);
          }}
        />
      );
    }
  };

  const isAVideo = (path: string) => {
    if (props.children === null) {
      if (path.includes('.mp4') || path.includes('.mov')) {
        return true;
      }
    }

    return false;
  };

  const hasAVideo = (paths: string[]) => {
    let hasVideo = false;
    if (props.children === null) {
      paths.map((path: string) => {
        if (path.includes('.mp4') || path.includes('.mov')) {
          console.log('checking videos', path);
          hasVideo = true;
        }
      });
    }

    return hasVideo;
  };

  const displayImage = (images: string[]) => {
    if (images) {
      if (images.length === 1) {
        if (isAVideo(images[0])) {
          return (
            <Grid container direction="row">
              <video width="95%" height="400" src={images[0]} controls />
            </Grid>
          );
        } else {
          return (
            <Grid
              container
              style={{
                backgroundImage: `url(${images[0]}`,
                backgroundSize: 'cover',
                width: '100%',
                aspectRatio: 1,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
              onClick={() => {
                setShowGallaryView(true);
              }}
            ></Grid>
          );
        }
      } else if (images.length === 2) {
        if (hasAVideo(images)) {
          return (
            <Grid container spacing={1}>
              {images.map((image, index) => {
                if (isAVideo(image)) {
                  return (
                    <Grid key={image} item md={12} lg={12} xl={12} xs={12} sm={12}>
                      <Grid container direction="row">
                        <video width="100%" height="290" src={image} controls />
                      </Grid>
                    </Grid>
                  );
                }
                return (
                  <Grid key={image} item md={12} lg={12} xl={12} xs={12} sm={12}>
                    <Grid
                      container
                      direction="row"
                      style={{
                        backgroundImage: `url(${image}`,
                        width: 'auto',
                        height: 200,
                        borderRadius: 5,
                        marginBottom: 5,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                      }}
                      onClick={() => {
                        setShowGallaryView(true);
                        setIndexOver(index);
                      }}
                    ></Grid>
                  </Grid>
                );
              })}
            </Grid>
          );
        } else {
          return (
            <Grid container spacing={1}>
              {images.map((image, index) => {
                return (
                  <Grid key={image} item md={6} lg={6} xl={6} xs={6} sm={6}>
                    <Grid
                      container
                      direction="row"
                      style={{
                        backgroundImage: `url(${image}`,
                        width: 'auto',
                        height: 400,
                        borderRadius: 5,
                        marginBottom: 5,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                      }}
                      onClick={() => {
                        setShowGallaryView(true);
                        setIndexOver(index);
                      }}
                    ></Grid>
                  </Grid>
                );
              })}
            </Grid>
          );
        }
      } else if (images.length === 3) {
        return (
          <Grid container spacing={1}>
            <Grid item md={6} lg={6} xl={6} xs={6} sm={6}>
              <Grid
                container
                direction="row"
                style={{
                  backgroundImage: `url(${images[0]}`,
                  // width: 250,
                  height: 400,
                  borderRadius: 5,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
                onClick={() => {
                  setShowGallaryView(true);
                }}
              ></Grid>
            </Grid>{' '}
            <Grid item md={6} lg={6} xl={6} xs={6} sm={6}>
              {images.map((image, index) => {
                if (index != 0) {
                  if (isAVideo(image)) {
                    return (
                      <Grid key={image} item md={12} lg={12} xl={12} xs={12} sm={12}>
                        <Grid container direction="row">
                          <video
                            width="100%"
                            height="auto"
                            style={{ maxHeight: 205 }}
                            src={image}
                            controls
                          />
                        </Grid>
                      </Grid>
                    );
                  } else {
                    return (
                      <Grid
                        key={image}
                        container
                        direction="row"
                        style={{
                          backgroundImage: `url(${image}`,
                          width: 'auto',
                          height: 195,
                          borderRadius: 5,
                          marginBottom: 5,
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center',
                        }}
                        onClick={() => {
                          setShowGallaryView(true);
                          setIndexOver(index);
                        }}
                      ></Grid>
                    );
                  }
                }
              })}
            </Grid>
          </Grid>
        );
      } else if (images.length === 4) {
        return (
          <Grid container spacing={1}>
            <Grid item md={6} lg={6} xl={6} xs={6} sm={6}>
              <Grid
                container
                direction="row"
                style={{
                  backgroundImage: `url(${images[0]}`,
                  height: 400,
                  borderRadius: 5,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
                onClick={() => {
                  setShowGallaryView(true);
                }}
              ></Grid>
            </Grid>{' '}
            <Grid item md={6} lg={6} xl={6} xs={6} sm={6}>
              {images.map((image, index) => {
                if (index != 0) {
                  if (isAVideo(image)) {
                    return (
                      <Grid key={image} item md={12} lg={12} xl={12} xs={12} sm={12}>
                        <Grid container direction="row">
                          <video width="100%" height="auto" src={image} controls />
                        </Grid>
                      </Grid>
                    );
                  }
                  return (
                    <Grid
                      key={image}
                      container
                      direction="row"
                      style={{
                        backgroundImage: `url(${image}`,
                        width: 'auto',
                        height: 130,
                        borderRadius: 5,
                        marginBottom: 5,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                      }}
                      onClick={() => {
                        setShowGallaryView(true);
                        setIndexOver(index);
                      }}
                    ></Grid>
                  );
                }
              })}
            </Grid>
          </Grid>
        );
      } else {
        return (
          <Grid container spacing={1}>
            <Grid item md={6} lg={6} xl={6} xs={6} sm={6}>
              <Grid
                container
                direction="row"
                style={{
                  backgroundImage: `url(${images[0]}`,
                  height: 400,
                  borderRadius: 5,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
                onClick={() => {
                  setShowGallaryView(true);
                }}
              ></Grid>
            </Grid>{' '}
            <Grid item md={6} lg={6} xl={6} xs={6} sm={6}>
              <Grid container spacing={1}>
                {images.map((image, index) => {
                  if (index != 0) {
                    if (index > 3 && images.length > 5) {
                      if (index === 4) {
                        return (
                          <Grid key={image} item md={6} lg={6} xl={6} xs={6} sm={6}>
                            <Grid
                              container
                              direction="row"
                              alignItems="center"
                              style={{
                                backgroundImage: `url(${images[index]}`,
                                width: 'auto',
                                height: 195,
                                borderRadius: 5,
                                cursor: 'pointer',
                                position: 'relative',
                              }}
                              onClick={() => {
                                setShowGallaryView(true);
                                setIndexOver(index);
                              }}
                            >
                              <Grid
                                style={{
                                  content: '""',
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  right: 0,
                                  bottom: 0,
                                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                  borderRadius: 5,
                                }}
                              />
                              <Text
                                className="text-center w-full z-[1]"
                                variant="body_lg__s"
                                color="white"
                              >
                                +{images.length - (index + 1)}
                              </Text>
                            </Grid>
                          </Grid>
                        );
                      }
                    } else {
                      if (hasAVideo(images) && images.length <= 5) {
                        if (index > 2) {
                          // alert("it coming herer");
                          if (isAVideo(image)) {
                            return (
                              <Grid key={image} item md={12} lg={12} xl={12} xs={12} sm={12}>
                                <Grid container direction="row">
                                  <video width="100%" height="130" src={image} controls />
                                </Grid>
                              </Grid>
                            );
                          }
                          return (
                            <Grid key={image} item md={12} lg={12} xl={12} xs={12} sm={12}>
                              <Grid
                                container
                                direction="row"
                                style={{
                                  backgroundImage: `url(${image}`,
                                  width: 'auto',
                                  height: 105,
                                  borderRadius: 5,
                                  // marginBottom: 5,
                                  backgroundSize: 'cover',
                                  backgroundRepeat: 'no-repeat',
                                  backgroundPosition: 'center',
                                }}
                                onClick={() => {
                                  setShowGallaryView(true);
                                  setIndexOver(index);
                                }}
                              ></Grid>
                            </Grid>
                          );
                        }
                        return (
                          <Grid key={image} item md={6} lg={6} xl={6} xs={6} sm={6}>
                            <Grid
                              container
                              direction="row"
                              style={{
                                backgroundImage: `url(${image}`,
                                width: 'auto',
                                height: 155,
                                borderRadius: 5,
                                // marginBottom: 5,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                              }}
                              onClick={() => {
                                setShowGallaryView(true);
                                setIndexOver(index);
                              }}
                            ></Grid>
                          </Grid>
                        );
                      } else {
                        return (
                          <Grid key={image} item md={6} lg={6} xl={6} xs={6} sm={6}>
                            <Grid
                              container
                              direction="row"
                              style={{
                                backgroundImage: `url(${image}`,
                                width: 'auto',
                                height: 195,
                                borderRadius: 5,
                                // marginBottom: 5,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                              }}
                              onClick={() => {
                                setShowGallaryView(true);
                                setIndexOver(index);
                              }}
                            ></Grid>
                          </Grid>
                        );
                      }
                    }
                  }
                })}
              </Grid>
            </Grid>
          </Grid>
        );
      }
    }
  };
  return (
    <div className="w-full">
      {displayImage(images)}
      {displayGallaryImage(images)}
    </div>
  );
}
