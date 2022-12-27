import apple from "../assets/images/apple.svg";
import spicy from "../assets/images/spicy.svg";
import claro from "../assets/restaurants-images/claro.svg";
import kitchenMarket from "../assets/restaurants-images/kitchenMarket.svg";
import Shekel from "../assets/restaurants-images/shekel.svg";

export const SignatureData: SignatureDataType[] = [
	{
		id: "1",
		restaurantPic: claro,
		restaurantName: "Claro",
		restauratDetails:
			"Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
		icon: spicy,
		dishPrice: 88,
		priceIcon: Shekel,
	},
	{
		id: "2",
		restaurantPic: kitchenMarket,
		restaurantName: "Garber",
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
