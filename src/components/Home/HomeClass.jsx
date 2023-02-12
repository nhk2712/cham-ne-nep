import { useState } from "react";
import Category from "../Category/Category";
import "./HomeClass.css";

function HomeClass({ clazz }) {
    const [xepHang, setXepHang] = useState(0);
    const [dongPhuc, setDongPhuc] = useState(0);
    const [theHocSinh, setTheHocSinh] = useState(0);
    const [huyHieuDoan, setHuyHieuDoan] = useState(0);
    const [dauToc, setDauToc] = useState(0);

    return (<>
        <div>
            <p>Lớp: <span className="clazzField">{clazz}</span></p>
            <Category title="Xếp hàng" field={xepHang} update={setXepHang} />
            <table><tbody>
            <Category title="Đồng phục" field={dongPhuc} update={setDongPhuc} />
            <Category title="Thẻ học sinh" field={theHocSinh} update={setTheHocSinh} />
            <Category title="Huy hiệu đoàn" field={huyHieuDoan} update={setHuyHieuDoan} />
            <Category title="Đầu tóc" field={dauToc} update={setDauToc} />
            </tbody></table>
        </div>
    </>)
}

export default HomeClass;