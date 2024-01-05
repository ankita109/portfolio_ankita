import React from 'react';
import Card from './Card';


const Academics = () => {
    return <>
    <h1 className='component-heading' >Academics</h1>
        <div style={{fontWeight:'bolder', minHeight :'30rem'}}>
        <div className="container-fluid">
            <div className="row" >
                <div className="col-10 top-elements" style={{marginTop: '3rem', width: '100%'}} >
                    <div className="row gy-4">   
            <Card key='1' title='10th : 10 CGPA' time='2016-17' institute='VPM Gyan Niketan School' value='100'  />
            <Card key='2' title='12th : 79%' time='2017-19' institute='VPM Gyan Niketan School' value='79'/>
            <Card key='3' title='Graduation : 8.04 CGPA' time='2020-24' institute='Lovely Professional University' value='80'/>
        </div>
        </div>
        </div>
        </div>
        </div>
    </>
}

export default Academics;