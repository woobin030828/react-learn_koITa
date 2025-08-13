import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

const IntroContainer = () => {

    const {jobs} = useSelector((state) => state.jobs)
    // url?key=value : 쿼리스트링
    const [searchParams] = useSearchParams() //쿼리스트링 값을 조회함
    
    const job = searchParams.get("jobs")
    const {name, skills} = jobs[job]
     const skillList = skills.map((skill) => <li>{skill}</li>)
    console.log(job)
    
    return (
        <div>
            인트로
            <div>
        <div>{name} : {job} </div>
        <div>{skillList}</div>
    </div>
        </div>
    );
};

export default IntroContainer;