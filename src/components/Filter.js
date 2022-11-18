import React, { useState } from 'react'
import './Filter.css'
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

//Default priceList and property types
const priceList=["Rs.4000-Rs.6000", "Rs.6000-Rs.10000", "Rs.10000-Rs.15000"]
const pType=["Houses", "Villa", "PG", "Penthouse"]

const Filter = ({handleFilter,handleClearFilter}) => {

    //Default filter params
    const [filter, setFilter]=useState({
        city:"",
        date:dayjs(new Date()),
        price:"",
        type:""
    })

    //Generalised funnction to update onChange events
    const handleInput=(field)=>(event)=>{
        setFilter({
            ...filter,
            [field]:event.target.value
        })
    }

    //Querying the data
    const handleSearch=()=>{
        handleFilter(filter);
    }

    //Remove the filter
    const clearFilter=()=>{
        setFilter({
            city:"",
            date:dayjs(new Date()),
            price:"",
            type:""
        })
        handleClearFilter();
    }

  return (
    
    <div className='filter'>
        <h2>Filter properties</h2>
        <div className="filterData">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TextField id="City" label="City" variant="outlined" value={filter.city} onChange={handleInput("city")} />
                <DesktopDatePicker
                    label="Arrival date"
                    inputFormat="DD/MM/YYYY"
                    value={filter.date}
                    onChange={(newDate)=>{
                        setFilter({
                            ...filter,
                            date:newDate
                        })
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
                <FormControl sx={{minWidth: 120 }}>
                    <Select
                        labelId="price-label"
                        id="price"
                        value={filter.price}
                        label="Price"
                        displayEmpty
                        onChange={handleInput("price")}
                    >
                        <MenuItem value="">
                            <em>Price range</em>
                        </MenuItem>
                        {priceList.map((item)=>(
                            <MenuItem value={item} key={item}>{item}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl sx={{minWidth: 120 }}>
                    <Select
                        labelId="type-label"
                        id="type"
                        value={filter.type}
                        label="Property Type"
                        displayEmpty
                        onChange={handleInput("type")}
                    >
                        <MenuItem value="">
                            <em>Property Type</em>
                        </MenuItem>
                        {pType.map((item)=>(
                            <MenuItem value={item} key={item}>{item}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <button className='search' onClick={handleSearch}>Search</button>   
            </LocalizationProvider>
        </div>
        <div className="clear" onClick={clearFilter}>
            <p>Clear filter</p>
        </div>
    </div>
  )
}

export default Filter