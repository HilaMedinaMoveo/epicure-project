import claro from "../assets/restaurants-images/claro.svg";

export const PopularData: PopularDataType[] = [
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
	{
		id: "3",
		image: claro,
		chefName: "Meir Adoni",
		restaurantName: "Lumina",
	},
];

interface PopularDataType {
	id: string;
	image: string;
	chefName: string;
	restaurantName: string;
}
