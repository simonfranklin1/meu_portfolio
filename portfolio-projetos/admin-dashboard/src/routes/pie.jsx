import { Header, PieChart } from "../components"
import { Box } from "@mui/material"

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  )
}

export default Pie