import { Header } from "../components";
import { Box } from "@mui/material";
import { BarChart } from "../components";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="74vh">
        <BarChart />
      </Box>
    </Box>
  )
}

export default Bar