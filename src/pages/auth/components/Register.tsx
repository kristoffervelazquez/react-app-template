import { Button, Grid, TextField } from "@mui/material"


const Register = () => {

  return (
    <form>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <TextField label="Name" variant="filled" placeholder="Jhon" />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Last Name" variant="filled" placeholder="Due" />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Username" variant="filled" fullWidth placeholder="pepito32" />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Email" variant="filled" fullWidth type="email" placeholder="pepito@pepito.com" />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Password" variant="filled" fullWidth type="password" />
        </Grid>
        <Grid item xs={12} mt={2}>
          <Button variant="contained" fullWidth color="primary">Register</Button>
        </Grid>
      </Grid>
    </form>

  )
}

export default Register