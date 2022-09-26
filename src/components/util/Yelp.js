const apiKey =  "my-api-key";

const Yelp = {
  searchYelp(term, location, sortBy) {
    return fetch(
      `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        if (jsonResponse.businesses) {
          jsonResponse.businesses.map(business => {
            console.log(business);
            return {
              id: business.id,
              imgSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count
            };
          });
        }
      })
      .catch(error => console.log(error));
  }
};

export default Yelp;