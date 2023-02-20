function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("show");
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("show");
    evt.currentTarget.classList.add("active");
  }

  function handleSubmit(event, tab_number) {
    event.preventDefault(); 
  
    const form = document.querySelector("#form1");
    const formData = new FormData(form);
    
    const values = Object.fromEntries(formData.entries());
 
    console.log(values);
    
    if (tab_number == 0) {
      openTab(event, "Tab2")
    }

  }

