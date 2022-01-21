import React, { useState } from 'react';
function App() {
  const [listIsOn, setListIsOn] = useState(false);
  const [nameList, setNameList] = useState([]);
  const [fullName, setFullName] = useState({
    fName: '',
    lName: '',
  });
  function handleChange(event) {
    const { value, name } = event.target;
    setFullName(prevValue => {
      if (name === 'fName') {
        return { ...prevValue, fName: value };
      } else if (name === 'lName') {
        return { ...prevValue, lName: value };
      }
    });
  }
  // function switchList() {
  //   setListIsOn(!listIsOn);
  // }
  function handleSubmit(event) {
    event.preventDefault();
    setNameList(prevValue => [...prevValue, fullName]);
    setFullName({
      fName: '',
      lName: '',
    });
  }
  function showList() {
    return nameList.map((item, index) => (
      <div key={index}>
        <p>
          {item.fName} {item.lName}
        </p>
      </div>
    ));
  }
  return (
    <div className='container'>
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name='fName'
          onChange={handleChange}
          placeholder='First Name'
          value={fullName.fName}
        />
        <input
          name='lName'
          onChange={handleChange}
          placeholder='Last Name'
          value={fullName.lName}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <button onClick={() => setListIsOn(!listIsOn)}>
        {listIsOn ? 'Hide List' : 'Show List'}
      </button>
      {listIsOn && showList()}
    </div>
  );
}
export default App;
