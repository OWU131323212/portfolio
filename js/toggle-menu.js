// ハンバーガーメニューのボタン要素を取得
const toggleMenuButton = document.querySelector(".toggle-menu-button");
// メニュー全体の要素を取得
const headerSiteMenu = document.querySelector(".header-site-menu");

// メニューボタンがクリックされたときの処理を設定
toggleMenuButton.addEventListener("click", () => {
  // メニュー要素に 'is-shown' クラスを付けたり外したりする
  headerSiteMenu.classList.toggle("is-shown");
});

// Worksセクションをスクロールする関数
function scrollWorks(amount) {
  const scroller = document.querySelector(".works-scroller");
  scroller.scrollBy({
    left: amount,
    behavior: "smooth",
  });
}

// 趣味セクションをスクロールする関数
function scrollHobbies(amount) {
  const scroller = document.querySelector(".hobby-scroller");
  scroller.scrollBy({
    left: amount,
    behavior: "smooth",
  });
}
