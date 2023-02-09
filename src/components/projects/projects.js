import React from "react";
import "./projects.css";

import {
  Typography,
  Button,
  Container,
  Stack,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import ImageOne from "../../assests/blog.jpg";

import { HeadingCentered } from "../utils/headingCentered";

const projects = [
  {
    image: ImageOne,
    title: "Computer science blog",
    description: "Started soarwithcode.com in the last quater of 2022 to document ✍ my learning Journey in computer science. On this blog I write about frontend development, algorithms and datastructures and computer science concepts.",
    alt:'cs blog',
    url: "https://soarwithcode.com/",
  },
];

export const Projects = () => {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
      <div className="projects" id="projects">
        <HeadingCentered text={"Projects"} />

        <Container maxWidth={isSmallScreen?'lg':"md"} sx={{ marginTop: "50px" }}>
          <Stack direction={"column"} spacing={4}>
            {
                projects.map((project, index)=> <Card key={index} sx={{maxWidth:800}}>
                <Stack direction={isSmallScreen?'column':'row'}>
                    <Box width={isSmallScreen?'100%':'50%'} sx={{padding:'2rem 1rem', order:isSmallScreen?'2':'1' }} >
                        <CardContent >
                            <Typography color={'secondary'} variant={isSmallScreen?'h5':'h4'}>
                                {project.title}
                            </Typography>
                            <Typography color={'secondary'} variant={isSmallScreen?'subtitle1':'h6'} component={'p'} sx={{marginTop:'20px'}}>
                             {project.description}
                            </Typography>
                        </CardContent>

                        <CardActions>
                            <Button target={'_blank'} href={project.url} variant='outlined' color='secondary' sx={{borderRadius:10}}>
                                View Project
                            </Button>
                        </CardActions>
                    </Box>
                    <Box width={isSmallScreen?'100%':'50%'} sx={{order:isSmallScreen?'1':'2'}}>
                        <CardMedia image={project.image} sx={{height:'100%', width:'100%'}} component='img'  title={project.alt}/>
                    </Box>
                </Stack>
            </Card>)
            }
          </Stack>
        </Container>
      </div>
    </>
  );
};
