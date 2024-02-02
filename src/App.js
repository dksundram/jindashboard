import "bootstrap/dist/css/bootstrap.min.css";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import Table from "./Table";
import Sales from "./Sales.js";
import Sidebar from "./Sidebar.js";
import Collapsible from "./Collapsible.js";

function App() {
  return (
    <div className="App">
      <div></div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 my-5">
            <Sidebar />
          </div>
          <div className="col-10 my-5">
            <div className="heading">
              <h1>Timesheet</h1>
            </div>
            <div className="content">
              <div className="card">
                <h6>Allocation extension <Collapsible /> </h6>


              </div>
              <div className="card">
                <Table />
                <Sales />
                <span>
                  <button className="btn btn-primary">Save</button>
                  <button className="btn btn-danger">Submit</button>
                </span>
              </div>
            </div>

          </div>

        </div>







      </div>
    </div>

  );
}

export default App;
