import { $fetch } from "ofetch";

export const config = {
	runtime: "edge",
};

export default function handler() {
	$fetch();
	return new Response("foobar");
}
