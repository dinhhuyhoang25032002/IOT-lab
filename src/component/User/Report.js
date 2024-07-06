
import { useRef } from 'react';
import generatePDF from 'react-to-pdf';
import companyLogo from '../../assets/bghomepage.jpg'
const Report = (props) => {
    const targetRef = useRef();
    // const [handleToPDF, targetRef] = usePDF({ filename: 'ReportPage.pdf' });
    return (
        <>
            <div className=" container-report">
                <div className="body-report" ref={targetRef} >
                    <div className="content-report">
                        <div className="title">
                            <span>Phiếu báo cáo kết quả thực hành </span>
                        </div>
                        <div className="practice">
                            <div className="name-practice">
                                <span>Tên bài:  </span>
                            </div>
                            <div className="time-practice">

                            </div>
                            <div className="teacher-name-manager">
                                <span>Giảng viên hướng dẫn</span>
                            </div>
                        </div>
                        <div className="infor-student">
                            <div className="name-student">
                                <span>Họ và tên:</span>
                            </div>
                            <div className="id-student">
                                <span>Mã sinh viên</span>
                            </div>
                            <div className="group">
                                <span>Nhóm</span>
                            </div>
                            <div className="class">
                                <span>Lớp</span>
                            </div>

                        </div>
                        <div className="result-practice">
                            <div class="input-group mb-3">
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="inputGroupFile02" />
                                    <label class="custom-file-label" for="inputGroupFile02">Choose file</label>
                                </div>

                            </div>
                        </div>
                    </div>
                    <img src={companyLogo} style={{ height: '140px', width: '140px' }} alt="BigCo Inc. logo" />
                </div>
                <button className="btn btn-primary"
                    onClick={() => generatePDF(targetRef, { filename: 'page.pdf' })}
                >Tải xuống và nộp</button>
            </div>
        </>
    );
}
export default Report;