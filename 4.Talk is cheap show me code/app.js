/**
 * Our app layout has:
 * 1.Header 
 *  - Logo
 *  -Navigation List.- Right Side of Header
 *  -Cart 
 * - Login Button
 * - Sign Up Button
 * 2. Body
 *    - Search Bar
 *    - Restuarant List
 *          1. Restuarant Card
 *             - Restuarant Image
 *             - Restuarant Name
 *             - Restuarant Rating
 *             - Restuarant Cuisines
 *  
 * 3. Footer
 *  - Social Media Links
 *  - Contact Us
 *  - About Us
 *  -Address.........
 *   Config Driven UI -- it is real world data used in the code
 * 
 * JSX should have only one parent element
 *  ReactFragement- Its Component that is exported given to us by React
 *   <React.Fragment></React.Fragment> === <></> empty tag is also a React Fragment
 *  Inline style in react
    const styleobj = {
    backgroundColor: "red",
    };
The Above Code is Same as Below Code as Inline Styling in Reactjs.
    const Body = ()=>{
        return(
            <div style={{backgroundColor: "red"}}></div> 
        )
    }

    Can I use React Fragement inside another React Fragment? -- The Answer is Yes We can use React Fragment Multiple Times
    Example Code
    import React, { Fragment } from 'react';

function Example() {
  return (
    <Fragment>
      <div>Outer Fragment</div>
      <Fragment>
        <div>Inner Fragment</div>
      </Fragment>
    </Fragment>
  );
}
Yes, you can add a key in the below form Fragment which is not possible in the shorter version of Fragments(i.e, <></>)

<Fragment key={your key}></Fragment>
Like any other element, you can assign Fragment elements to variables, pass them as props, and so on:

function CloseDialog() {
  const buttons = (
    <>
      <OKButton />
      <CancelButton />
    </>
  );
  return (
    <AlertDialog buttons={buttons}>
      Are you sure you want to leave this page?
    </AlertDialog>
  );
}

import { Fragment } from 'react';

const posts = [
  { id: 1, title: 'An update', body: "It's been a while since I posted..." },
  { id: 2, title: 'My new blog', body: 'I am starting a new blog!' }
];

export default function Blog() {
  return posts.map(post =>
    <Fragment key={post.id}>
      <PostTitle title={post.title} />
      <PostBody body={post.body} />
    </Fragment>
  );
}

function PostTitle({ title }) {
  return <h1>{title}</h1>
}

function PostBody({ body }) {
  return (
    <article>
      <p>{body}</p>
    </article>
  );
}
// the below code is static code have look
<div className='restuarant-card'>
        <img src='https://b.zmtcdn.com/data/pictures/chains/8/18138658/ef5d98d593dd983ace605992ad3d2f35.jpg?fit=around|750:500&crop=750:500;*,*'/>
        <h4>Burger King</h4>
        <h5>Burgers, American</h5>
        <h6>4.2 stars</h6>
      </div>



      // now we need to make it dynamic 
      const BurgerKing = {
  image: "https://b.zmtcdn.com/data/pictures/chains/8/18138658/ef5d98d593dd983ace605992ad3d2f35.jpg?fit=around|750:500&crop=750:500;*,*",
  name: 'Burger King',
  cuisines: 'Burgers, American',
  rating: '4.2 stars'
}
const RestuarantCard = () =>{
  return (
      <div className='restuarant-card'>
        <img src={BurgerKing.image}/>
        <h4>{BurgerKing.name}</h4>
        <h5>{BurgerKing.cuisines}</h5>
        <h6>{BurgerKing.rating}</h6>
      </div>
      https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/
// it may be dynamic but it is not reusable and not a real world data so the other way of writing code is Config Driven UI
  ? Optional chaining in modern javascript
  RestuarantCard = () =>{
  return (
      <div className='restuarant-card'>
        <img src={BurgerKing.image}/>
        <h4>{restrolist[0].data?.name}</h4>
        <h5>{restrolist.cuisines}</h5>
        <h6>{BurgerKing.rating}</h6>
      </div>
      )

      //destructuring
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/"+
      restaurant.data.cloudinaryImageId}/>
        <h4>{restaurant.data?.name}</h4>
        <h5>{restaurant.data?.cuisines.join(',')}</h5>
        <h6>{restaurant.data?.lastMileTravelString}</h6>
      </div>
 */
      // props - properties = <RestuarantCard restaurant = {restrolist[0]}/>
      // another way of writing props inside component = {RestuarantCard(restrolist[0])}
      // multiple props is possible in react`
      // {/* <RestuarantCard {...restrolist[0].data}/>
      /* <RestuarantCard {...restrolist[1].data}/>
      <RestuarantCard {...restrolist[2].data}/>
      <RestuarantCard {...restrolist[3].data}/>
      <RestuarantCard {...restrolist[4].data}/>
      <RestuarantCard {...restrolist[5].data}/>
      <RestuarantCard {...restrolist[6].data}/>
      <RestuarantCard {...restrolist[7].data}/> */
