import claro from "../assets/restaurants-images/claro.svg";

export const FullData: FullDataType[] = [
	// export const RestaurantsData: any = [
	{
		id: "1",
		image: claro,
		restaurantName: "claro",
        icon: "88"
	},
	{
		id: "2",
		image: claro,
		restaurantName: "Lumina",
        icon: "88"
	},
];

interface FullDataType {
	id: string;
	image: string;
	restaurantName: string;
	icon: string;

}
