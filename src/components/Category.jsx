function Category({ title, field, update }) {
    if (title != "Xếp hàng") return (<>
        <div>
            <h3>{title}</h3>
            <p>{field}</p>
            <div>
                <button onClick={() => { update(field + 1) }}>Cộng 1</button>
                <button onClick={() => { update(field - 1) }}>Trừ 1</button>
            </div>
        </div>
    </>)
    else return (<>
        <div>
            <h3>{title}</h3>
            <input type="number" onChange={(e) => { update(e.target.value) }} />
        </div>
    </>)
}

export default Category;