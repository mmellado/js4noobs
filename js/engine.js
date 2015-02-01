$(function(){
  var url = 'README.md',
      markdown = window.markdownit(),
      $container = $('#markdown'),
      html;

  $.ajax({
    method: 'GET',
    url: url,
    success: function(data) {
      html = markdown.render(data);
      $container.append(html);
      $('code').each(function(i, block) {
        hljs.highlightBlock(block);
      });

    }
  });
});