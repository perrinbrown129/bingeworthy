$(() => {
  //   const handleShow = show => {
  //     const $name = $("<h1>").text(show[0].show.name); // create h1 and put the title inside
  //     console.log(show[0]);
  //     console.log(show[0].show.name);
  //     $(".container").append($name); // add the title to the container

  //     const $premiere = $("<h2>").text(`Premiered on ${show[0].show.premiered}`); // create the h2 and put the premiere date inside
  //     $(".container").append($premiere); // add the director to the container
  //   };
  //   $("form").on("submit", event => {
  //     event.preventDefault();
  //     const titleQuery = $(".title-query").val(); // get value from input
  //     const endpoint = `http://api.tvmaze.com/search/shows?q=${titleQuery}`; // create endpoint based on query

  //     $.ajax({ url: endpoint }).then(handleShow); // get data asynchronously, when the data gets back, handle it
  //   });

  const showList = `http://api.tvmaze.com/shows`;
  const data = [];

  $.ajax({ url: showList, async: true }).then(data => {
    data = data;
    console.log(data[0]);

    let selectedRuntime = 0;
    let selectedStatus = "";
    let selectedGenre = "";
    let selectedType = "";
    let selectedCountry = "";
    let selectedYear = "";

    const findRuntimes = data => {
      for (let i = 0; i < data.length; i++) {
        const runtime = data[i].runtime;

        if (runtime == selectedRuntime) {
          const $name = $("<h1>").text(data[i].name);
          $("body").append($name);
          $name.attr("class", "names");
        }
      }
    };

    const findStatus = data => {
      for (let i = 0; i < data.length; i++) {
        const status = data[i].status;

        if (status == selectedStatus) {
          const $name = $("<h1>").text(data[i].name);
          $("body").append($name);
          $name.attr("class", "names");
        }
      }
    };

    const findType = data => {
      for (let i = 0; i < data.length; i++) {
        const type = data[i].type;

        if (type == selectedType) {
          const $name = $("<h1>").text(data[i].name);
          $("body").append($name);
          $name.attr("class", "names");
        }
      }
    };

    const findGenre = data => {
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].genres.length; j++) {
          const genre = data[i].genres[j];

          if (genre == selectedGenre) {
            const $name = $("<h1>").text(data[i].name);
            $("body").append($name);
            $name.attr("class", "names");
          }
        }
      }
    };

    const findCountry = data => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].network) {
          const country = data[i].network.country.name;

          if (country == selectedCountry) {
            const $name = $("<h1>").text(data[i].name);
            $("body").append($name);
            $name.attr("class", "names");
          } else if (
            (selectedCountry == "International" && country === "Canada") ||
            country === "France" ||
            country === "Japan" ||
            country === "United Kingdom"
          ) {
            const $name = $("<h1>").text(data[i].name);
            $("body").append($name);
            $name.attr("class", "names");
          }
        }
      }
    };

    // const findYear = data => {
    //   for (let i = 0; i < data.length; i++) {
    //     let year = data[i].premiered;
    //     year = year.substring(0, 4);

    //     if (year >= 1990 && (year < 2000) & (selectedYear === "1990-1999")) {
    //       const $name = $("<h1>").text(data[i].name);
    //       $("body").append($name);
    //       $name.attr("class", "names");
    //       console.log(year);
    //     }
    //   }
    // };

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

      selectedCountry = this.value;
      findCountry(data);

      //   selectedYear = this.value;
      //   findYear(data);
    });
  });
});
