import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateService } from "~/services/updateServices";
import { search } from "~/services/searchServices";


function UpdateStudent() {
    const navigate = useNavigate();
    const [student, setStudent] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await search(id);
                setStudent(result);
            } catch (error) {
                console.error("Error fetching student data:", error);
            }
        };

        fetchData();
    }, [id]);

    const onChange = (e) => {
        const typeNum = ['gk', 'tk', 'th', 'ck'];
        let value = e.target.value;
        if (e.target.name in typeNum) {
            value = parseFloat(typeNum[e.target.value]);
        } 
        setStudent({ ...student, [e.target.name]: value })
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setStudent(student);
        updateService(id, student);
        navigate("/student");
    }

    return ( 
        <div className="UpdateStudent">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <br />
                        <Link to="/student" className="btn btn-lg btn-outline-warning float-left">
                            Danh sách sinh viên
                        </Link>
                    </div>
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Thêm sinh viên</h1>
                        <p className="lead text-center">Thông tin sinh viên mới </p>
                        <form noValidate onSubmit={onSubmit}>
                            <div className="row g-3">
                                <div class="col-12">
                                    <input
                                        type="text"
                                        name="mssv"
                                        className="form-control form-control-lg"
                                        value={student.mssv}
                                        onChange={onChange}
                                    />
                                </div>
                                <div class="col-12">
                                    <input
                                        type="text"
                                        placeholder="Họ tên"
                                        name="name"
                                        className="form-control form-control-lg"
                                        value={student.name}
                                        onChange={onChange}
                                    />
                                </div>
                                <div class="col-md-3">
                                    <input
                                        type="text"
                                        placeholder="Điểm giữa kỳ"
                                        name="gk"
                                        className="form-control form-control-lg"
                                        value={student.gk}
                                        onChange={onChange}
                                    />
                                </div>
                                <div class="col-md-3">
                                    <input
                                        type="text"
                                        placeholder="Điểm thường kỳ"
                                        name="tk"
                                        className="form-control form-control-lg"
                                        value={student.tk}
                                        onChange={onChange}
                                    />
                                </div>
                                <div class="col-md-3">
                                    <input
                                        type="text"
                                        placeholder="Điểm thực hành"
                                        name="th"
                                        className="form-control form-control-lg"
                                        value={student.th}
                                        onChange={onChange}
                                    />
                                </div>
                                <div class="col-md-3">
                                    <input
                                        type="text"
                                        placeholder="Điểm cuối kỳ"
                                        name="ck"
                                        className="form-control form-control-lg"
                                        value={student.ck}
                                        onChange={onChange}
                                    />
                                </div>
                                <div class="col-12">
                                    <input
                                        type="text"
                                        placeholder="Giảng viên"
                                        name="teacher"
                                        className="form-control form-control-lg"
                                        value={student.teacher}
                                        onChange={onChange}
                                    />
                                </div>
                                <div class="col-12">
                                    <input
                                        type="text"
                                        placeholder="Ghi chú"
                                        name="description"
                                        className="form-control form-control-lg"
                                        value={student.description}
                                        onChange={onChange}
                                    />
                                </div>
                                <div class="col-12">
                                    <button
                                        type="submit"
                                        className="btn btn-lg btn-outline-warning btn-block mt-4 mb-4 w-100"
                                    >
                                        Cập nhật
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateStudent;