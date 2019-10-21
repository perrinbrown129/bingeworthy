$(() => {
  // let selectedRuntime = 0;
  // let selectedStatus = "";
  // let selectedType = "";

  // const findRuntimes = data => {
  //   for (let i = 0; i < data.length; i++) {
  //     const runtime = data[i].runtime;

  //     if (runtime == selectedRuntime) {
  //       const $name = $("<li>").text(data[i].name);
  //       $("body").append($name);
  //       $name.attr("class", "names");
  //       $name.attr("id", "names");
  //     }
  //   }
  // };

  // const findStatus = data => {
  //   for (let i = 0; i < data.length; i++) {
  //     const status = data[i].status;

  //     if (status == selectedStatus) {
  //       const $name = $("<ol>").text(data[i].name);
  //       $("body").append($name);
  //       $name.attr("class", "names");
  //       $name.attr("id", "status");
  //     }
  //   }
  // };

  // const findType = data => {
  //   for (let i = 0; i < data.length; i++) {
  //     const type = data[i].type;

  //     if (type == selectedType) {
  //       const $name = $("<h2>").text(data[i].name);
  //       $("body").append($name);
  //       $name.attr("class", "names");
  //       $name.attr("id", "type");
  //     }
  //   }
  // };

  // $("select").on("change", function() {
  //   // selectedRuntime = this.value;

  //   // findRuntimes(data);

  //   // selectedStatus = this.value;
  //   // findStatus(data);
  //   $(".names").remove();
  //   selectedGenre = this.value;
  //   findGenre(data);

  //   // selectedType = this.value;
  //   // findType(data);
  // });
  const showList = `http://api.tvmaze.com/shows`;

  $.ajax({ url: showList, async: true }).then(data => {
    data = data;
    console.log(data[0]);

    let selectedGenre = "";
    const findGenre = data => {
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].genres.length; j++) {
          const genre = data[i].genres[j];

          if (genre == selectedGenre) {
            const $name = $("<h3>").text(data[i].name);
            $name.attr("class", "names");

            const $img = $("<img>").attr("src", data[i].image.medium);
            $img.attr("class", "names");

            const $runtime = $("<p>").text(
              "Runtime: " + data[i].runtime + " Minutes"
            );
            $runtime.attr("class", "names");

            const $premieredate = $("<p>").text(
              "Premiered: " + data[i].premiered + " on " + data[i].network.name
            );
            $runtime.attr("class", "names");

            const $rating = $("<p>").text(
              "Average Rating: " + data[i].rating.average
            );
            $runtime.attr("class", "names");

            const $summary = $("<div>").html(data[i].summary);
            $summary.attr("class", "names");
            $summary.attr("id", "summary");

            const $grandparentdiv = $("<div>");
            $grandparentdiv.attr("class", "names");
            $grandparentdiv.attr("id", "grandparentdiv");
            $("body").append($grandparentdiv);
            $grandparentdiv.append($img);

            const $parentdiv = $("<div>");
            $parentdiv.attr("class", "names");
            $parentdiv.attr("id", "parentdiv");
            $grandparentdiv.append($parentdiv);
            $parentdiv.append($name);
            $parentdiv.append($runtime);
            $parentdiv.append($premieredate);
            $parentdiv.append($rating);
            $parentdiv.append($summary);
          }
        }
      }
    };

    window.onscroll = function() {
      stickyNav();
    };

    let buttonBar = document.getElementById("button-row");
    let sticky = buttonBar.offsetTop;

    function stickyNav() {
      if (window.pageYOffset >= sticky) {
        buttonBar.classList.add("sticky");
      } else {
        buttonBar.classList.remove("sticky");
      }
    }

    $("button").on("click", event => {
      event.preventDefault();
      $(".names").remove();
      selectedGenre = $(event.currentTarget).val();
      console.log(selectedGenre);
      findGenre(data);
    });
  });
});
