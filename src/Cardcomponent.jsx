
import React from 'react';
import "./App.css";
import data from './data.json';
import "bootstrap/dist/css/bootstrap.min.css";
import { FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa';

const Card = ({ company, location, jobType, salary, jobMode,city}) => (
    <div className="card mb-3 " id="a-6">
        <div className="card-body">
            <h2 className="card-title text-black">{company}</h2>
            <p className="card-text text-muted">{location}</p>
            <div className="d-flex  align-items-center">
                <FaMapMarkerAlt className="text-muted" />
                <p className="card-text">{jobMode === 'حضوری' ? 'حضوری' : 'غیر حضوری'}</p>
            </div>
            <div className="d-flex  align-items-center">
                <FaDollarSign className="text-muted" />
                <p className="card-text">{salary}</p>
            </div>
            <div className="d-flex mt-3" id="a-5">
                <div className="p-2 bg-light " id="a-3">
                    <p className="card-text">{jobType}</p>
                </div>
                <div className="p-2 bg-light  ms-2" id="a-3">
                    <p className="card-text">{city}</p>
                </div>
            </div>
        </div>
    </div>
);

const CardComponent = () => {
    return (
        <div className="container">
            {data.map((item, index) => (
                <Card
                    key={index}
                    company={item.company}
                    location={item.location}
                    jobType={item.jobType}
                    salary={item.salary}
                    jobMode={item.jobMode}
                    city={item.city}
                />
            ))}
        </div>
    );
};

export default CardComponent;