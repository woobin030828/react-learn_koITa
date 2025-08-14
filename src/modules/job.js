import { handleActions } from "redux-actions"

const intialState = {
    jobs: {
        developer : {
            name: "홍길동",
            skills : ["React.js", "JavaScript"]
        },
        planner : {
            name: "장보고",
            skills : ["Excel", ""]
        }
    }
}

const jobs = handleActions({
    
}, intialState)

export default jobs;