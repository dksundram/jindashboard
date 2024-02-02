import React, { useState } from "react";
function TableRows({ rows, tableRowRemove, onValUpdate }) {
  return rows.map((rowsData, index) => {
    const { project_type, project_name, task, comment, day1, day2, day3, day4, day5, day6, day7, total } = rowsData;
    return (
      <tr key={index}>
        <td>
          Sales Activity
        </td>

        <td>
          <select name="project_name" id="project_name" onChange={(event) => onValUpdate(index, event)} className="form-control">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </td>
        <td>
          <select name="task" onChange={(event) => onValUpdate(index, event)} className="form-control">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </td>
        <td>
          <input
            type="text"
            value={comment}
            onChange={(event) => onValUpdate(index, event)}
            name="comment"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={day1}
            onChange={(event) => onValUpdate(index, event)}
            name="day1"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={day2}
            onChange={(event) => onValUpdate(index, event)}
            name="day2"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={day3}
            onChange={(event) => onValUpdate(index, event)}
            name="day3"
            className="form-control"
          />
        </td>

        <td>
          <input
            type="text"
            value={day4}
            onChange={(event) => onValUpdate(index, event)}
            name="day4"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={day5}
            onChange={(event) => onValUpdate(index, event)}
            name="day5"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={day6}
            onChange={(event) => onValUpdate(index, event)}
            name="day6"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={day7}
            onChange={(event) => onValUpdate(index, event)}
            name="day7"
            className="form-control"
          />
        </td>

        <td>
          <input
            type="text"
            value={total}
            onChange={(event) => onValUpdate(index, event)}
            name="total"
            className="form-control"
          />
        </td>
        <td>
          <button
            className="btn btn-dark"
            onClick={() => tableRowRemove(index)}
          >
            -
          </button>
        </td>
      </tr>
    );
  });
}
function Sales() {
  const [rows, initRow] = useState([]);
  const addRowTable = () => {
    const data = {
      project_name: "",
      task: "",
      comment: "",
      day1: "",
      day2: "",
      day3: "",
      day4: "",
      day5: "",
      day6: "",
      day7: "",
      total: "",
    };
    initRow([...rows, data]);
  };
  const tableRowRemove = (index) => {
    const dataRow = [...rows];
    dataRow.splice(index, 1);
    initRow(dataRow);
  };
  const onValUpdate = (i, event) => {
    const { name, value } = event.target;
    const data = [...rows];
    data[i][name] = value;
    initRow(data);
  };
  return (
    <>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Project Type</th>
            <th>Project Name</th>
            <th>Task</th>
            <th>Comment</th>
            <th>Mon 05</th>
            <th>Tue 05</th>
            <th>Wed 05</th>
            <th>Thu 05</th>
            <th>Fri 05</th>
            <th>Sat 05</th>
            <th>Sun 05</th>
            <th>Total</th>
            <th>
              <button className="btn btn-danger" onClick={addRowTable}>
                +
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <TableRows
            rows={rows}
            tableRowRemove={tableRowRemove}
            onValUpdate={onValUpdate}
          />
        </tbody>
      </table>
    </>
  );
}
export default Sales;