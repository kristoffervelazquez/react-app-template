import { Button, Grid, TextField } from "@mui/material"

const Login = () => {
  return (
    <form>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField label="Email" variant="filled" fullWidth type="email" placeholder="pepito@pepito.com" />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Password" variant="filled" fullWidth type="password" />
        </Grid>
        <Grid item xs={12} mt={2}>
          <Button variant="contained" fullWidth color="primary">Login</Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default Login