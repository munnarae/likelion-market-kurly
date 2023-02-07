import {
  getNode,
  attr,
  saveStorage,
  loadStorage,
  insertFirst,
} from '../lib/index.js';

const header = getNode('.header');
const navHeaderButton = getNode('.nav__header__button');
const navCategoryWrapper = getNode(
  '.nav__category__wrapper'
);

document.documentElement.addEventListener(
  'mouseover',
  visibleCategory
);
navCategoryWrapper?.addEventListener(
  'mouseout',
  invisibleCategory
);
navHeaderButton?.addEventListener(
  'mouseout',
  invisibleCategory
);

function visibleCategory(e) {
  e.stopPropagation();
  if (
    attr(e.target, 'class') === 'nav__header__button' ||
    attr(e.target, 'class')?.includes('nav__category')
  ) {
    navCategoryWrapper.style.display = 'block';
  }
}

function invisibleCategory(e) {
  if (attr(e.target, 'class')?.includes('nav__category'))
    navCategoryWrapper.style.display = 'none';
}
// 탑 ad광고 창 닫기
let button = document.querySelector('.topbanner__close');
function handler() {
  let AD = document.querySelector('.topbanner');
  AD.style.display = 'none';
}
button?.addEventListener('click', handler);

/* -------------------------------------------------------------------------- */
/*                      hyunwlee recently viewed product                      */
/* ---------------------------- ✨ 더미값 입니다. ------------------------------- */
/* -------------------------------------------------------------------------- */
saveStorage('recentlyViewedProduct', [
  {
    id: 'product-rksk',
    name: '[대구 반할만떡] 유부호만두',
    description: '유부로 속을 든든히 채운 군만두',
    price: 6900,
    saleRatio: 0.24,
    salePrice: 5244,
    image: {
      thumbnail: 'ubuho/thumbnail.jpg',
      view: 'ubuho/detail_view.jpg',
      banner: 'ubuho/detail_banner.jpg',
      info: 'ubuho/detail_info.jpg',
      alt: '유부호 만두',
    },
    stock: 3,
  },
  {
    id: 'product-ekfk',
    name: '[풀무원] 탱탱쫄면 (4개입)',
    description: '튀기지 않아 부드럽고 매콤한',
    price: 4980,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail: 'tangtang/thumbnail.jpg',
      view: 'tangtang/detail_view.jpg',
      banner: 'tangtang/detail_banner.jpg',
      info: 'tangtang/detail_info.jpg',
      alt: '풀무원 탱탱쫄면',
    },
    stock: 10,
  },
  {
    id: 'product-akqk',
    name: '[홍대주꾸미] 주꾸미 볶음 300g (냉동)',
    description: '매콤달콤한 마력의 밥도둑',
    price: 7900,
    saleRatio: 0.13,
    salePrice: 6800,
    image: {
      thumbnail: 'jukkumi/thumbnail.jpg',
      view: 'jukkumi/detail_view.jpg',
      banner: 'jukkumi/detail_banner.jpg',
      info: 'jukkumi/detail_info.jpg',
      alt: '홍대 주꾸미',
    },
    stock: 8,
  },
  {
    id: 'product-tkwk',
    name: '[강남면옥] 소갈비찜',
    description: '보는 맛과 먹는 맛 모두 푸짐',
    price: 29800,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail: 'kangnam/thumbnail.jpg',
      view: 'kangnam/detail_view.jpg',
      banner: 'kangnam/detail_banner.jpg',
      info: 'kangnam/detail_info.jpg',
      alt: '강남면옥 소갈비찜',
    },
    stock: 2,
  },
  {
    id: 'product-ckzk',
    name: "[Kalry's] 한돈 삼겹 베이컨",
    description:
      '무항생제 한돈 삼겹살의 고소한 풍미 그대로',
    price: 4500,
    saleRatio: 0.25,
    salePrice: 3375,
    image: {
      thumbnail: 'bacon/thumbnail.jpg',
      view: 'bacon/detail_view.jpg',
      banner: 'bacon/detail_banner.jpg',
      info: 'bacon/detail_info.jpg',
      alt: '칼리 한돈 삼겹 베이컨',
    },
    stock: 13,
  },
]);
/* -------------------------------------------------------------------------- */
/*                                   최근 본 상품                                  */
/* -------------------------------------------------------------------------- */
/* ---------------------------------- IIFE ---------------------------------- */
const recentWrapper = getNode(
  '.main__recent-product__swiper__wrapper'
);
(function () {
  loadStorage('recentlyViewedProduct').then((item) =>
    item.forEach((product) => {
      let template = `
      <div
      class="swiper-slide main__recent-product__swiper__slide"
      >
        <img
        src="../assets/${product.image.thumbnail}"
        alt=${product.info}
        srcset=""
        />
        </div>
        `;
      insertFirst(recentWrapper, template);
    })
  );
})();
/* -------------------------------------------------------------------------- */
