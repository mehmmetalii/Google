import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useResultContext } from '../context/ResultContextProvider';
import { Loading } from './Loading';

export const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      getResults(`/search/q=${searchTerm}&num=40`);
    }
  }, [searchTerm, getResults]);

  if (isLoading) return <Loading />;

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '1.5rem',
    padding: '0 3.5rem',
    backgroundColor: '#f0f0f0' // Background color for visibility
  };

  const itemStyle = {
    width: '100%',
    maxWidth: '40%',
    border: '1px solid #ddd', // Border for visibility
    padding: '1rem'
  };

  const textStyle = {
    fontSize: '1rem',
    color: '#333' // Text color for visibility
  };

  const titleStyle = {
    fontSize: '1.25rem',
    textDecoration: 'underline',
    color: 'blue'
  };

  const videoContainerStyle = {
    padding: '0.5rem',
    backgroundColor: '#e0e0e0' // Background color for visibility
  };

  switch (location.pathname) {
    case '/search':
      return (
        <div style={containerStyle}>
          {results?.results?.map(({ link, title }, index) => (
            <div key={index} style={itemStyle}>
              <a href={link} target='_blank' rel='noreferrer'>
                <p style={textStyle}>
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p style={titleStyle}>
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    case '/images':
      return 'IMAGES';
    case '/news':
      return 'NEWS';
    case '/videos':
      return (
        <div style={containerStyle}>
          {results?.results?.map((video, index) => (
            <div key={index} style={videoContainerStyle}>
              {video.additional_links?.[0]?.href && (
                <ReactPlayer
                  url={video.additional_links[0].href}
                  controls
                  width='355px'
                  height='200px'
                />
              )}
            </div>
          ))}
        </div>
      );
    default:
      return 'No Results';
  }
};
