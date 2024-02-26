import React, { useState } from 'react';
import {search} from '~/services/searchServices';
import { useQuery } from '@tanstack/react-query';

const StudentPage = () => {
  const [searchId, setSearchId] = useState('');
  const [studentData, setStudentData] = useState(null);

  // const { data: studentDataFromQuery, isSuccess, refetch } = useQuery({
  //   queryKey: ['student', searchId],
  //   queryFn: () => search(searchId),
  //   enabled: false, // Set to true to enable fetching on component mount or update
  // });

  // useEffect(() => {
  //   if (isSuccess && studentDataFromQuery) {
  //     setStudentData(studentDataFromQuery);
  //   }
  // }, [isSuccess, studentDataFromQuery]);

  const fetchData = async () => {
    try {
        const result = await search(searchId);
        setStudentData(result);
        console.log(result);
    } catch (error) {
        console.error("Error fetching student data:", error);
    }
};

  const handleSearch = () => {
    // refetch();
    fetchData();
    setSearchId("");
  };


  return (
    <div>
      <h2 style={{ textAlign: 'center', margin: '30px 0' }}><b>TÌM KIẾM THÔNG TIN SINH VIÊN</b></h2>
      <div class="d-flex justify-content-center">
        <input
          class="mb-3 mt-3 p-2 form-control"
          style={{width: '400px', height: '36px', fontSize: '1.2rem'}}
          type="text"
          id="searchId"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          placeholder='Nhập MSSV cần tìm kiếm...'
        />
        <button class="mb-3 mt-3 ms-1 btn" style={{ backgroundColor: '#41e0fd', border: 'none', fontSize: '1.2rem', fontWeight: '600'}} onClick={handleSearch}>Tìm kiếm</button>
      </div>
      
      {studentData ? (
        <table class="table mt-5 mb-5">
        <thead class="table-success">
          <tr>
            <th>MSSV</th>
            <th>Name</th>
            <th>Giữa Kỳ</th>
            <th>Thường Kỳ</th>
            <th>Thực Hành</th>
            <th>Cuối Kỳ</th>
            <th>Tổng</th>
            <th>Giáo Viên Bộ Môn</th>
          </tr>
        </thead>
        <tbody>
          <tr key={studentData._id}>
          <td>{studentData.mssv}</td>
           <td>{studentData.name}</td>
           <td>{studentData.gk}</td>
           <td>{studentData.tk}</td>
           <td>{studentData.th}</td>
           <td>{studentData.ck}</td>
           <td>{((studentData.tk*2/10+studentData.gk*3/10+studentData.ck*5/10)*2+studentData.th)/3}</td>
           <td>{studentData.teacher}</td>
          </tr>
        </tbody>
      </table>
      ) : (
        <h3 style={{textAlign: 'center', marginTop: '16px'}}>Kết quả trống</h3>
      )}
    </div>
  );
};

export default StudentPage;
