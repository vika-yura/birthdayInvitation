import React, {Fragment, useEffect, useState} from 'react';
import { Badge } from 'react-bootstrap';

import EditWish from './EditWish';

const WishList = ({guests}) => {
  const [wishlist, setWishlist] = useState([]);

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
    getWishes();
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
