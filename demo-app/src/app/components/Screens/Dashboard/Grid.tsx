import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
type Props = {
  data: any[];
};
const Grid: React.FC<Props> = ({ data }) => {
  if (data.length > 0) {
    return (
      <TableContainer>
        <Table>
          <TableHead className="bg-info text-white">
            <TableRow hover>
              <TableCell>Id</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Post</TableCell>
              <TableCell>Comments</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((i) => {
              return (
                <TableRow hover key={i.id}>
                  <TableCell>{i.id}</TableCell>
                  <TableCell>{i.title}</TableCell>
                  <TableCell>{i.body}</TableCell>
                  <TableCell>{i.comments.length}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  } else {
    return null;
  }
};

export default Grid;
