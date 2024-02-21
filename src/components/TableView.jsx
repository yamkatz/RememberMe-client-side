import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Grid,
  Box,
} from "@mui/material";
import { useMediaQuery } from "react-responsive";

const TableView = ({ data }) => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 600px)" });

  const regularModeStyles = {
    maxHeight: "350px",
    overflowY: "auto",
    overflowX: "hidden",
  };

  const responsiveModeStyles = {
    maxHeight: "250px",
    overflowY: "auto",
    overflowX: "auto",
  };

  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

  return (
    <Grid item xs={12}>
      {isPortrait && (
        <Box
          style={{
            textAlign: "center",
            padding: "10px",
            background: "orange",
          }}
        >
          Please rotate your device for a better viewing experience.
        </Box>
      )}
      <Grid item xs={12}>
        <Box style={isSmallScreen ? responsiveModeStyles : regularModeStyles}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Middle Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Moshav/Kibutz</TableCell>
                <TableCell>Casualties of War</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row._id}>
                  <TableCell>{row.name.first}</TableCell>
                  <TableCell>{row.name.middle}</TableCell>
                  <TableCell>{row.name.last}</TableCell>
                  <TableCell>{row.age}</TableCell>
                  <TableCell>{row.city}</TableCell>
                  <TableCell>{row.casualtiesOfWar}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TableView;
