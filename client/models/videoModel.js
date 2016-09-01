export const Moment = (element, moment) => {
  const momentObj = moment;

  const likeWindow = $('<div>').addClass('likeWindow').html(`
    ${momentObj.users.length}
    <i class="fa fa-thumbs-up"></i>
  `);

  element.append(likeWindow);

  element.click(() => {
    console.log('Like Count', momentObj.users);
  });

  function hitTest(time) {
    if (time > momentObj.start_time && time < momentObj.stop_time) {
      //console.log('hit', momentObj.id);
      likeWindow.addClass('active');
      return true;
    } else {
      likeWindow.removeClass('active');
      return false;
    }
  }

  return {
    render: element,
    hitTest: hitTest,
  };
};
