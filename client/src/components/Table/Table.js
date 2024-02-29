import React, { useEffect, useState } from "react";
import { Link, useNavigate, redirect  } from "react-router-dom";
import { deleteService } from "~/services/deleteServices";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Table({ studentsData }) {
    const navigate = useNavigate();

    const calculateTotalGrade = (student) => {
        const { tk, gk, ck, th } = student;
        return (((tk * 2 / 10 + gk * 3 / 10 + ck * 5 / 10) * 2 + th) / 3).toFixed(2);
    };

    const [data, setData] = useState([]);
    // State to store student to be deleted
    const [studentToDelete, setStudentToDelete] = useState(null); 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await studentsData;
                setData(result);
            } catch (error) {
                console.error("Error fetching student data:", error);
            }
        };
        fetchData();
    }, [studentsData]);

    const onDeleteClick = (id) => {
        setShow(true);
        // Set the student to be deleted
        setStudentToDelete(id);
    };

    const handleDeleteConfirmation = async () => {
        try {
            await deleteService(studentToDelete);
            // Update data after successful deletion
            setData(data.filter((student) => student._id !== studentToDelete));
            navigate('/student/search');
            // redirect('/student');
            // Clear the studentToDelete state 
            setStudentToDelete(null);
        } catch (error) {
            console.error("Error deleting student:", error);
        }
    };

    return (
        <>
        <table className="table mt-5 mb-5">
            <thead className="table-success">
                <tr>
                    <th>MSSV</th>
                    <th>Họ Tên</th>
                    <th>Giữa Kỳ</th>
                    <th>Thường Kỳ</th>
                    <th>Thực Hành</th>
                    <th>Cuối Kỳ</th>
                    <th>Tổng</th>
                    <th>Giáo Viên Bộ Môn</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data.map((student) => (
                    <tr key={student._id}>
                        <td>{student.mssv}</td>
                        <td>{student.name}</td>
                        <td>{student.gk}</td>
                        <td>{student.tk}</td>
                        <td>{student.th}</td>
                        <td>{student.ck}</td>
                        <td>{calculateTotalGrade(student)}</td>
                        <td>{student.teacher}</td>
                        <td>
                            <Link
                                to={`/student/update/${student.mssv}`}
                                className="btn btn-outline-info btn-lg btn-block me-2"
                            >
                                Sửa
                            </Link>
                            {/* Button to set the student to delete */}
                            <Button variant="outline-warning " size="lg" onClick={() => onDeleteClick(student.mssv)}>
                                Xóa
                            </Button>
                            {/* Modal to confirm deletion */}
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Xóa Sinh Viên ?</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    Bạn chắc chắn muốn xóa sinh viên này? Sau khi xóa sẽ không thể khôi phục lại!!
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Đóng
                                    </Button>
                                    <Button variant="primary" onClick={handleDeleteConfirmation}>
                                        Xóa
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        
        </>
    );
}

export default Table;
