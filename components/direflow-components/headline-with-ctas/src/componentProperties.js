import PropTypes from 'prop-types';

export const propTypes = {
  ctas: PropTypes.array,
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export const componentProperties = {
  title: 'Great shopping',
  subTitle: 'Based on your needs',
  ctas: [
    {
        "text" : "Shop more",
        "url" : "https://www.google.com/search?q=shop+more"
    },
    {
        "text" : "Buy now",
        "url" : "https://www.google.com/search?q=buy+now"
    }
  ]
};

export const componentAttributes = {};
