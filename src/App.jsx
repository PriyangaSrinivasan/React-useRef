import React from 'react';
import UseReducerhook from './Components/UseReducer/UseReducerhook';

const App = () => {
  const data= [{
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCEf_pTLFVn9qj9TX__Kq3-BGb60Tfz88g3Q&s"
}];
  return (
    <div>
      <UseReducerhook data={data} />
    </div>
  );
};

export default App;