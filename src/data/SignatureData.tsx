import apple from "../assets/images/apple.svg";
import claro from "../assets/restaurants-images/claro.svg";
import KitchenMarket from "../assets/restaurants-images/KitchenMarket.svg";
import Shekel from "../assets/restaurants-images/Shekel.svg";

export const SignatureData: SignatureDataType[] = [
	{
		id: "2",
		restaurantPic: claro,
		restaurantName: "Claro",
		restauratDetails:
			"Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
		icon: "",
		dishPrice: 88,
		priceIcon: Shekel,
	},
	{
		id: "2",
		restaurantPic: KitchenMarket,
		restaurantName: "Kitchen Market",
		restauratDetails:
			"Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
		icon: "",
		dishPrice: 78,
		priceIcon: Shekel,
	},
];

interface SignatureDataType {
	id: string;
	restaurantPic: string;
	restaurantName: string;
	restauratDetails: string;
	icon: string;
	dishPrice: number;
	priceIcon: string;
}
