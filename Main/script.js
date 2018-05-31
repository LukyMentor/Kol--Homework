$('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
  if (!$(this).next().hasClass('show')) {
    $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
  }
  var $subMenu = $(this).next(".dropdown-menu");
  $subMenu.toggleClass('show');


  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
    $('.dropdown-submenu .show').removeClass("show");
  });


  return false;
});

function anotation() {
  if (document.getElementById('usn').value != "" || document.getElementById('pwd').value != "") {
    if (document.getElementById('usn').value == "admin" || document.getElementById('pwd').value == "admin") {
      alert("Dobrý pokus!");
    }
    else {
      alert("Zde nic není :(");
    }
  }
}