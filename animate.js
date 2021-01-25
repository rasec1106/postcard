function sunRaft() {
    $("#sun").animate({
        opacity: .7
    }, 1000).animate({
        opacity: 1
    }, 1000);

    $("#raft").animate({
        top: '-=5px'
    }, 1000).animate({
        top: '+=5px'
    }, 1000);

    $("#raftripple").animate({
        opacity: .1
    }, 1000).animate({
        opacity: 1
    }, 1000);
    setTimeout(sunRaft, 2000);
}

function cloud1() {
    $("#cloud1").animate({
        left: '+=850px'
    }, 1000).animate({
        left: "-150px"
    }, 0);
    setTimeout(cloud1, 10000);
}

function cloud2() {
    $("#cloud2").animate({
        left: '+=950px'
    }, 9000).animate({
        left: "-250px"
    }, 0);
    setTimeout(cloud2, 9000);
}

function cloud3() {
    $("#cloud3").animate({
        left: '+=800px'
    }, 6000).animate({
        left: '-100px'
    }, 0);
    setTimeout(cloud3, 6000);
}
/**
 * In the instance of the clouds, which will be constantly scrolling across the screen, 
 * after they travel the distance, they are reset to their initial location via an animation 
 * that takes 0 time (therefore instantaneous). The raft portion of the postcard has two animations 
 * going side by side – The raft bobs up and down, while the ripple underneath fades in and out.
 */

 /**
  * Putting It All Together (in a Function)
  * Now that we’ve defined the animations that will be looping let’s combine them all into a function that 
  * we can then call when the page loads.
  */
 function animation() {
    sunRaft();
    cloud1();
    cloud2();
    cloud3();
  }

  setTimeout(animation,300);
  /**
   * Tip: You may have noticed I added a setTimeout() before calling animation() – 
   * This is so the visitor/browser have time to get situated before firing off the animations. 
   * If your animations are triggered by a click or something of that nature, you won’t need to 
   * encase animation() in a setTimeout().
   */