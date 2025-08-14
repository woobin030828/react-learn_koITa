import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';

const IntroContainer = () => {

    const {jobs} = useSelector((state) => state.jobs)
    // url?key=value : 쿼리스트링
    const [searchParams] = useSearchParams() //쿼리스트링 값을 조회함
    const job = searchParams.get("jobs")
    console.log(!job)
    const result = () => {
        if (job === null) {
            console.log("false 실행")
            return (<div>
                <Link to={"/intro?job=developer"}>개발자 소개 페이지 이동</Link>
                <Link to={"/intro?job=planner"}>기획자 소개 페이지 이동</Link>
            </div>)
        } else {
            console.log("true 실행")
            const {name, skills} = jobs[job]
            const skillList = skills.map((skill) => <li>{skill}</li>)
            console.log(job)

            return (<div>
                <div>{name} : {job} </div>
                <div>{skillList}</div>
            </div>)
        }
    }
    
    
    return (
        <div>
            인트로
            <div>
                {result()}
            </div>
        </div>
    );
};

export default IntroContainer;