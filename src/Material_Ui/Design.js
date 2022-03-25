import React from 'react'
import { Button, Grid, Card, CardActions, CardContent, Typography } from '@mui/material';
import AppBlockingIcon from '@mui/icons-material/AppBlocking';
function Design() {
  return (
    <div>
      {/* <Button variant='contained' color='success' size="large" startIcon={<AppBlockingIcon/>}>Click Me</Button> */}

      {/* <Grid container style={{border:"3px solid red"}}>
    <Grid item xs={12} md={6} lg={4} style={{border:"3px solid green"}}>
      col-1
    </Grid>
    <Grid item xs={6} md={12} lg={8} style={{border:"3px solid green"}}>
      col-2
    </Grid>
    <Grid item style={{border:"3px solid green"}}>
      col-3
    </Grid>
    </Grid> */}


      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardContent>
              <Typography>
                Title
              </Typography>
              <Typography>
                Cards are surfaces that display content and actions on a single topic.
                They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="secondary" variant='contained'>Read More</Button>
            </CardActions>
          </Card>
        </Grid>
        {/* 2nd card */}
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardContent>
              <Typography> 
                Title-2
              </Typography>
              <Typography>
                Cards are surfaces that display content and actions on a single topic.
                They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="secondary" variant='contained'>Read More</Button>
            </CardActions>
          </Card>
        </Grid>
        {/* 3rd card */}
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardContent>
              <Typography>
                Title-3
              </Typography>
              <Typography>
                Cards are surfaces that display content and actions on a single topic.
                They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="secondary" variant='contained'>Read More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default Design