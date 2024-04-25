const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div>
      <div className="card w-96 glass">
        <figure>
          <img src={image} alt="car!" />
        </figure>
        <p className="absolute right-0 mr-4 mt-4 px-4 py-1 bg-slate-900 text-white">
          $ {price}
        </p>
        <div className="card-body text-center">
          <h2 className="text-2xl">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button className="uppercase text-yellow-500 btn btn-outline border-0 border-b-4">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
