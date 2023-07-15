import { config, collection, fields, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    scandals: collection({
      label: "Skandale",
      slugField: "name",
      path: "skandale/*",
      schema: {
        name: fields.slug({ name: { label: "Name" } }),
        excerpt: fields.text({ label: "Excerpt" }),
        links: fields.array(
          fields.object({
            label: fields.text({
              label: "Link Text",
            }),
            link: fields.url({
              label: "Link",
            }),
          }),
          {
            label: "Links",
            itemLabel: (props) =>
              `${props.fields.label.value} -> ${props.fields.link.value}`,
          }
        ),
      },
    }),
  },
  singletons: {
    home: singleton({
      label: "Die sind nicht normal!",
      schema: {
        title: fields.text({ label: "Title" }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
  },
});
