import React, {useEffect, useState} from 'react'
import { getPosts } from '../../services/getFilters';
import Card from '../Card';

//styles 

import './Filters.css';

const FiltersNav = () => {

    


 const [content, setContent] = useState([]);
 const [arrayFilter, setArrayFilter] = useState([]);
/*  const [weekArray, setWeekArray] = useState([]);
 const [monthArray, setMonthArray] = useState([]);
 const [yearArray, setYearArray] = useState([]); */

 const [loading, setLoading] = useState(false);


useEffect (() => {

    const get = async() => {

        const response = await getPosts();
        const arrayResponse = Object.values(response)
            console.log(arrayResponse)
        setContent(arrayResponse)
        
    }

    get()

}, [])

// get Date
const date = new Date();



// Current Week
const currentWeek = () => {

    let currentDate = new Date();
    let oneJan = new Date(currentDate.getFullYear(), 0, 1);
    let numberOfDays = Math.floor((currentDate - oneJan) / (24 * 60 * 60 * 1000));
    let result = Math.ceil((currentDate.getDay() + 1 + numberOfDays) / 7);
    return result;
    // console.log(result, 'semana');

}

// week filter
const weekFilter = (response) => {

    let weekArray = [];
    let week = currentWeek();
    console.log(week, 'La semana actual')


    console.log(response);
    response.forEach((element) => {

        console.log(element.datePublication.week);
        if (element.datePublication.week === 44) {
            weekArray.push(element);
        }

    });
    setArrayFilter(weekArray);
    setLoading(true);
}

/* Month Filter */

const monthFilter = (response) => {

    let monthArray = [];
    let month = date.getUTCMonth() + 1;
    console.log(month)

    response.forEach((element) => {

        if (element.datePublication.month === 11 ) {
            monthArray.push(element);
        }

    });

    setArrayFilter(monthArray);
    setLoading(true);

}

/* Year Filter */
const yearFilter = (response) => {

    let yearArray = [];
    let year = date.getUTCFullYear();

    response.forEach((element) => {

        if (element.datePublication.year === 2021) {
            yearArray.push(element);
        }

    });

    setArrayFilter(yearArray);
    setLoading(true)

}

// handlers
const handleRelevant = () => {
    
    setArrayFilter(content[0]);
    
} 

const handleLatest = () => {
    
    content[0]?.sort((a, b) => {
        console.log(a.datePublication.miliseconds - b.datePublication.miliseconds);
        return b.datePublication.miliseconds - a.datePublication.miliseconds;
    })
    setArrayFilter(content[0]);
    
} 

const handleTop = () => {
    console.log('Muestra el top')
} 

const handleWeek = () => {

    weekFilter(content[0])

    if(loading) {

        arrayFilter.sort((a, b) => {
            return b.likes - a.likes;
        })

        setLoading(false);
        
        console.log(arrayFilter)
        
    }
    

}

const handleMonth = () => {

    monthFilter(content[0])

    if(loading) {

        arrayFilter.sort((a, b) => {
            return b.likes - a.likes;
        })

        setLoading(false);
        
       
    }
    
}

const handleYear = () => {

    yearFilter(content[0])

    if(loading) {

        arrayFilter.sort((a, b) => {
            return b.likes - a.likes;
        })

        setLoading(false);
        
    }
    
}

/* console.log(weekArray)
console.log(monthArray) */
console.log(arrayFilter)

    return (

        <>
            <nav className='container-filters'>
                <div className='left-filters'>  
                    <div className='filter-element' onClick={handleRelevant}content> Relevant </div>
                    <div className='filter-element' onClick={handleLatest}> Latest </div>
                    <div className='filter-element' onClick={handleTop}> Top </div>
                </div>

                <div className='right-filters'>  
                    <div className='filter-element' onClick={handleWeek}> Week </div>
                    <div className='filter-element' onClick={handleMonth}> Month </div>
                    <div className='filter-element' onClick={handleYear}> Year </div>
                </div>
            </nav>

            {
                arrayFilter.map((item) => (
                <Card key={item._id} id={item._id} comments={item.comments} content={item.content} coverImage={item.coverImage} image={item.image} likes={item.likes} tags={item.tags} title={item.title} user={item.user} userImg={item.userImg} datePublication={item.datePublication} />
                ))
            }

</>
            
);

            
}

export default FiltersNav;