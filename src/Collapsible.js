import React, { useState } from 'react';
import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function Collapsible() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <button onClick={toggleOpen}>V</button>
      <MDBCollapse open={isOpen}>
      <DataTable >
    <Column header="Project Name"></Column>
    <Column header="Project Type"></Column>
    <Column header="Project end Date"></Column>
    <Column header="Allocation end Date"></Column>
    <Column header="Allocation extension"></Column>
</DataTable>
      </MDBCollapse>
    </>
  );
}