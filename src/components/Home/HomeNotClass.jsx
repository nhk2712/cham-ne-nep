import "./HomeNotClass.css";

function HomeNotClass({ setClazz, setClazzDone }) {
    return (<>
        <label className="labelForm">Lớp:</label>
        <input className="inputText clazz" placeholder="12A1" type="text" onChange={(e) => { setClazz(e.target.value) }} />
        <button className="buttonForm" onClick={()=>{setClazzDone(true)}}>Xong</button>
    </>)
}

export default HomeNotClass;