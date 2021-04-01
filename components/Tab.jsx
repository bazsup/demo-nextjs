import React, { useState } from "react";

const Tab = () => {
  const [tab, setTab] = useState(0);
  const hide = { display: 'none' };
  return (
    <>
      <button type="button" onClick={() => setTab(0)}>
        tab0
      </button>
      <button type="button" onClick={() => setTab(1)}>
        tab1
      </button>
      {tab}
      <div style={tab === 0 ? {} : hide}>
        tab 0
        <img
          width="500"
          src="https://cdn.hipwallpaper.com/i/72/89/czQvTD.jpg"
          alt=""
        />
      </div>
      <div style={tab === 1 ? {} : hide}>tab 1</div>
    </>
  );
};

export default Tab;
