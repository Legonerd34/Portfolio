import React, { useState } from "react";
import Highlight from "react-highlight";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import AspectRatio from "@mui/joy/AspectRatio";


function Python(){

    const code = `
    import asyncio
    import random
    import time
    
    import pygame
    from pygame.locals import *
    
    random.seed(time.time())
    
    pygame.init()
    
    highScore = "0"
    height = 512
    width = 288
    
    clock = pygame.time.Clock()
    window = pygame.display.set_mode((width, height))
    pygame.display.set_caption("Flappy Bird - By Max Bushell ;))")
    
    class Base:
        x = 0
        y = 400
    
        def __init__(self, window):
            self.window = window
            self.image = None  
    
        async def load_assets(self):
            print("Loading base image...")
            self.image = pygame.image.load("base.png")
            print("Base image loaded.")
    
        def get_rect(self):
            if not self.image:
                print("Image not loaded yet!")
                return None
            return self.image.get_rect(topleft=(self.x, self.y))
    
        def render(self):
            if not self.image:
                print("Image not loaded yet!")
                return
            self.window.blit(self.image, (self.x, self.y))
    
    class Bird(Base):
        def __init__(self, window, x=50, y=256):
            self.x = x
            self.y = y
            self.velocity = 0  
            self.acceleration = 0.25  
            self.jump_strength = -5
    
            self.bird_upflap = None
            self.bird_downflap = None
            self.bird_midflap = None
            self.image = None
    
            self.window = window
    
            self.flap_timer = 0
            self.flap_interval = 0.15  
    
        async def load_assets(self):
            print("Loading bird images...")
            self.bird_upflap = pygame.image.load("redbird-upflap.png")
            self.bird_downflap = pygame.image.load("redbird-downflap.png")
            self.bird_midflap = pygame.image.load("redbird-midflap.png")
            self.image = self.bird_upflap  
            print("Bird images loaded.")
    
        def update(self):
            self.velocity += self.acceleration
            self.y += self.velocity
    
            now = pygame.time.get_ticks()
            if now - self.flap_timer > self.flap_interval * 1000:
                self.flap_timer = now
                if self.image == self.bird_upflap:
                    self.image = self.bird_midflap
                elif self.image == self.bird_midflap:
                    self.image = self.bird_downflap
                else:
                    self.image = self.bird_upflap
    
        def fall(self):
            self.velocity += self.acceleration
    
        def jump(self):
            self.velocity = self.jump_strength
    
        def get_rect(self):
            return self.image.get_rect(topleft=(self.x, self.y))
    
        def render(self):
            if not self.image:
                print("Image not loaded yet!")
                return
            self.window.blit(self.image, (self.x, self.y))
    
    class Pipes:
        highScore = "0"
    
        def __init__(self, window, width=288):
            self.x = 400
            self.y1 = random.randint(210, 400)
            self.y2 = random.randint(-300, -120)
            self.speed = 2.5
            self.width = width
            self.window = window
    
            self.top_pipe = None
            self.bottom_pipe = None
    
        async def load_assets(self):
            print("Loading pipe images...")
            self.top_pipe = pygame.image.load("pipe-green-top.png")
            self.bottom_pipe = pygame.image.load("pipe-green-bottom.png")
            print("Pipe images loaded.")
    
        def move(self):
            self.x -= self.speed
    
            if self.x + self.bottom_pipe.get_width() < 0 or self.x + self.top_pipe.get_width() < 0:
                self.x = self.width
                self.y2 = random.randint(-300, -125)
                self.y1 = random.randint(210, 395)
    
                if self.y2 - self.y1 < -30:
                    self.y2 = random.randint(-300, -125)
                    self.y1 = random.randint(210, 395)
                    print("Difference was too small; difference was adjusted.")
    
                self.speed += 0.05
                self.highScore = int(self.highScore) + 1
                self.highScore = str(self.highScore)
                print(self.highScore)
    
        def get_rect_top(self):
            return self.top_pipe.get_rect(topleft=(self.x, self.y2))
    
        def get_rect_bottom(self):
            return self.bottom_pipe.get_rect(topleft=(self.x, self.y1))
    
        def get_highScore(self):
            return self.highScore
    
        def render(self):
            if not self.top_pipe or not self.bottom_pipe:
                print("Images not loaded yet!")
                return
            self.window.blit(self.bottom_pipe, (self.x, self.y1))
            self.window.blit(self.top_pipe, (self.x, self.y2))
    
    class Scene:
        x = 0
        y = 0
    
        def __init__(self, window):
            self.window = window
            self.background = None
    
        async def load_assets(self):
            print("Loading background image...")
            self.background = pygame.image.load("background-night.png")
            print("Background image loaded.")
    
        def render(self):
            if not self.background:
                print("Background image not loaded yet!")
                return
            self.window.blit(self.background, (0, 0))
    
    
    scene = Scene(window)
    base = Base(window)
    pipes = Pipes(window)
    bird = Bird(window)
    
    async def main():
        global highScore
        await scene.load_assets()
        await base.load_assets()
        await pipes.load_assets()
        await bird.load_assets()
    
        bigFont = pygame.font.SysFont("Helvetica neue", 40)
        font = pygame.font.SysFont("Helvetica neue", 15)
    
        lightGreen = (153, 255, 204)
        black = (0, 0, 0)
    
        youLose = bigFont.render("You Lose!", True, lightGreen)
        playAgain = bigFont.render("Play Again?", True, lightGreen)
    
        fps_text = font.render("FPS: 0", True, (255, 255, 255))
    
        running = True
        hit_count = 0
    
        
        
        while running:
            for event in pygame.event.get():
                if event.type == QUIT:
                    running = False
                    print("quit event detected")
    
                if event.type == pygame.KEYDOWN:
                    if event.key == pygame.K_RETURN:
                        bird.jump()
    
        
            
            
            pipes.move()
            bird.update()
            bird.fall()
    
            bird_rect = bird.get_rect()
            base_rect = base.get_rect()
            pipe1 = pipes.get_rect_bottom()
            pipe2 = pipes.get_rect_top()
    
        
            if bird_rect.colliderect(pipe1) or bird_rect.colliderect(pipe2):
                hit_count += 1
                print(hit_count)
    
            if bird_rect.colliderect(base_rect):
                hit_count += 1 
                print(hit_count)
    
            scene.render()
            base.render()
            pipes.render()
            bird.render()
    
            if hit_count >= 1:
                highScore = pipes.get_highScore()
                print("The high score variable at the end was:", highScore)
                score = font.render("Your score was: " + highScore, True, black)
                window.blit(youLose, (10, 200))
                window.blit(playAgain, (10, 300))
                window.blit(score, (10, 350))
                pygame.display.update()
                clock.tick(60)
    
                await asyncio.sleep(3)  
    
                running = False
    
            
            fps = int(clock.get_fps())
            fps_text = font.render(f"FPS: {fps}", True, (255, 255, 255))
            window.blit(fps_text, (10, 10))
    
            await asyncio.sleep(0)
    
            
            pygame.display.update()
            clock.tick(60)
    
    asyncio.run(main())
    `;

    
    const [isLoaded, setIsLoaded] = useState(false);

    const load = () => {
        setIsLoaded(true);
        console.log("loaded");
    };

    const reload = () => {
        setIsLoaded(false); 
        setTimeout(() => setIsLoaded(true), 0); 
        console.log("reloaded");
    };
        

    
    return (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
            padding: 3,
            color: "white",
          }}
        >
          <Typography level="h1" sx={{ textAlign: "center", color: "white" }}>
            Flappy Bird
          </Typography>

          <Typography level="body-lg" sx={{ maxWidth: "800px", textAlign: "center", color: "lightgray" }}>
            This is my first proper project I completed, I chose a pre-existing game so that I could put into practise
            what I had already learnt in python. I challenged myself to make something without using any tutorials or input from
            others. It gave more confidence in my ablities to create real projects.
          </Typography>

          <Typography level="body-lg" sx={{ maxWidth: "800px", textAlign: "center", color: "lightgray" }}>
            Here is my version of Flappy Bird made in Python. To play, click the
            Load button to start. Use the Enter key to jump. If you lose, click the
            Reload button to restart.
          </Typography>
    
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button variant="solid" onClick={isLoaded ? reload : load}>
              {isLoaded ? "Re-load" : "Load"}
            </Button>
          </Box>
    
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 3,
              width: "100%",
              maxWidth: "1200px",
              alignItems: "flex-start",
            }}
          >
            <AspectRatio
              ratio="288/512"
              sx={{
                flex: 1,
                width: "100%",
                maxWidth: "600px",
                borderRadius: "md",
                overflow: "hidden",
                boxShadow: "md",
                maxHeight: "1000px",
              }}
            >
              {isLoaded && (
                <iframe
                  src="https://legonerd34.github.io/Portfolio/fboop2/build/web/index.html"
                  title="Flappy Bird Game"
                  style={{
                    width: "100%",
                    maxheight: "1000px",
                    border: "none",
                  }}
                  allowFullScreen
                />
              )}
            </AspectRatio>
    
            <Box
              sx={{
                flex: 1,
                backgroundColor: "#282c34",
                borderRadius: "md",
                padding: 2,
                boxShadow: "sm",
                maxHeight: "1000px",
                overflow: "auto",
              }}
            >
                
              <Highlight className="language-python">{code}</Highlight>
            </Box>
          </Box>
        </Box>
      );
}

export default Python;