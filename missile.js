
<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="/js/jquery-ui-1.8.16.custom/css/ui-lightness/jquery-ui-1.8.16.custom.css" />
<link rel="stylesheet" type="text/css" href="/js/BEAUTYTIPS/jquery.bt.css" />
<link rel="stylesheet" type="text/css" href="/css/webgame.css" />
<link rel="stylesheet" type="text/css" href="/assets/ecbb83c8/srbac.css" />
<script type="text/javascript" src="/assets/3a0b1ce1/jquery.min.js"></script>
<script type="text/javascript" src="/assets/3a0b1ce1/jquery.cookie.js"></script>
<script type="text/javascript" src="/js/jquery.blockUI.js"></script>
<script type="text/javascript" src="/js/jquery-ui-1.8.16.custom/js/jquery-ui-1.8.16.custom.min.js"></script>
<script type="text/javascript" src="/js/BEAUTYTIPS/jquery.bt.min.js"></script>
<title>Missile Test</title>

    <link rel="stylesheet" type="text/css" href="/css/missileTest/css/style.css">
    <!--[if lt IE 9]>
    <link rel="stylesheet" type="text/css" href="/css/missileTest/css/styleIE.css">
    <![endif]-->

    <style>

        #infoBlock {
            position: absolute;
            margin: 20px;
            background-color: #ffffff;
            font-size: 22px;
            z-index: 30;
            display: none;
        }

    </style>
</head>

<body>
<div id="forbidTip" style="background: #ffffff;z-index: 1000;width: 100%;height: 100%;position: absolute;display: none;">
    <h1 style="width: 800px;margin:auto;margin-top:200px;">YOU CAN'T USE THIS APPLICATION. PLEASE LOGIN TO OUR WEBSITE <a href="http://www.latestpilotjobs.com">WWW.LATESTPILOTJOBS.COM</a> AND ACCESS YOUR SUBSCRIPTION!</h1>
</div>

<div id="intro" class="introScreen">

    <div class="introContent">
        <h1>Missile Test</h1>

        <div id="scrolling" class="scrolling">

            <p>This test measures hand-eye coordination.</p>

            <h2>Representation:</h2>
            <p>In this test you are piloting a missile through a large tunnel.
                Your goal is to fly through the openings of each obstacle. If you
                miss an opening you will cause a collision and your flight will pause
                for a short moment. You more openings you pass through the faster the
                missile will become. You can manually adjust the speed of your flight.</p>
            <img class="img1" src="/css/missileTest/images/intro/prev.png" />

            <h2>Controls:</h2>

            <p><img src="/css/missileTest/images/intro/computer.png" width="50" /><br>PC users: Missile is controlled with the mouse. Speed is
                controlled by A (increase) and D (decrease) keyboard.</p>

            <p><img src="/css/missileTest/images/intro/mobiles.png" width="50" /><br>Mobile and Tablet users: Missile is controlled by holding your
                finger on the screen and moving it. Speed is controlled by the + and – icon on the screen.</p>

            <h2>Duration:</h2>
            <p>Test time: 3 minutes</p>

            <h2>Scores:</h2>
            <p>Scores are based on how much distance you can cover during 3 minutes.</p>


        </div>

    </div>

    <div class="introButton">

        <div class="modech">
            <div class="modech_score" >
                <div class="col-lg-16"></div>
                <div class="col-lg-16" style="border: 2px solid #000000; background-color: #ffffff; width: 270px; height: 430px;">
                    <div style="text-align: center;">
                        <h3>Easy</h3>
                    </div>
                    <div style="margin-top: 19px; margin-left: 10px; font-size: 15px;">
                        <span style="text-align: right;">Your Average Score: </span>
                        <span class="easy_average_score"></span>
                    </div>
                    <div style="margin-top: 19px; margin-left: 10px; font-size: 15px; padding-bottom: 10px;">
                        <span style="text-align: right; padding-left: 50px;">Global Score: </span>
                        <span class="easy_global_score"></span>
                    </div>
                    <div style="text-align: center; border-top: 2px solid #000000; ">
                        <h3>Medium</h3>
                    </div>
                    <div style="margin-top: 19px; margin-left: 10px; font-size: 15px;">
                        <span style="text-align: right;">Your Average Score: </span>
                        <span class="medium_average_score"></span>
                    </div>
                    <div style="margin-top: 19px; margin-left: 10px; font-size: 15px; padding-bottom: 10px;">
                        <span style="text-align: right; padding-left: 50px;">Global Score: </span>
                        <span class="medium_global_score"></span>
                    </div>
                    <div style="text-align: center; border-top: 2px solid #000000; ">
                        <h3>Hard</h3>
                    </div>
                    <div style="margin-top: 19px; margin-left: 10px; font-size: 15px;">
                        <span style="text-align: right;">Your Average Score: </span>
                        <span class="hard_average_score"></span>
                    </div>
                    <div style="margin-top: 19px; margin-left: 10px; font-size: 15px;">
                        <span style="text-align: right; padding-left: 50px;">Global Score: </span>
                        <span class="hard_global_score"></span>
                    </div>
                </div>
            </div>
            <h3>Difficulty <span>:</span></h3>
            <div class="ch ch1">
                <img class="rb1" src="/css/PerformanceTest7/images/rbt1.jpg" align="top" />
                <img class="rb2" src="/css/PerformanceTest7/images/rbt2.jpg" align="top" />
                Easy
            </div>
            <div class="ch ch2">
                <img class="rb1" src="/css/PerformanceTest7/images/rbt1.jpg" align="top" />
                <img class="rb2" src="/css/PerformanceTest7/images/rbt2.jpg" align="top" />
                Medium
            </div>
            <div class="ch ch3">
                <img class="rb1" src="/css/PerformanceTest7/images/rbt1.jpg" align="top" />
                <img class="rb2" src="/css/PerformanceTest7/images/rbt2.jpg" align="top" />
                Hard
            </div>
        </div>

        <div class="modech">
            <h3>Difficulty <span>:</span></h3>
            <div class="ch ch1">
                <img class="rb1" src="/css/missileTest/images/rbt1.jpg" align="top" />
                <img class="rb2" src="/css/missileTest/images/rbt2.jpg" align="top" />
                Easy
            </div>
            <div class="ch ch2">
                <img class="rb1" src="/css/missileTest/images/rbt1.jpg" align="top" />
                <img class="rb2" src="/css/missileTest/images/rbt2.jpg" align="top" />
                Medium
            </div>
            <div class="ch ch3">
                <img class="rb1" src="/css/missileTest/images/rbt1.jpg" align="top" />
                <img class="rb2" src="/css/missileTest/images/rbt2.jpg" align="top" />
                Hard
            </div>
        </div>

        <div id="practiceBt" class="practiceBt"></div>
        <div id="startBt" class="startBt"></div>
    </div>

