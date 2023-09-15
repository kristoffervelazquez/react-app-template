import { Grid } from "@mui/material"
import { PropsWithChildren } from "react"

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: '', padding: 4 }}
    >
      <Grid item
        className="box-shadow"
        xs={3}
        sx={{ backgroundColor: 'secondary.main', padding: 3, borderRadius: 2, width: { md: 450 } }}
      >
        {/*Login/Register */}
        {children}
      </Grid >
    </Grid >
  )
}

export default AuthLayout