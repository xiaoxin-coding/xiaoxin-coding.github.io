var posts=["2025/04/04/hello-world/","2025/04/05/mysql索引/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };