/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import useSWR from 'swr';
import DelayLoading from '../components/DelayLoading';
import { api } from '../services/api';
import Tab from '../components/Tab';
import profileService from '../services/profile'

const fetcher = (url) => api.get(url).then((resp) => resp.data);

const Home = () => {
  // const { data: profile, error, isValidating } = useSWR('/profile', fetcher, {
  //   revalidateOnMount: false,
  // });
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    profileService.getProfile()
      .then((resp) => {
        console.log(resp.data);
        setProfile(resp.data);
      });
  }, []);

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
      <h1>home</h1>
      <Tab />
      {!profile ? (
        <DelayLoading>
          <span>Loading...</span>
        </DelayLoading>
      ) : (
        <div>
          first name:
          {' '}
          {profile.firstName}
          <br />
          remaining coin:
          {' '}
          {profile.coin}
          {/* {data.} */}
        </div>
      )}
    </div>
  );
};

export default Home;
