import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Table from '~/components/Table/Table';
import { showAll } from "~/services/showListStudentServices";

function Home() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
      let data = showAll();
      setStudents(data);
    }, []);

    return ( 
      <div >
      <div class='container'>
        <div class='row'>
          <div class='col-md-12'>
            <br />
            <h2 class='display-4 text-center'>Danh sách sinh viên</h2>
          </div>

          <div class='col-md-11'>
            <Link
              to='/student/create'
              class='btn btn-lg btn-outline-warning float-right'
            >
              + Thêm sinh viên 
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div class='list'>
            {students.length === 0 ? <h4>Danh sách trống !!!</h4> : <Table studentsData={students}></Table> }
        </div>
      </div>
    </div>
  );
}

export default Home;