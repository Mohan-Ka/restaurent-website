import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
        <Box sx={{
          my:15,
          textAlign:'center',
          p:2,
          "& h4=":{
            fontWeight:'bold',
            my:2,
            fontSize: '2rem',
          },
          "& p":{
            textAlign: "justify",
          },
          "@media (max-width:600px)":{
            mt:0,
            "& h4 ":{
              fontSize:'1.5rem',
              mb:3,
            }
          }
        }}
        >
          <Typography variant="h4">
            <b>Welcome To My Restaurant</b> 
          </Typography>
          <p>
          At MY RESTAURANT, we are passionate about food and hospitality. Established in [Year], our restaurant has been serving the [City] community with delicious cuisine and warm service for [X] years. Our mission is simple: to provide a memorable dining experience where every guest feels like family.

          </p>
          <br />
          <p>
          Step into MY RESTAURANT, and you'll embark on a culinary journey that celebrates the flavors of [Cuisine Type]. From our carefully crafted menu to our cozy and inviting atmosphere, we take pride in every detail. Whether you're here for a special celebration, a romantic dinner, or a casual meal with friends, we look forward to sharing our love for food with you. Come and savor the essence of MY RESTAURANT, where good food meets great company.
          </p>

        </Box>
    </Layout>
  )
}

export default About