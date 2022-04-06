import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = SanityClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: "production",
	apiVersion: "2022-04-04",
	useCdn: true,
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

/*export const client = SanityClient({
	projectId: `${process.env.SANITY_PROJECT_ID}`,
	dataset: "production",
	apiVersion: "2022-04-04",
	useCdn: true,
	token: `${process.env.SANITY_TOKEN}`,
});
*/

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
