$(() => {
  const showList = `http://api.tvmaze.com/shows`;

  $.ajax({ url: showList, async: true }).then(data => {
    data = data;
    console.log(data);

    let selectedRuntime = 0;
    let selectedStatus = "";
    let selectedGenre = "";
    let selectedType = "";

    const findRuntimes = data => {
      for (let i = 0; i < data.length; i++) {
        const runtime = data[i].runtime;

        if (runtime == selectedRuntime) {
          const $name = $("<li>").text(data[i].name);
          $("body").append($name);
          $name.attr("class", "names");
          $name.attr("id", "names");
        }
      }
    };

    const findStatus = data => {
      for (let i = 0; i < data.length; i++) {
        const status = data[i].status;

        if (status == selectedStatus) {
          const $name = $("<ol>").text(data[i].name);
          $("body").append($name);
          $name.attr("class", "names");
          $name.attr("id", "status");
        }
      }
    };

    const findType = data => {
      for (let i = 0; i < data.length; i++) {
        const type = data[i].type;

        if (type == selectedType) {
          const $name = $("<h2>").text(data[i].name);
          $("body").append($name);
          $name.attr("class", "names");
          $name.attr("id", "type");
        }
      }
    };

    const findGenre = data => {
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].genres.length; j++) {
          const genre = data[i].genres[j];

          if (genre == selectedGenre) {
            const $name = $("<h3>").text(data[i].name);
            $("body").append($name);
            $name.attr("class", "names");
            $name.attr("id", "genre");

            if (genre == selectedGenre) {
              const $img = $("<img>").attr("src", data[i].image.medium);
              $("body").append($img);
              console.log($img);
            }
          }
        }
      }
    };

    $("select").on("change", function() {
      selectedRuntime = this.value;
      $(".names").remove();
      findRuntimes(data);

      selectedStatus = this.value;
      findStatus(data);

      selectedGenre = this.value;
      findGenre(data);

      selectedType = this.value;
      findType(data);
    });
  });
});
