document.querySelector('.form-item-select-wrapper').addEventListener('click', function() {
    this.querySelector('.form-item-select').classList.toggle('open');
})
for (const option of document.querySelectorAll(".item-select-option")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('item-option-selected')) {
            this.parentNode.querySelector('.item-select-option.item-option-selected').classList.remove('item-option-selected');
            this.classList.add('item-option-selected');
            this.closest('.form-item-select').querySelector('.item-select-trigger span').textContent = this.textContent;
        }
    })
}
window.addEventListener('click', function(e) {
    const select = document.querySelector('.form-item-select')
    if (!select.contains(e.target)) {
        select.classList.remove('open');
    }
});

document.getElementById("form").onsubmit = function () {
    var x = document.forms["form"]["name"].value;
    var y = document.forms["form"]["telephone"].value;
    var z = document.forms["form"]["date"].value;

    var submit = true;

    if (x == null || x == "") {
        nameError = "Please enter your name";
        document.getElementById("name_error").innerHTML = nameError;
        submit = false;
    }

    if (y == null || y == "") {
        telephoneError = "Please enter your 10 digit telephone";
        document.getElementById("phone_error").innerHTML = telephoneError;
        submit = false;
    }

    if (z == null || z == "") {
        dateError = "Please enter date";
        document.getElementById("date_error").innerHTML = dateError;
        submit = false;
    }

    return submit;
}

function removeWarning() {
    document.getElementById(this.id + "_error").innerHTML = "";
}

document.getElementById("name").onkeyup = removeWarning;
document.getElementById("phone").onkeyup = removeWarning;
document.getElementById("date").onkeyup = removeWarning;

function validatedate(inputText)
  {
  error= "Please enter date in format dd-mm-yyyy";
  var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[-](0?[1-9]|1[012])[-]\d{4}$/;
  // Match the date format through regular expression
  if(inputText.value.match(dateformat))
  {
  document.form.date.focus();
  
  var pdate = inputText.value.split('-');
  
  var dd = parseInt(pdate[0]);
  var mm  = parseInt(pdate[1]);
  var yy = parseInt(pdate[2]);
  // Create list of days of a month [assume there is no leap year by default]
  var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];
  if (mm==1 || mm>2)
  {
  if (dd>ListofDays[mm-1])
  {
  document.getElementById("date_error").innerHTML = error;
  return false;
  }
  }
  if (mm==2)
  {
  var lyear = false;
  if ( (!(yy % 4) && yy % 100) || !(yy % 400)) 
  {
  lyear = true;
  }
  if ((lyear==false) && (dd>=29))
  {
  document.getElementById("date_error").innerHTML = error;
  return false;
  }
  if ((lyear==true) && (dd>29))
  {
  document.getElementById("date_error").innerHTML = error;
  return false;
  }
  }
  }
  else
  {
  document.getElementById("date_error").innerHTML = error;
  document.form.date.focus();
  return false;
  }
  }

  /**
 *Our Restaurant Menu
 */
(() => {
    let menuTabOptions = document.querySelector(".menu-wrapper ul"),
      menuTabs = menuTabOptions.getElementsByTagName("li"),
      activeMenuTab = menuTabOptions.querySelector("ul .active-tab"),
      activeMenuContent = document.querySelector("article .active"),
      menuContents = document.querySelectorAll(".menu-content"),
      activeTab;
    menuTabOptions.addEventListener(
      "click",
      e => {
        let { target } = e;
        if (target == activeMenuTab) return;
        if (target.nodeName.toLowerCase() == "li") {
          activeMenuTab.classList.remove("active-tab");
          target.classList.add("active-tab");
          activeMenuTab = target;
        }
        for (activeTab = 0; activeTab < 2; activeTab++) {
          if (menuTabs[activeTab] == activeMenuTab) break;
        }
        activeMenuContent.classList.remove("active");
        menuContents[activeTab].classList.add("active");
        activeMenuContent = menuContents[activeTab];
      },
      false
    );
  })();
  

