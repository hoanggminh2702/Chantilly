Array.from(document.querySelectorAll(".chantilly-product-card")).forEach(
  (productCard) => {
    const imgContainer = productCard.querySelector(".product-image-container");

    imgContainer.addEventListener("mouseover", (e) => {
      const imgs = Array.from(e.currentTarget.querySelectorAll(".product-img"));

      const index = imgs.findIndex((img) => img.classList.contains("active"));

      if (imgs.length > 1) {
        if (index < imgs.length - 1) {
          imgs[index + 1].classList.add("active");
          imgs[index].classList.remove("active");
        } else {
          imgs[index].classList.remove("active");
          imgs[0].classList.add("active");
        }
      }
    });

    imgContainer.addEventListener("mouseout", (e) => {
      const imgs = Array.from(e.currentTarget.querySelectorAll(".product-img"));
      const index = imgs.findIndex((img) => img.classList.contains("active"));
      if (imgs.length > 1) {
        if (index > 0) {
          imgs[index].classList.remove("active");
          imgs[index - 1].classList.add("active");
        } else {
          imgs[index].classList.remove("active");
          imgs[imgs.length - 1].classList.add("active");
        }
      }
    });
  }
);

Array.from(document.querySelectorAll(".product-colors")).forEach(
  (productColor) => {
    const productId = productColor.getAttribute("data-product-color");

    const imgContainer = document.querySelector(
      `[data-product-container="${productId}"]`
    );

    const imgs = Array.from(imgContainer.querySelectorAll(".product-img"));
    const colorPoints = Array.from(
      productColor.querySelectorAll(".color-choosen-point")
    );

    colorPoints.forEach((point, index) => {
      point.addEventListener("mouseover", (e) => {
        const pointActiveIndex = colorPoints.findIndex((point) =>
          point.classList.contains("active")
        );
        if (pointActiveIndex != -1) {
          if (pointActiveIndex != index) {
            colorPoints[pointActiveIndex].classList.remove("active");
          }
        }
        e.currentTarget.classList.add("active");

        const pointImg = e.currentTarget.querySelector("img");
        const alt = pointImg.getAttribute("alt");
        const activeIndex = imgs.findIndex((img) => {
          const imgAlt = img.getAttribute("alt");
          if (!imgAlt) return false;
          return imgAlt.includes(alt);
        });

        const inActiveIndex = imgs.findIndex((img) =>
          img.classList.contains("active")
        );

        if (activeIndex != inActiveIndex) {
          imgs[activeIndex].classList.add("active");
          imgs[inActiveIndex].classList.remove("active");
        }
      });
    });
  }
);

// Array.from(document.querySelectorAll(".change-img-btn")).forEach((btn) => {
//   const productId = btn.getAttribute("data-product-btn");

//   const imgs = document.querySelectorAll(
//     `[data-product-container="${productId}"] > product.img`
//   );

//   btn.addEventListener("click", (e) => {
//     console.log("Trigger");
//     e.stopPropagation();
//     if (e.target.classList.contains("next")) {
//     } else if (e.target.classList.contains("next")) {
//     }
//   });
// });

Array.from(document.querySelectorAll(".product-image-container")).forEach(
  (container) => {
    container.addEventListener("click", (e) => {
      if (e.target.closest(".change-img-btn")) {
        e.preventDefault();
        // Make sure the click event is the btn
        let btn = e.target.parentNode;
        if (!btn.classList.contains("change-img-btn")) {
          btn = btn.parentNode;
        }

        // Make sure when mouse move to the image, the active class is updated in image element object
        const imgs = Array.from(container.querySelectorAll(".product-img"));
        const findIndex = imgs.findIndex((img) =>
          img.classList.contains("active")
        );

        if (btn.classList.contains("prev")) {
          if (findIndex > 0) {
            imgs[findIndex - 1].classList.add("active");
            imgs[findIndex].classList.remove("active");
          } else {
            imgs[imgs.length - 1].classList.add("active");
            imgs[findIndex].classList.remove("active");
          }
        } else if (btn.classList.contains("next")) {
          if (findIndex < imgs.length - 1) {
            imgs[findIndex + 1].classList.add("active");
            imgs[findIndex].classList.remove("active");
          } else {
            imgs[0].classList.add("active");
            imgs[findIndex].classList.remove("active");
          }
        }
      }
    });
  }
);
