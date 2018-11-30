<template>
<!-- had to create a div to wrap everything in for this page to fully load-->
  <div class="portfolioPage">
    <nav class="nav-wrapper indigo">
    <div class="container">
     <a href="#" class="logo" id="logoSize">Portefeuille Numéro Trois</a>
      <ul class="right">
        <li><a href="#" id="font">About</a></li>
        <li><a href="#" id="font">Portfolio</a></li>
        <li> 
            <!-- added anchor for quick jump to section for mobile -->
            <a href="#anchor1" class="item scrollLink" id="autoscroll">
              Connect 
            </a>
        </li>
      </ul>
    </div>
    <!-- <h5 class="vertical align">The Man, The Myth, Your Future Design Legend</h5> -->
  </nav>

<!-- profile image and little blurb -->
  <div class="container">
    <div class="row">
      <div class="col 3">
          <br>
        <img src="https://lh3.googleusercontent.com/-726bM_PuZ9s/ViVM7xq4UJI/AAAAAAAAAF8/9vKvc5kmWhEg6i1GAPMbxim8yGYeT5CDQCEwYBhgL/w139-h140-p/IMG_3364***.jpg" class="circle" alt="Jared Spears Profile Pic">
      </div>
      <div class="col 3 ">
            <h1 class="header" id="font">Jared Spears</h1>
      </div>
      <div class="col 6 right" id="font">
          <br><br>
        <h5 >Web Designer</h5>
        <p>Designing your UI Dreams</p>
      </div>
    </div>
  </div>

    <!-- parallax 1 -->
    <div class="parallax-container">
      <div class="parallax">
        <img src="https://images8.alphacoders.com/601/thumb-1920-601500.jpg">
      </div>
    </div>

    <!-- about me information  -->
    <div class="section indigo" id="fontColor">
        <div class="row container">
            <h3 id="font">About Me:</h3>
            <p id="fontColor"  >The programming adventure iniciated in the oddest
                of places, middle school. Albeit not when I was in
                middle school, but rather teaching middle school
                technology! Suprise, my students kept me on my
                toes with their tech saviness, and so was born a
                passion to explore digital media to educate the
                youth of NC by way of programing Arduino's and
                learning basic CAD programs.Interestingly enough
                this was only the first step to my programing
                initiation I created my first basic webpage for
                my students ClassRoom Website. I edited video,
                linked useful sites and compiled teh class around
                adventureous yet controlled learning. In the end,
                it quite fun to build this Google site, but it was
                ... limiting. I was proud of my work but it was
                elementary as far as web design goes in today's
                world. I wanted more - so I did the unthinkable in my
                wheelhouse - I signed up for a Coding BootCamp at
                UNC-Chapel Hill.
                Currently, I am developing a working knowledge of HTML5,
                CSS and JavaScript. I plan is to maintain the goal of becoming
                full stack developer with a focus on UI. I am implementing these
                skills in my current career in education but hope to have a new
                programming career in web development before the end of 2018.
                I am taking on clients for web development contract work.
                Additionally, Startups are of great interest to me. I look
                forward to being on the ground floor of a new company big or
                small and talor my skills to meet the needs of a new vision.
            </p>
        </div>
    </div>
    <!-- parallax 2 -->
    <div class="parallax-container">
      <div class="parallax">
        <img src="https://images4.alphacoders.com/593/thumb-1920-593953.jpg">
      </div>
    </div>

    <!-- area for repo displays -->
<div class="row">
  <!-- repo1 -->
  <div class="col s12 m6">
    <div class="card">
      <div class="card-image">
    <img src="https://media.giphy.com/media/3owyoUHuSSqDMEzVRu/giphy.gif" class="cardImg">
    <span class="card-title" id="fontDark">GifTastic</span>
    <a class="btn-floating halfway-fab waves-effect waves-light red" href="https://jaredtspears.github.io/GifTastic/" target="blank"><i class="fab fa-github indigo"></i></a>
      </div>
        <div class="card-content" id="font">
          <p class="t">GifTastic - a little display of a entertaining Gif app. 
            <ul class="list">
              <li>
                JavaScript/jQuery
              </li>
              <li>
                Giphy API
              </li>
              <li>
                Bootstrap UI
              </li>
            </ul>
          </p>
        </div>
    </div>
  </div>
    <!-- repo 2 -->
    <div class="col s12 m6">
      <div class="card">
        <div class="card-image">
            <img src="../../public/musicBox.gif" class="cardImg">
            <span class="card-title" id="font">Mistro Music Box </span>
            <a class="btn-floating halfway-fab waves-effect waves-light red" href="https://diloretodg.github.io/class_project_1/" target="blank"><i class="fab fa-github indigo"></i></a>
        </div>
        <div class="card-content" id="font">
            <p class="t">Mistro Music Box: A music game app for the busy mind. <strong>Team Project</strong>
                <ul class="list">
                    <li>
                        JavaScript/ jQuery
                    </li>
                    <li>
                        YouTube API
                    </li>
                    <li>
                        Semantic UI
                    </li>
                    <li>
                        Firebase Storage
                    </li>
                </ul>
            </p>
        </div>
      </div>
    </div>
