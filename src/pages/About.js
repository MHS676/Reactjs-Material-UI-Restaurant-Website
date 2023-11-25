import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box sx={{my: 15, 
      textAlign: "center", 
      p:2, 
      "& h4":{fontWeight: 'bold', 
      my:2, 
      fontSize: '2rem'}, 
      "& p":{textAlign: "justify"},
        "@media (max-width: 600px)": {
          mt: 0,
          "& h4": {
            fontSize: "1.5rem",
          }
        }
      }}>
        <Typography variant='h4'>
          Welcome to My Restaurant
        </Typography>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora a animi ipsum id praesentium, excepturi aut dicta voluptas aliquid, nulla hic? Alias, odit! Voluptates mollitia cupiditate expedita error itaque autem saepe odit modi quis natus cum nihil distinctio accusamus quam dignissimos quia rerum non consequatur eligendi esse nulla ipsum, in doloribus. Deleniti pariatur provident dolor, debitis illum aliquid facilis molestias officia adipisci cumque aut, velit laboriosam perspiciatis qui autem labore optio, possimus iste est doloremque voluptate dolore natus! Qui illum autem quidem tenetur ratione velit dolore blanditiis ullam, quibusdam dignissimos, animi harum earum repellendus amet fugiat iste assumenda modi deserunt.
        </p>
        <br />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem laudantium repellat odit dolorum aut eveniet quis quasi ad consequatur delectus at praesentium asperiores adipisci temporibus rerum aliquid, ipsum accusantium enim officiis vel iusto. Id alias quisquam quae sit natus iste a impedit quasi, similique magni veritatis molestias ipsa, minima repellendus deleniti rerum blanditiis beatae repellat fugiat amet debitis. Voluptatem cupiditate illum impedit facere rem accusamus modi, quis perspiciatis nihil optio similique unde minima alias velit pariatur odit consectetur saepe. Distinctio laboriosam id asperiores est voluptates, expedita nihil pariatur optio dolorum odit nam aspernatur sunt in voluptas a voluptatem maiores accusantium.
        </p>
      </Box>
    </Layout>
  )
}

export default About