import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = () => (
    <a href='/'>
   <img className="head-logo" 
   src='https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg' 
   alt='logo'/>
   </a>
)
const Header= () =>{

    return( <div className='Header'>
            <Title/>
            <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
        
    );
}

const restrolist = [
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "105167",
      "name": "Bhartiya Jalpan",
      "uuid": "22116683-45c0-4422-af7b-36d7917a9d95",
      "city": "1",
      "area": "Commercial Street",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "lpikismf7ulkpknsbw2h",
      "cuisines": [
        "North Indian",
        "Sweets",
        "Desserts",
        "Chaat"
      ],
      "tags": [
        
      ],
      "costForTwo": 27000,
      "costForTwoString": "₹270 FOR TWO",
      "deliveryTime": 40,
      "minDeliveryTime": 40,
      "maxDeliveryTime": 50,
      "slaString": "40-50 MINS",
      "lastMileTravel": 3,
      "slugs": {
        "restaurant": "bhartiya-jalpan-central-bangalore",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "14, Commercial Street, Tasker Town, Shivaji Nagar, Bengaluru, Karnataka 560001",
      "locality": "Tasker Town",
      "parentId": 7518,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "40% off",
        "shortDescriptionList": [
          {
            "meta": "40% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "40% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3900,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3900",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6621078~p=1~eid=00000188-060a-57e3-3f14-a3d200e4016c",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "105167",
        "deliveryTime": 40,
        "minDeliveryTime": 40,
        "maxDeliveryTime": 50,
        "lastMileTravel": 3,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.2",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "30531",
      "name": "Hotel Empire",
      "uuid": "134dd05e-561e-449a-9ba5-b1f6a3c5cb8b",
      "city": "1",
      "area": "Hotel Empire International",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "qltgnkyywuo5gmnpqzbm",
      "cuisines": [
        "North Indian",
        "Kebabs",
        "Biryani"
      ],
      "tags": [
        
      ],
      "costForTwo": 45000,
      "costForTwoString": "₹450 FOR TWO",
      "deliveryTime": 38,
      "minDeliveryTime": 35,
      "maxDeliveryTime": 45,
      "slaString": "35-45 MINS",
      "lastMileTravel": 2.0999999046325684,
      "slugs": {
        "restaurant": "empire-restaurant-central-bangalore-central-bangalore",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "Empire SuitesNo.35, Castle Street, Off Brigade Road,Bengaluru, Karnataka 560025",
      "locality": "Brigade Road",
      "parentId": 475,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "10% off",
        "shortDescriptionList": [
          {
            "meta": "10% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "10% off up to ₹40 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "10% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "10% off up to ₹40 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3100,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3100",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "30531",
        "deliveryTime": 38,
        "minDeliveryTime": 35,
        "maxDeliveryTime": 45,
        "lastMileTravel": 2.0999999046325684,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.2",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "667962",
      "name": "Paris Panini - Gourmet Sandwiches",
      "uuid": "f259a8ff-15e1-4584-a714-4ec867531d87",
      "city": "1",
      "area": "Central Bangalore",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "33101e2fff3a071cbd8b85e73c0d4f45",
      "cuisines": [
        "Snacks",
        "European",
        "Salads",
        "Beverages",
        "Pastas"
      ],
      "tags": [
        
      ],
      "costForTwo": 50000,
      "costForTwoString": "₹500 FOR TWO",
      "deliveryTime": 36,
      "minDeliveryTime": 36,
      "maxDeliveryTime": 36,
      "slaString": "36 MINS",
      "lastMileTravel": 1.7999999523162842,
      "slugs": {
        "restaurant": "paris-panini-–-gourmet-sandwiches-central-bangalore-central-bangalore",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "NO 20, CHURCH STREET, BANGALORE,560001",
      "locality": "Church Street",
      "parentId": 21019,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "30% off",
        "shortDescriptionList": [
          {
            "meta": "30% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "30% off up to ₹75 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "30% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "30% off up to ₹75 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3100,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3100",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6576699~p=4~eid=00000188-060a-57e3-3f14-a3d300e40406",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.7 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "667962",
        "deliveryTime": 36,
        "minDeliveryTime": 36,
        "maxDeliveryTime": 36,
        "lastMileTravel": 1.7999999523162842,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.5",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "3241",
      "name": "Meghana Foods",
      "uuid": "93695df0-56e1-417e-b9a8-32084ebaadaf",
      "city": "1",
      "area": "Ashok Nagar",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "e0vvulfbahjxjz6k4uwi",
      "cuisines": [
        "Biryani",
        "Andhra",
        "South Indian",
        "North Indian",
        "Chinese",
        "Seafood"
      ],
      "tags": [
        
      ],
      "costForTwo": 50000,
      "costForTwoString": "₹500 FOR TWO",
      "deliveryTime": 39,
      "minDeliveryTime": 35,
      "maxDeliveryTime": 45,
      "slaString": "35-45 MINS",
      "lastMileTravel": 2.4000000953674316,
      "slugs": {
        "restaurant": "meghana-foods-central-bangalore",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "57/1, 1st Floor, Jayalaxmi Chambers, Next to Old Galaxy Theatre,Residency Road, Bangalore",
      "locality": "Residency Road",
      "parentId": 635,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3100,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3100",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2.4 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "3241",
        "deliveryTime": 39,
        "minDeliveryTime": 35,
        "maxDeliveryTime": 45,
        "lastMileTravel": 2.4000000953674316,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.5",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "10575",
      "name": "Pizza Hut",
      "uuid": "e11ec29c-e500-468b-acac-cf374c22ac45",
      "city": "1",
      "area": "Shanthi Nagar",
      "totalRatingsString": "5000+ ratings",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
      "cuisines": [
        "Pizzas"
      ],
      "tags": [
        
      ],
      "costForTwo": 60000,
      "costForTwoString": "₹600 FOR TWO",
      "deliveryTime": 33,
      "minDeliveryTime": 30,
      "maxDeliveryTime": 40,
      "slaString": "30-40 MINS",
      "lastMileTravel": 2.700000047683716,
      "slugs": {
        "restaurant": "pizza-hut-oshngness-road-central-bangalore",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "4/1, O'Shaughnessy Road, Richmond Town, Langford Gardens, Bengaluru, Karnataka 560025",
      "locality": "Shanti Nagar",
      "parentId": 721,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3100,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3100",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2.7 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "10575",
        "deliveryTime": 33,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 40,
        "lastMileTravel": 2.700000047683716,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.9",
      "totalRatings": 5000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "600456",
      "name": "Daily Sushi",
      "uuid": "494bc7a5-8bda-40b0-8db9-7454c658ea02",
      "city": "1",
      "area": "Ashok Nagar",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "mpnblqqkh7xpi4h0fnju",
      "cuisines": [
        "Japanese",
        "Asian",
        "Korean"
      ],
      "tags": [
        
      ],
      "costForTwo": 80000,
      "costForTwoString": "₹800 FOR TWO",
      "deliveryTime": 42,
      "minDeliveryTime": 42,
      "maxDeliveryTime": 42,
      "slaString": "42 MINS",
      "lastMileTravel": 1.2999999523162842,
      "slugs": {
        "restaurant": "daily-sushi-central-bangalore-central-bangalore",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "1st Floor, No 1/1-1, Museum Road, Haridevpur, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001",
      "locality": "Shanthala Nagar",
      "parentId": 7388,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3100,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3100",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6579553~p=7~eid=00000188-060a-57e3-3f14-a3d400e4076b",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.2 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "600456",
        "deliveryTime": 42,
        "minDeliveryTime": 42,
        "maxDeliveryTime": 42,
        "lastMileTravel": 1.2999999523162842,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.4",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "210945",
      "name": "Royal Restaurant",
      "uuid": "9b33bca4-65e6-4a26-af3e-f47c4476ed4d",
      "city": "1",
      "area": "Shivajinagar",
      "totalRatingsString": "5000+ ratings",
      "cloudinaryImageId": "yicweopn4lzcjlqy4jvq",
      "cuisines": [
        "Chinese",
        "North Indian",
        "Tandoor"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 38,
      "minDeliveryTime": 35,
      "maxDeliveryTime": 45,
      "slaString": "35-45 MINS",
      "lastMileTravel": 2.5999999046325684,
      "slugs": {
        "restaurant": "royal-restaurant-central-bangalore-central-bangalore",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "Broadway Road Police Station, HKP Road, Sulthangunta, Shivajinagar, Bengaluru, Bangalore Urban, Karnataka, India",
      "locality": "Sulthangunta",
      "parentId": 2896,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "35% off",
        "shortDescriptionList": [
          {
            "meta": "35% off on all orders",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "35% off on all orders",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "35% OFF",
        "shortDescriptionList": [
          {
            "meta": "",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "35% off on all orders",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3100,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3100",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "210945",
        "deliveryTime": 38,
        "minDeliveryTime": 35,
        "maxDeliveryTime": 45,
        "lastMileTravel": 2.5999999046325684,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.9",
      "totalRatings": 5000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "196047",
      "name": "New Taj Darbar",
      "uuid": "94a6fc19-e819-4450-b52f-a96c5a32d565",
      "city": "1",
      "area": "Shivajinagar",
      "totalRatingsString": "5000+ ratings",
      "cloudinaryImageId": "nfieyqgxk1omknxfbluj",
      "cuisines": [
        "Biryani",
        "Indian",
        "Chinese",
        "Tandoor",
        "Seafood"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 44,
      "minDeliveryTime": 40,
      "maxDeliveryTime": 50,
      "slaString": "40-50 MINS",
      "lastMileTravel": 2.5999999046325684,
      "slugs": {
        "restaurant": "new-taj-darbar-central-bangalore-central-bangalore",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "New Taj Darbar, Shivaji Nagar, Bengaluru, Karnataka, India",
      "locality": "Saint Mary's Church Road",
      "parentId": 148190,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "Flat ₹125 off",
        "shortDescriptionList": [
          {
            "meta": "Flat ₹125 off on orders above ₹249",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "₹125 OFF",
        "shortDescriptionList": [
          {
            "meta": "Use MATCHDEAL125",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3100,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3100",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "196047",
        "deliveryTime": 44,
        "minDeliveryTime": 40,
        "maxDeliveryTime": 50,
        "lastMileTravel": 2.5999999046325684,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.5",
      "totalRatings": 5000,
      "new": false
    },
    "subtype": "basic"
  },
]

// params are used to destructing the props
const RestuarantCard = ({name, 
  cuisines,
  cloudinaryImageId,
  lastMileTravelString}) =>{

  return (
      <div className='restuarant-card'>
        <img src={IMG_CDN_URL+cloudinaryImageId} alt='Card-image'/>
        <h4>{name}</h4>
        <h5>{cuisines.join(", ")}</h5>
        <h6>{lastMileTravelString}</h6>
      </div>

  )
}
const Body = () => {
    return(
      <div className='Restuarant-list'>
        {restrolist.map((restaurant) => {
          return <RestuarantCard {...restaurant.data} key={restaurant.data.id}/>})
        }
      </div>
    )
}
const Footer = () => {
    return(
        
        <h1>Footer</h1>
    )
}
const AppLayout = () => {
    return (
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);