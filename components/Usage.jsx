/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import useSWR from 'swr';
import Link from 'next/link';
import Tab from '../components/Tab';
import { api } from '../services/api';

const fetcher = (url) => api.get(url).then((resp) => resp.data);

const Usage = () => {
  const { data: usage } = useSWR('/usage', fetcher);
  return (
    <div>
      <div>
        <Link href="/home">
          <a>Home</a>
        </Link>
        <Link href="/usage">
          <a>Usage</a>
        </Link>
      </div>
      <Tab />
      {usage ? (
        <div>
          remain data:
          {' '}
          {usage.remainingData}
          ,
          remain call
          {' '}
          {usage.remainingData}
        </div>
      ) : (
        <div>loading...</div>
      )}
      usage
    </div>
  );
};

export default Usage;
