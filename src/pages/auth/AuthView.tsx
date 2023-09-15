
import React, { useState } from "react"
import { Box, Grid, Tab, Typography } from "@mui/material"
import { TabContext, TabList, TabPanel } from "@mui/lab"
import AuthLayout from "../../components/layout/AuthLayout"
import Register from "./components/Register"
import Login from "./components/Login"
import { Link } from "react-router-dom"


const AuthView = () => {
  const [activeTab, setActiveTab] = useState('login')

  const handleActiveTab = (_: React.SyntheticEvent, newValue: string) => { // ts-ignore
    setActiveTab(newValue)
  }
  return (
    <AuthLayout>
      <Box sx={{ width: '100%' }}>
        <TabContext value={activeTab}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleActiveTab} variant="fullWidth">
              <Tab label="Login" value="login" />
              <Tab label="Register" value="register" />
            </TabList>
          </Box>
          <TabPanel value="login"><Login /></TabPanel>
          <TabPanel value="register"><Register /></TabPanel>
        </TabContext>
        <Grid>
          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Typography>Forgot your password? <Link to="/auth/forgot-password">Reset it here</Link></Typography>
          </Box>

        </Grid>
      </Box>

    </AuthLayout>
  )
}

export default AuthView