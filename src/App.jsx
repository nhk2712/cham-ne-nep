import { useState } from 'react';
import './App.css';
import HomeClass from './components/Home/HomeClass';
import HomeNotClass from './components/Home/HomeNotClass';

function App() {
    const [clazz, setClazz] = useState("");
    const [clazzDone, setClazzDone] = useState(false);

    return (
        <div className='App'>
            <h3>Chấm nề nếp dưới sân</h3>
            {(clazzDone) ? <HomeClass clazz={clazz} /> : <HomeNotClass setClazz={setClazz} setClazzDone={setClazzDone} />}
        </div>
    );
}

export default App;
