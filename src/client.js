import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "0gdooh8l",
  dataset: "production",
  apiVersion: "2021-05-19",
  useCdn: true,
});
