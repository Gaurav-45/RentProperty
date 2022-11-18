import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data';
import Filter from './components/Filter';
import { useState } from 'react';
import dayjs from 'dayjs';
import Footer from './components/Footer';

const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
dayjs.extend(isSameOrAfter)

function App() {

  //Data that renders on screen
  const[allData, setData]=useState(data);

  //Querying the data based on the filter
  //Logic:
  //If the query field is empty then return true for that field
  //Return current item if all conditions are matched or if the field is empty/default
  const handleFilter = (query) => {
    const filteredData = data.filter((item) => {
      if (item.city.toLowerCase().includes(query.city.toLowerCase()) &&  //Check if the current item has the same city
          (query.type==""?true:item.propertyType==query.type) &&  //If no property is selected return true else find the matching property
          (query.price==""?true:(Number(query.price.split("-")[0].substring(3))<=item.price && Number(query.price.split("-")[1].substring(3))>item.price)) && //Compare price range
          (dayjs(item.fromDate).isSameOrAfter(query.date)) //Check if the property is available before the arrival date
          ) {
        return item;
      }
    });

    setData(filteredData);
  };

  //Function to set data as default data
  const handleClearFilter=()=>{
    setData(data);
  }

  return (
    <div className="app">
      <Navbar/>
      <Filter handleFilter={handleFilter} handleClearFilter={handleClearFilter}/>
      {/* If data is present after the query then render else error message */}
      {allData.length!=0?
        <div className="home">
          {allData.map((item)=>(
            <Card item={item} key={item.id}/>
          ))}
        </div>:
        <div className="notAvail">
          <h2>Sorry :( No properties available</h2>
        </div>
      }
      <Footer/>
    </div>
  );
}

export default App;
