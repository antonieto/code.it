import React from 'react'
import {
  Grid,
  Box,
  Button,
  Typography,
  Menu,
  MenuItem,
  Fade,
} from '@mui/material';

import {
  Code
} from '@mui/icons-material';

const Navbar = () => {
  return (
    <Box >
      <Grid
        container
        fullWidth
        spacing={0}
        sx={{ background: '#353542', py: 1, borderRadius: "0px 0px 24px 24px" }}
      >
        <Grid
          xs={4}
          item
          display="flex"
        >
          <Typography
            variant="h4"
            component="h2"
            textAlign="center"
            fontWeight="medium"
            sx={{ color: "white", ml: 1 }}
          >
            <Code sx={{ fontSize: '40px' }}></Code>
            Code:it!
          </Typography>

        </Grid>
        <Grid
          xs={8}
          lg={4}
          item
          display="flex"
        >

        </Grid>
        <Grid
          xs={1}
          lg={3}
        />
        <Grid
          xs={1}
          item
          display="flex"
          justifyContent="end"
        >

        </Grid>
      </Grid>
    </Box>

  )
}

export default Navbar