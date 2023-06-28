jQuery(function ($) {
   let position = 0;
   const slidesToShow = 1;
   const slidesToScroll = 1.42;
   const container = $('.line__container');
   const track = $('.slider-track');
   const item = $('.slider-item');
   const btnPrev = $('.btn-prev');
   const btnNext = $('.btn-next');
   const itemsCount = item.length;
   const itemWidth = container.width() / slidesToShow;
   const movePosition = slidesToScroll * itemWidth;
   btnPrev.prop('disabled', position === 0);

   item.each(function (index, item) {
      $(item).css({
         minWidth: itemWidth,

      });
   });
   btnNext.click(function () {
      position -= movePosition;

      setPosition();
      checkBtns();
      console.log('');
   });
   btnPrev.click(function () {
      position += movePosition;

      setPosition();
      checkBtns();
      console.log('');
   });

   const setPosition = () => {
      track.css({
         transform: `translatex(${position}px)`

      });
   };

   const checkBtns = () => {
      btnPrev.prop('disabled', position === 0);
      btnNext.prop('disabled', position <= -(itemsCount - slidesToShow) * itemWidth);
   };
});

