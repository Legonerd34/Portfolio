import React from "react";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Box from "@mui/joy/Box";
import Grid from "@mui/joy/Grid";

function Home() {
    const para = `
    I have always had an aptitude for computers and I have always been fascinated with technology. I built my first
    computer when I was 12 by watching YouTube and learning how things work. Since this time and many upgrades
    later my interest has moved on to the programming side of computing. I consider this to be more creative, more
    interesting and more challenging. This year I had the opportunity to do work experience at UBIO, a software
    development company owned by my Uncle who specialise in coding which provide customers, e.g. searching for
    hotel and flights, with availability of products 'scraped' from across the web. I found this to be really interesting
    and I am very keen to develop my skills in coding and ultimately a career in this field.
    After learning the basics at GCSE I sought to broaden my knowledge of programming with practical applications.
    I was disappointed not to have the opportunity to study A level computer science when the course was cancelled
    at the last minute but this has motivated me to develop my programming skills in my own time. I taught myself
    HTML so that I could create a website for a relative's consultancy work and have broadened my understanding of
    Python and JavaScript through online tutorials and courses. I am now in the process of developing a my own
    portfolio website to showcase my coding projects. I began by following tutorials but have moved on to writing my
    own code. During work experience I also learnt NodeScript, a low code node based visual programming language
    and have since used this for my own projects.
    showcase other skills. - communication, team working, independent working, fast learner, technical and logical
    thinking, benefits of taking maths and sciences to role - self motivated
    hobbies. - tennis, online gaming including setting up shared server platforms, rc cars and F1
    One thing I have done in the past is learning to use python. Some projects that I have made include, flappy bird
    and Wordle. When creating them I really enjoyed it as they made me sure in what I want to do. The skills I have
    learned using HTML have helped me to complete a 12 hour JavaScript course on YouTube, where I programmed
    many projects slowly increasing in complexity such as a clock, stopwatch, non-scientific calculator and a weather
    app able to find the weather in any city across the world. These projects will be added to my portfolio website
    alongside many more projects in the future. I have done work experience in the past in an IT repair shop which
    has sufficiently prepared me for a professional and hardworking atmosphere.
    Furthermore during my work experience with UBIO I created a few programs around the idea of web scraping.
    This includes a program which would predict the Wimbledon matches occurring that day and send you a
    scheduled email each day. Another automated email I created would scrape the web to find any new
    apprenticeships opening up if the field of software development. After familiarising myself with the AI powered
    web scraping tool I decided to make my own web scraper which inputted three ingredients and then would
    output different recipes that had those main ingredients. Overall my experience with UBIO has really solidified
    my choice to do this career in the future.
    Every week I play tennis and play in matches. This means I represent my local club against other clubs. This gives
    me determination and the will to improve. I put the same energy into my exams to ensure I receive the results I
    want. As a prefect in year 11 I had responsibilities like giving tours on open days and helping new students get
    situated into the school. This has given me skills in helping others and knowing which questions to ask. In this
    course I am most looking forward to improving my skills and create a vast portfolio of fun and interesting
    projects.
    `;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        padding: 4,
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      {/* Top Section: Personal Card + Project Description */}
      <Grid container spacing={4} sx={{ alignItems: "center" }}>
        {/* Personal Card */}
        <Grid xs={12} md={4}>
          <Card
            sx={{
              padding: 2,
              borderRadius: "md",
              boxShadow: "lg",
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: 200,
                aspectRatio: "1",
                mx: "auto",
                minHeight: 120,
                maxHeight: 200,
              }}
            >
              <Box
                component="img"
                src="https://avatars.githubusercontent.com/u/45531020?s=400&u=bfb4a77fa6798f9d08e1376f86063e6232e3281d&v=4"
                alt="profile"
                loading="lazy"
                sx={{
                  borderRadius: "50%",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <CardContent>
              <Typography level="h2" sx={{ textAlign: "center" }}>
                Max Bushell
              </Typography>
              <Typography level="body-md" sx={{ textAlign: "center" }}>
                A passionate developer with a love for coding and creative
                problem-solving.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Project Description */}
        <Grid xs={12} md={8}>
          <Box sx={{ padding: 2, }}>
            <Typography level="h1" sx={{ marginBottom: 2, color: "white" }}>
              My Projects
            </Typography>
            <Typography level="body-lg" sx={{ color: "lightgray" }}>
              Explore a collection of my projects that showcase my skills in
              various programming languages, frameworks, and tools. Each project
              reflects my dedication to learning and creating solutions that
              make an impact.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Large Paragraph Below */}
      <Box sx={{ marginTop: 4, width: "100%" }}>
        <Typography level="body-lg" sx={{ lineHeight: 1.8, color: "lightgray" }}>
            {para}
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;
