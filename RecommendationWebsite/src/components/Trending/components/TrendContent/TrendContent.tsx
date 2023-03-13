import React from 'react';
import PropTypes from 'prop-types';
import { TrendType } from '../../Trending';
import { item } from 'src/test/item.type';

export interface trends extends TrendType {
  title?: string;
  item?: item;
}

const TrendContent = ({ title, item }: trends) => {
  console.log(title, item);
  return <div>TrendContent</div>;
};

export default TrendContent;
