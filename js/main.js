$(document).ready(function(){
    $('ul.tabs').each((index, el) => {
      M.Tabs.init(el, {});
    });

    $('.sidenav').each((index, el) => {
        M.Sidenav.init(el, {});
    });
  });