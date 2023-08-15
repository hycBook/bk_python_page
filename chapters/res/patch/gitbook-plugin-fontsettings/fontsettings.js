

require(["gitbook", "jQuery"], function(gitbook, $) {

  var arr = ["url(https://s2.loli.net/2022/03/28/zhJQxDkXmSIMAHe.jpg)", 
             "url(https://s2.loli.net/2022/03/28/RznmaJC4yMtvG7w.jpg)",
             "url(https://s2.loli.net/2022/03/28/bUaDCHjGAvQZSnw.jpg)",
             "url(https://s2.loli.net/2022/03/28/C9VnfzHy2glMX8t.jpg)",
             "url(https://s2.loli.net/2022/03/28/4x5Lt38euZGNwSn.jpg)",
             "url(https://s2.loli.net/2022/03/28/GJQXeuibIZr3Wg1.jpg)",
             "url(https://s2.loli.net/2022/03/28/Hy8oXlqv7MCWN29.jpg)",
             "url(https://s2.loli.net/2022/03/28/WXw3VDG6eonRMIq.png)",
             "url(https://s2.loli.net/2022/03/28/3tZ6cvsDqgkHyAG.jpg)",
             "url(https://s2.loli.net/2022/03/30/1GMFWimUsgz4Ek7.jpg)",
             "url(https://s2.loli.net/2022/03/30/VxKMs5tmeRWj4GI.png)",
             "url(https://s2.loli.net/2022/03/30/NSUQmT9RCj17vfs.jpg)",
             "url(https://s2.loli.net/2022/03/30/4M5m2S9bOwWQKXT.png)",
             "url(https://s2.loli.net/2022/03/30/THc8tGZVwsQvXgR.png)",
             "url(https://s2.loli.net/2022/03/30/jr1WIvz3D59BxPa.jpg)",
             "url(https://s2.loli.net/2022/03/30/ZbHfIPG7rEswdFg.jpg)",
             "url(https://s2.loli.net/2022/03/30/dXGBrg4w7pFYSj5.jpg)",
             "url(https://s2.loli.net/2022/03/30/F81RSDg4iTZH7fX.jpg)",
             "url(https://s2.loli.net/2022/04/11/PCXsSZLxQj1WmhV.jpg)",
             "url(https://s2.loli.net/2022/04/11/IZtiNhxJ79TUFAd.jpg)",
             "url(https://s2.loli.net/2022/04/11/b41TsABGj3z2WON.jpg)",
             "url(https://s2.loli.net/2022/04/11/6y3sAiISe4KPpzV.jpg)",
             "url(https://s2.loli.net/2022/04/11/uEZByx8jn2RtraY.jpg)",
             "url(https://s2.loli.net/2022/04/11/akWRGFBzwIAJnj2.jpg)",
             "url(https://s2.loli.net/2022/04/11/LnatohGSwfXgIxy.jpg)",
             "url(https://s2.loli.net/2022/04/11/IOjrbpcRA54ZNny.jpg)",
             "url(https://s2.loli.net/2022/04/11/Sjk17uKTFJiA4bV.jpg)",
             "url(https://s2.loli.net/2022/04/11/jXrSuVxJKeYBszH.jpg)",
             "url(https://s2.loli.net/2022/04/19/oEqSkGlNj27Ccmn.jpg)",
             "url(https://s2.loli.net/2022/04/19/5XBRVqc6Z7tveYE.jpg)",
             "url(https://s2.loli.net/2022/04/19/FiqCI4W6Z9Oflxp.jpg)",
             "url(https://s2.loli.net/2022/04/19/ayOV3Z7Y5XFsGSq.jpg)",
             "url(https://s2.loli.net/2022/04/19/UiRoVyhNeFSHfEA.jpg)",
             "url(https://s2.loli.net/2022/04/19/1PX9TWluS86mAVd.jpg)",
             "url(https://s2.loli.net/2022/04/19/JqcAmdxgYIl8kG4.jpg)",
             "url(https://s2.loli.net/2022/04/19/k9RW2etxS6NKVMP.jpg)"];

  var arr = ["url(https://pic.hycbook.com/i/hexo/post_imgs/蕾姆0.webp)",
             "url(https://pic.hycbook.com/i/hexo/post_imgs/蕾姆1.webp)",
             "url(https://pic.hycbook.com/i/hexo/post_imgs/蕾姆2.webp)",
             "url(https://pic.hycbook.com/i/hexo/post_imgs/蕾姆3.webp)",
             "url(https://pic.hycbook.com/i/hexo/post_imgs/蕾姆4.webp)",
             "url(https://pic.hycbook.com/i/hexo/post_imgs/蕾姆5.webp)",
             "url(https://pic.hycbook.com/i/hexo/post_imgs/蕾姆6.webp)",
             "url(https://pic.hycbook.com/i/hexo/post_imgs/蕾姆7.webp)",
             "url(https://pic.hycbook.com/i/hexo/post_imgs/蕾姆8.webp)",
             "url(https://pic.hycbook.com/i/hexo/post_imgs/蕾姆9.webp)",
             "url(https://pic.hycbook.com/i/hexo/post_imgs/蕾姆10.webp)",
             "url(https://pic.hycbook.com/i/hexo/post_imgs/蕾姆11.webp)",
             "url(https://pic.hycbook.com/i/hexo/post_imgs/蕾姆12.webp)"];

  function getstyle(sname) {
    for (var i = 0; i < document.styleSheets.length; i++) {
      var rules;
      if (document.styleSheets[i].cssRules) {
        rules = document.styleSheets[i].cssRules;
      } else {
        rules = document.styleSheets[i].rules;
      }
      for (var j = 0; j < rules.length; j++) {
        if (rules[j].selectorText == sname) {
          return rules[j].style;
        }
      }
    }
  }

  function rand_background() {
    var cl = getstyle(".book.color-theme-1");
    cl.background = arr[Math.floor((Math.random() * arr.length))];
    cl.backgroundRepeat= "no-repeat";
    cl.backgroundSize= "100% 100%";
    cl.backgroundAttachment= "fixed";
  }

  // Init configuration at start
  gitbook.events.bind('start',
    function(e, config) { 
      setInterval(rand_background, 1000 * 60 * 3);
  });

  rand_background();
}
);