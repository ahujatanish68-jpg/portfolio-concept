const scrollToSection = (id) => {

  if (location.pathname !== "/") {

    navigate("/", {
      state: {
        section: id
      }
    });

  } else {

    setTimeout(() => {

      const section = document.getElementById(id);

      if(section){

        section.scrollIntoView({
          behavior:"smooth"
        });

      }

    },100);

  }

};