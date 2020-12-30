import React from "react";

import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core/";

const headers = ["Mat", "Runs", "Ave"]; //, "SR", "100", "50", "HS"];

const StatsTable = ({ data, type }) => {
  return (
    <div>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Matches</TableCell>
              <TableCell align="right">Runs</TableCell>
              <TableCell align="right">Average</TableCell>
              {/* <TableCell align="right">Strike Rate</TableCell>
              <TableCell align="right">100s</TableCell>
              <TableCell align="right">50s</TableCell>
              <TableCell align="right">HS</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {headers.map((headerType) => {
                return (
                  <TableCell align="right">
                    {data.batting.T20Is[headerType]}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default StatsTable;
