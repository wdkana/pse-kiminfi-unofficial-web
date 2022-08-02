import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { BoxContent, Content } from './Styled/Content';
import Pagination from "react-js-pagination";
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const List = ({ registrar, setPage }) => {
  const [activePage, setActivePage] = useState(1)

  let last;
  if ((registrar.data.length * registrar.meta.page.currentPage) > registrar.meta.page.total) {
    last = true
  }
  const handlePagination = (number) => {
    setPage(number)
    setActivePage(number)
  }

  return (
    <BoxContent c>
      <h4>Berikut adalah daftar PSE {registrar.option} yang kamu cari</h4>
      <Content fw np mb10={10}>
        <Table>
          <Thead>
            <Tr>
              <Th style={{ padding: 8 }}>Nama</Th>
              <Th>Web</Th>
              <Th>Tgl</Th>
            </Tr>
          </Thead>
          <Tbody>
            {!last && registrar.data.map((result, i) => {
              if (!result) return
              return (
                <Tr key={i} style={{ fontSize: 14, textTransform: "lowercase", wordBreak: "break-all" }}>
                  <Td style={{ padding: 8 }}>{result.attributes.nama}</Td>
                  <Td >{result.attributes.website}</Td>
                  <Td style={{ textAlign: "center" }}>{result.attributes.tanggal_daftar}</Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
        <div style={{ padding: 10, width: "100%" }}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: 16 }}>
            <Pagination
              activePage={activePage}
              itemsCountPerPage={last ? registrar.data.length : registrar.meta.page.perPage}
              totalItemsCount={registrar.meta.page.total - 1}
              onChange={(e) => handlePagination(e)}
            />
          </div>
        </div>
      </Content>
    </BoxContent >
  )
}

export default List