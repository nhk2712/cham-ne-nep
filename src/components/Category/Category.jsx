import "./Category.css";

function Category({ title, field, update }) {
    if (title != "Xếp hàng") return (<>
        <tr className="categoryItem">
            <td className="categoryTitle">{title}</td>
            <td className="categoryValue">{field}</td>
            <td>
                <button className="buttonChange plus" onClick={() => { update(field + 1) }}>+</button>
                <button className="buttonChange minus" onClick={() => { update(field - 1) }}>-</button>
            </td>
        </tr>
    </>)
    else return (<>
        <div className="categoryItem">
            <span className="categoryTitle">{title}</span>
            <input className="inputText xepHang" placeholder="50" type="number" onChange={(e) => { update(e.target.value) }} />
        </div>
    </>)
}

export default Category;