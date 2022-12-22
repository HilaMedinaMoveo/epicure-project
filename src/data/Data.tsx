export const RestaurantsData: RestaurantDataType[] = [
	{
		id: "1",
		img: "../assets/restaurants-images/claro.svg",
		chefName: "Ran Shmueli",
		restaurantName: "claro",
	},
];

interface RestaurantDataType {
	id: string,
		img: string,
		chefName: string,
		restaurantName:string,
}