const contanier = document.querySelector(".contanier");
const count = document.getElementById("count");
const amount = document.getElementById("amount");
const select = document.getElementById("movie");
const seats = document.querySelectorAll(".seat:not(.reserved)");

getFromLocalStroge();
calculateTotal();

contanier.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("reserved")
  ) {
    e.target.classList.toggle("selected");
    calculateTotal();
  }
});

select.addEventListener("change", function (e) {
  calculateTotal();
});

function calculateTotal() {
  const selectedSeats = contanier.querySelectorAll(".seat.selected");
  const selectedSeatsArr = [];
  const seatsArr = [];

  selectedSeats.forEach(function (seat) {
    selectedSeatsArr.push(seat);
  });

  seats.forEach(function (seat) {
    seatsArr.push(seat);
  });

  let selectedSeatIndexs = selectedSeatsArr.map(function (seat) {
    return seatsArr.indexOf(seat);
  });

  let selectedSeatCount = contanier.querySelectorAll(".seat.selected").length;
  count.innerText = selectedSeatCount;
  amount.innerText = selectedSeatCount * select.value;

  saveToLocalStornge(selectedSeatIndexs);
}

function getFromLocalStroge(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if(selectedSeats != null && selectedSeats.length > 0){
        seats.forEach(function(seat,index ){
            if(selectedSeats.indexOf(index) > -1){
                seat.classList.add('selected');
            }
        })
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');7

    if(selectedMovieIndex != null){
        select.selectedIndex = selectedMovieIndex;
    }

}

function saveToLocalStornge(indexs) {
  localStorage.setItem("selectedSeats", JSON.stringify(indexs));
  localStorage.setItem("selectedMovieIndex", select.selectedIndex);
}



// Sayfa yenileme veya kapatma uyarısı göster
window.addEventListener("beforeunload", function (e) {
    e.preventDefault();
    e.returnValue = "Sayfayı yenilemek istediğinize emin misiniz? Yenilerseniz veriler silinecek!";
  });
  
  // Sayfa yüklendiğinde veya yenilendiğinde localStorage temizle
  window.addEventListener("load", function () {
    const confirmationMessage = "Yenileme onaylandı, tüm veriler temizleniyor!";
    if (confirm(confirmationMessage)) {
      localStorage.clear();
      location.reload(); // Sayfayı tamamen yenile
    }
  });