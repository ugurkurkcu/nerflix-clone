const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// select tab content item
function selectItem(e) {
  removeBorder();
  removeShow();

  this.classList.add("tab-border");
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add("show");
}

function removeBorder() {
  tabItems.forEach((element) => {
    element.classList.remove("tab-border");
  });
}
function removeShow() {
  tabContentItems.forEach((element) => {
    element.classList.remove("show");
  });
}

// lsiten for tab click
tabItems.forEach((item) => item.addEventListener("click", selectItem));
