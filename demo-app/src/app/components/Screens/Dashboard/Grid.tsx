import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Fragment } from "react";
type Props = {
  data: any[];
};
const Grid: React.FC<Props> = ({ data }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead className="bg-info text-white">
          <TableRow hover>
            <TableCell>Id</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((i) => {
            console.log(i);

            return (
              <TableRow hover key={i.id}>
                <TableCell>{i.id}</TableCell>
                <TableCell>{i.title}</TableCell>
                <TableCell>{i.body}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Grid;
