import React, { useCallback, useMemo, useState } from 'react';

const Navbar = () => <div>navbar</div>;

const useFirstName = (initial = 'bas') => {
  const [firstName, setFirstName] = useState(initial);
  const firstNameHandler = useCallback((e) => {
    setFirstName(e.target.value);
  });
  return {
    firstName,
    firstNameHandler,
  };
};

const Home = () => {
  const [counter, setCounter] = useState(0);
  const increase = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  const { firstName, firstNameHandler } = useFirstName();
  const fnamUpperCase = useMemo(() => firstName.toUpperCase(), [firstName]);

  const [data, setData] = useState([
    {
      firstName: 'A',
      lastName: 'xx',
    },
  ]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((todos) => {
  //       console.log(todos);
  //     });
  // }, []);
  const addPerson = () => {
    setData([...data, { firstName, lastName: '' }]);
  };

  console.log(...data);

  return (
    <div>
      <Navbar />
      <h1>
        current count:
        {counter}
      </h1>
      <button onClick={increase}>increase</button>
      <div>
        <input type="text" value={firstName} onChange={firstNameHandler} />
        <br />
        {firstName}
        <br />
        <span className="use-memo">{fnamUpperCase}</span>
        <br />
        <span className="normal">{firstName.toUpperCase()}</span>

        <div>
          {/* <span className="normal">{firstName}</span> */}
          <hr />
          <span className="normal">
            {firstName === 'Bas' ? 'true' : 'false'}
          </span>
        </div>
        <hr />
        {data.map((person) => (
          <div style={{ border: '1 solid black' }} key={person.firstName}>
            {person.firstName}
          </div>
        ))}
        <button onClick={addPerson}>add person</button>
      </div>
    </div>
  );
};

export default Home;
