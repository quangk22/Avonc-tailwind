// Lấy tham chiếu đến các phần tử DOM cần thiết
const showSearchButton = document.getElementById('showSearchButton');
const showSearchButton2 = document.getElementById('showSearchButton2');
const searchContainer = document.getElementById('searchContainer');
const overlay = document.getElementById('overlay');
const overlayCart = document.getElementById('overlayCart');
const closeButton = document.getElementById('close');
const closeCartButton = document.getElementById('closeCart');
const showUserButton = document.getElementById('showUser');
const userContainer = document.getElementById('User');
const showCart = document.getElementById('showCart');
const cartContainer = document.getElementById('cardContainer');
// Khi nút "Hiển thị ô tìm kiếm" được nhấp vào
showSearchButton.addEventListener('click', (e) => {
    e.stopPropagation(); // Ngăn chặn sự kiện click từ việc lan truyền lên cấp cao hơn
    searchContainer.classList.toggle('hidden'); // Sử dụng toggle để thay đổi trạng thái ẩn/hiển thị
    searchContainer.style.transform = 'translateY(0)';
});
showSearchButton2.addEventListener('click', (e) => {
    e.stopPropagation(); // Ngăn chặn sự kiện click từ việc lan truyền lên cấp cao hơn
    searchContainer.classList.toggle('hidden'); // Sử dụng toggle để thay đổi trạng thái ẩn/hiển thị
    searchContainer.style.transform = 'translateY(0)';
});
document.addEventListener('click', () => {
    searchContainer.classList.add('hidden');
});
   // Ngăn chặn sự kiện click trên search container từ việc lan truyền ra ngoài
searchContainer.addEventListener('click', (e) => {
    e.stopPropagation();
});
overlay.addEventListener('click', () => {
    searchContainer.classList.add('hidden');
});
// Khi nút "X" được nhấp vào
closeButton.addEventListener('click', () => {
    searchContainer.classList.add('hidden');
});


showCart.addEventListener('click', (e) => {
    e.stopPropagation(); // Ngăn chặn sự kiện click từ việc lan truyền lên cấp cao hơn
    cartContainer.classList.toggle('hidden'); // Sử dụng toggle để thay đổi trạng thái ẩn/hiển thị
});
closeCartButton.addEventListener('click',() => {
    cartContainer.classList.add('hidden');
})
overlayCart.addEventListener('click',() =>{
    cartContainer.classList.add('hidden');
})

// 
 // Khi click vào button user
 showUserButton.addEventListener('click', (e) => {
    e.stopPropagation(); // Ngăn chặn sự kiện click từ việc lan truyền lên cấp cao hơn
    userContainer.classList.toggle('hidden'); // Sử dụng toggle để thay đổi trạng thái ẩn/hiển thị
});
// Khi click bất kì chỗ nào trên trang (ngoại trừ user container), ẩn đi user container
document.addEventListener('click', () => {
    userContainer.classList.add('hidden');
});
// Ngăn chặn sự kiện click trên user container từ việc lan truyền ra ngoài
userContainer.addEventListener('click', (e) => {
    e.stopPropagation();
});



document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.card');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.card');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
// 
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}