import claro from "../assets/restaurants-images/claro.svg";

export const RestaurantsData: RestaurantDataType[] = [
	// export const RestaurantsData: any = [
	{
		id: "1",
		image: claro,
		chefName: "Ran Shmueli",
		restaurantName: "claro",
	},
	{
		id: "2",
		image: claro,
		chefName: "Meir Adoni",
		restaurantName: "Lumina",
	},
];

interface RestaurantDataType {
	id: string;
	image: string;
	chefName: string;
	restaurantName: string;
}
