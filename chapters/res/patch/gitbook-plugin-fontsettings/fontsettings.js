

require(["gitbook", "jQuery"], function(gitbook, $) {
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