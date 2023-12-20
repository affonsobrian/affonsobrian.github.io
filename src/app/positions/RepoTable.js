'use client';

import React from 'react';
import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from '@carbon/react';
import Link from 'next/link';

const RepoTable = ({ rows, headers }) => {
  const getRowDescription = (rowId) => {
    const row = rows.find(({ id }) => id === rowId);
    return row ? row.description : '';
  };

  return (
    <>
      <TableContainer
        title="Open Positions"
        description="A collection of the current open positions"
      ></TableContainer>
      <DataTable rows={rows} headers={headers}>
        {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <TableHeader key={header.id} {...getHeaderProps({ header })}>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id} {...getRowProps({ row })}>
                  {row.cells.map((cell) => (
                    <>
                      <TableCell key={cell.id}>{cell.id.endsWith('id') ? (
                        <>
                          <Link href={window.location.href.replace('positions', '') + "apply/?position=" + cell.value}>
                            Apply
                          </Link>
                          {console.log(row)}
                        </>
                      ) : (
                        <>
                          {cell.value}
                        </>
                      )}</TableCell>
                    </>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </DataTable>
    </>
  );
};

export default RepoTable;