</div>



<div id="results" class="results">
    <div class="screenSh">

        <div class="cont">
            <div class="block">
                <h1>Results</h1>
            </div>
            <div class="blockData">
                <h2 id="lvl" class="lvl bold"></h2>
            </div>

            <br clear="both" />
        </div>

        <div class="cont">
            <div class="block">
                <h2>Score:</h2>
            </div>

            <div class="blockData">
                <h2 id="totalPerc" class="tot bold"></h2>
            </div>

            <br clear="both" />
        </div>


        <div class="contLast">
            <div class="block">
                <div id="retake" class="retakeBt"></div>
            </div>
            <br clear="both" />
        </div>

    </div>

</div>


<canvas id="renderCanvas" class="mouseHide"></canvas>

<div id="speedButtons" class="mouseHide">
    <div id="faster" class="btn faster">+</div>
    <div id="slower" class="btn slower">-</div>
</div>

<div id="timer" class="mouseHide"></div>

<div id="speedMeter" class="mouseHide">
    <div>Speed:</div>
    <div id="speedBox">
        <div id="speedLine"></div>
    </div>
</div>

<div id="navigator" class="mouseHide">
    <div id="navPoint"></div>
</div>

<div id="cover" class="mouseHide"></div>
<div id="message" class="mouseHide"></div>

<div id="tst" class="tst"></div>

<script src="/css/missileTest/js/hand.minified-1.2.js"></script>
<script src="/css/missileTest/js/jquery-1.11.1.min.js"></script>
<script src="/css/missileTest/js/jquery.mobile-1.4.5.min.js"></script>
<script src="/css/missileTest/js/babylon.js"></script>

<script>

    if( /Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)) {
        document.write('<script type="text/javascript" src="/css/missileTest/js/custommob.js"><\/script>');
    } else {
        document.write('<script type="text/javascript" src="/css/missileTest/js/customcomp.js"><\/script>');
    }
</script>


</body>
</html>