</div>
<div class="row">
    <!-- repo 3 -->
    <div class="col s12 m6">
        <div class="card">
            <div class="card-image">
                <img src="https://www.artfulhome.com/item_images/Additional/P/7101-7200/7122/full/38bcd8d8-8855-41dc-98f2-e10ca0aaf1a4_P07122-P00058_f.jpg" class="cardImg">
                <span class="card-title" id="fontDark">River Game </span>
                <a class="btn-floating halfway-fab waves-effect waves-light red" href="https://jaredtspears.github.io/unit-4-game/" target="blank"><i class="fab fa-github indigo"></i></a>
            </div>
            <div class="card-content" id="font">
                <p class="t">In this project River Stone Game, I created a simple kid friendly brain teaser application that can be customized to meet the learning objective goals for children.
                    <ul class="list">
                        <li>
                            JavaScript/jQuery 
                        </li>
                        <li>
                            Bootstrap UI
                        </li>
                    </ul>
                </p>
            </div>
        </div>
    </div>
    <!-- repo 4 -->
    <div class="col s12 m6">
        <div class="card">
            <div class="card-image">
                <img src="https://rusmania.com/perch/resources/kievsky-railway-station.jpg" class="cardImg">
                <span class="card-title" id="fontDark">Swazy Express Train Station </span>
                <a class="btn-floating halfway-fab waves-effect waves-light red" href="https://jaredtspears.github.io/GifTastic/" target="blank"><i class="fab fa-github indigo"></i></a>
            </div>
            <div class="card-content" id="font">
                <p class="t">Swazy Express Train Station App stores user train data in a database and displays in real time the stored train data for users to interact with scheduling their next trip - no login required!
                    <ul class="list">
                        <li>
                            Javascript/jQuery
                        </li>
                        <li>
                            Moments.js
                        </li>
                        <li>
                            Firebase
                        </li>
                        <li>
                            Bootstrap UI
                        </li>
                    </ul>
                </p>
            </div>
        </div>
    </div>
</div>
<!--row 3 repos-->
<div class="row">
    <!-- repo 5 -->
    <div class="col m6">
        <div class="card">
            <div class="card-image">
                <img src="../../public/recipease.gif" class="cardImg">
                <span class="card-title" id="fontDark">RecipEase </span>
                <a class="btn-floating halfway-fab waves-effect waves-light red" href="https://jaredtspears.github.io/unit-4-game/" target="blank"><i class="fab fa-github indigo"></i></a>
            </div>
            <div class="card-content" id="font">
                <p class="t">RecipEase: This app sorts and organizes recipes for users.
                    <ul class="list">
                        <li>
                            Angular 
                        </li>
                        <li>
                            JavaScript
                        </li>
                        <li>
                            Angular Material
                        </li>
                         <li>
                            Google Authentication
                        </li>
                    </ul>
                </p>
            </div>
        </div>
    </div>
</div>
 <br> 

    <!-- footer -->
    <footer class="page-footer indigo">
        <div class="container">
            <div class="row">
                <div class="col l6 s12" id="font">
                    <br>
                    <h4 class="white-text" id="font">Check me out on:</h4>
                </div>
                <div class="col l4 offset-l2 s12">
                    <h5 class="white-text" id="font">Business & Play</h5>
                    <ul>
                        <li><a class="grey-text text-lighten-3" href="www.linkedin.com/in/jared-spears-ha1f-deaf" id="font">LinkedIn</a></li>
                        <li><a class="grey-text text-lighten-3" href="https://medium.com/@Ha1f_Deaf" id="font">Medium</a></li>
                        <!-- <li><a class="grey-text text-lighten-3" href="#!">CodingWars</a></li> -->
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <div class="container" id="font">
                A Ha1f_Deaf Design
                <a class="grey-text text-lighten-4 right" href="#!" id="font">More Links</a>
            </div>
        </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  props: {
//  no props added for this app, may in the future
  }
}
</script>

}
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo{
  font-family: 'Yesteryear', cursive;
}
#logoSize{
  font-size: 2.6em;
}
#fontColor{
  color:whitesmoke;
  font-family: 'NTR', sans-serif;
  font-size: 1.2em;
}
#fontDark{
  color:indigo;
   font-family: 'NTR', sans-serif;
}

#font{
  font-family: 'NTR', sans-serif;
}
#autoscroll{
    font-family: 'NTR', sans-serif;
}
</style>
