import { useState } from 'react';
import './App.css';
import Category from './components/Category';

function App() {
  const [xepHang, setXepHang] = useState(0);
  const [dongPhuc, setDongPhuc] = useState(0);
  const [theHocSinh, setTheHocSinh] = useState(0);
  const [huyHieuDoan, setHuyHieuDoan] = useState(0);
  const [dauToc, setDauToc] = useState(0);

  return (
    <div className='App'>
      <Category title="Xếp hàng" field={xepHang} update={setXepHang} />
      <Category title="Đồng phục" field={dongPhuc} update={setDongPhuc} />
      <Category title="Thẻ học sinh" field={theHocSinh} update={setTheHocSinh} />
      <Category title="Huy hiệu đoàn" field={huyHieuDoan} update={setHuyHieuDoan} />
      <Category title="Đầu tóc" field={dauToc} update={setDauToc} />
    </div>
  );
}

export default App;
