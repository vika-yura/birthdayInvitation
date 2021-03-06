import React, {Fragment, useEffect, useState} from 'react';
import { Badge } from 'react-bootstrap';

import EditWish from './EditWish';

const WishList = ({guests}) => {
  const wishes = [
    {
      "wish_id": 17,
      "title": "1Ролевые наборы (доктор)",
      "link": null,
      "img": "https://cdn21vek.by/img/galleries/450/946/253619_5e414e93803a0.jpeg",
      "price": null,
      "selected_user": "7"
    },
    {
      "wish_id": 13,
      "title": "qBoard_toys",
      "link": "https://www.instagram.com/qboard_toys/",
      "img": "https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkRJT3K1VOiocGQuJkbBOocaaKTM5SRkZCeTgDn6uOyic",
      "price": null,
      "selected_user": null
    },
    {
      "wish_id": 16,
      "title": "Мусоровоз Revell",
      "link": "https://e-baby.by/p-revell_sbornaya_model_dlya_detey_musorovoz_s_figurkoy_1_20_4_00808/",
      "img": "https://cdn21vek.by/img/galleries/1121/974/preview_b/12000808_revell_5d5d1d99c2a17.jpeg",
      "price": null,
      "selected_user": null
    },
    {
      "wish_id": 2,
      "title": "Lego Duplo",
      "link": "https://www.funtastik.by/igrushki/LEGO/konstruktor-lego-duplo-town-10874-poezd-na-parovoy-tyage/?gclid=Cj0KCQjwhqaVBhCxARIsAHK1tiPxYISX9rSnIEBQdAjUyPILDa0FO7Bbx0Ki9HfVtd9Wbwr5G2hvHkAaAlOtEALw_wcB",
      "img": "https://www.babyshop.com/images/605774/card_xlarge.jpg",
      "price": null,
      "selected_user": null
    },
    {
      "wish_id": 5,
      "title": "Графический планшет xiomi",
      "link": "https://xistore.by/catalog/igrushki/graficheskiy_planshet_xiaomi_mi_writing_tablet_13_5_lcd/?utm_source=google&utm_medium=cpc&utm_campaign=google_shopping&gclid=Cj0KCQjwhqaVBhCxARIsAHK1tiME9pzvgBeT-8-0aBVjql2HIpcRddX7ClHgNtlrS-j-wrZwrueu_XgaAs3sEALw_wcB",
      "img": "https://xistore.by/upload/resize/element/94854/837/e27692a7660cf2e0245b02f7dc5f4774_482_482_50@x2.webp",
      "price": null,
      "selected_user": null
    },
    {
      "wish_id": 9,
      "title": "Book",
      "link": "https://www.wildberries.by/catalog/43881328/detail.aspx?targetUrl=XS",
      "img": "https://libking.ru/uploads/posts/books/113254.jpg",
      "price": null,
      "selected_user": null
    },
    {
      "wish_id": 14,
      "title": "Отвертки игрушечные bosch",
      "link": "https://www.funtastik.by/igrushki/polese/nabor-instrumentov-10-166-elementov-v-konteynere/?gclid=Cj0KCQjwhqaVBhCxARIsAHK1tiPd9IVQp8cGW-Ti_hWrzNJ2QQyWb-5t9gkJSX48LCUL-PSn_3wM7uUaAjEqEALw_wcB",
      "img": "https://cdn21vek.by/img/galleries/479/151/1559307_59ca2d1d40ac6.jpeg",
      "price": null,
      "selected_user": null
    },
    {
      "wish_id": 4,
      "title": "Косметика Gold apple",
      "link": null,
      "img": "https://goldapple.by/media/catalog/product/cache/df20e1840b63c7f40d0acee268900e66/8/8/8809563210114_1_xjna6gtseoxfmmxr.jpg",
      "price": null,
      "selected_user": null
    },
    {
      "wish_id": 11,
      "title": "Hot wheels",
      "link": "https://papa.by/catalog/igrushki/igrushechnij-transport/hot-wheels-trek-razvodnoj-most-hot-vils-dww97",
      "img": "https://www.funtastik.by/upload/iblock/80e/80e2dd93f42d73fc76e809aa392bc86e.jpg",
      "price": null,
      "selected_user": null
    },
    {
      "wish_id": 3,
      "title": "Магнитный конструктор",
      "link": "https://www.wildberries.by/catalog/17396996/detail.aspx?targetUrl=XS",
      "img": "https://www.i-igrushki.ru/upload/iblock/6cc/6cc80ad16534ac3501a20eace07429b9.jpg",
      "price": null,
      "selected_user": null
    },
    {
      "wish_id": 8,
      "title": "PlayDoh",
      "link": "https://www.wildberries.by/catalog/33985587/detail.aspx?targetUrl=XS",
      "img": "https://www.funtastik.by/upload/iblock/502/50222b414c7bd2cef9cf4bf28dbecae1.png",
      "price": null,
      "selected_user": null
    },
    {
      "wish_id": 6,
      "title": "PlayDoh",
      "link": "https://www.wildberries.by/catalog/73201048/detail.aspx?targetUrl=XS",
      "img": "https://www.funtastik.by/upload/iblock/502/50222b414c7bd2cef9cf4bf28dbecae1.png",
      "price": null,
      "selected_user": null
    },
    {
      "wish_id": 12,
      "title": "Игрушечный набор отверток",
      "link": null,
      "img": "https://www.funtastik.by/upload/resize_cache/iblock/636/720_720_040cd750bba9870f18aada2478b24840a/636d0739e1cffe6ca1e1a0bd15917bb2.jpg",
      "price": null,
      "selected_user": null
    },
    {
      "wish_id": 15,
      "title": "Резиновый конь",
      "link": null,
      "img": "https://moveplay.ru/upload/iblock/77a/77af02a06564c71b45420baacb151351.jpeg",
      "price": null,
      "selected_user": null
    }
  ];

  const [wishlist, setWishlist] = useState(wishes);

  //delete
  const deleteWish = async (id) => {
    try {
      const deleteWish = await fetch(`http://localhost:5000/wishes/${id}`,
        {
          method: 'DELETE'
        });

      setWishlist(wishlist.filter(wish => wish.wish_id !== id));
      console.log(deleteWish);
    } catch(err) {
      console.log(err.message());
    }
  };

  const getWishes = async() => {
    try{
      const response = await fetch('http://localhost:5000/wishes');
      const jsonData = await response.json();

      setWishlist(jsonData);
    }catch(err) {
      console.error(err.message());
    }
  };

  useEffect(() => {
   // getWishes();
  }, []);

  console.log(wishlist);
  console.log(2, guests);

  return (
    <Fragment>
      <h3 className="section__title">Вишлист</h3>

      <div className="row">
        {wishlist.map(wish => {
            const test = guests && guests.filter(guest => guest.user_id.toString() === wish.selected_user);
            console.log(test[0]);
          return (
            <div key={wish.wish_id} className={test[0] ? 'card col-md-3 booked' : 'card col-md-3'}>
              <div >
                <img src={wish.img} className="" alt="..." style={{maxWidth: "100%", height: '200px'}}/>
              </div>
              <div className="card-body">
                <h5 className="card-title">{wish.title}</h5>

                <Badge pill bg="success">
                  {test[0] ? test[0].name : ''}
                </Badge>

                <EditWish wish={wish}/>
                {/*<EditWish wish={wish}/>*/}
              </div>
            </div>
          )

        } )}
      </div>
    </Fragment>
  );
};

export default WishList;
