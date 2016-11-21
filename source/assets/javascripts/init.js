if ('querySelector' in document && 'addEventListener' in window){

  var body = document.querySelector('body'),
      html = document.querySelector('html'),
      siteName = document.querySelector('.site-header'),
      headShots = document.querySelector('.headshots'),
      bio = document.querySelector('.home-main > .content'),
      navToggle = document.querySelector('#nav-toggle'),
      albumsNav = document.querySelector('.albums-nav'),
      albums = document.querySelectorAll('.album-item'),
      controller = new ScrollMagic.Controller(),
      tl = new TimelineLite();

  reverseNavTween = TweenMax.to(albumsNav, 1,{autoAlpha: 1, delay: 1}).reverse();




  navToggle.addEventListener('click', function(event){
    navToggle.classList.toggle('is-active');
    reverseNavTween.reversed(!reverseNavTween.reversed());
  });

  tl
    .from(body, 0.8, {opacity: 0})
    .from(siteName, 0.5, {opacity: 0}, 0.25)
    .from(headShots, 0.5, {y: -100, autoAlpha: 0, ease:Power1.easeOut})
    .from(bio, 0.5, {autoAlpha: 0});

  if(albums){
    var i;
    for(i = 0; i < albums.length; i++){
      var tl = new TimelineMax();

      tl.from(albums[i].children, 2, {opacity: 0, y: 200});

      var albumScene = new ScrollMagic.Scene({
        triggerElement: albums[i],
        duration: 300
      })
      .addIndicators({
        colorTrigger: 'black',
        colorStart: '#75C695',
        colorEnd: 'pink'
      })
      .setTween(tl)
      .addTo(controller)

    }
  }
}
