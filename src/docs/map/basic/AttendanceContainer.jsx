import React from 'react';
import Attendance from './Attendance';

  const attendanceData = [
    { id: 1, name: "이승참", isPresent: true },
    { id: 2, name: "유한미", isPresent: false },
    { id: 3, name: "김정술", isPresent: true },
    { id: 4, name: "이영성", isPresent: false },
    { id: 5, name: "최무빈", isPresent: true },
    { id: 6, name: "김태희", isPresent: false },
    { id: 7, name: "최중서", isPresent: true },
    { id: 8, name: "정승훈", isPresent: false },
    { id: 9, name: "조예설", isPresent: true },
    { id: 10, name: "이현길", isPresent: true },
    { id: 11, name: "송병궁", isPresent: true },
    { id: 12, name: "배승둘", isPresent: true },
    { id: 13, name: "박응규", isPresent: true },
    { id: 14, name: "당긴철", isPresent: true },
  ];

  const result = attendanceData.map((student, i) => <Attendance key={i} student={student}/>)

const AttendanceContainer = () => {
    return (
        <div>
            <ul>{result}</ul>
        </div>
    );
};

export default AttendanceContainer;