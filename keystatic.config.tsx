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
        excerpt: fields.text({
          label: "Excerpt",
        }),
        image: fields.image({
          label: "Bild",
          directory: "public/images/scandals",
          publicPath: "/images/scandals/",
        }),
        imageCopyright: fields.text({
          label: "Bildrechte",
        }),
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
        title: fields.text({ label: "Titel" }),
        heroTitleImage: fields.image({
          label: "Überschrift Bild",
          directory: "public/images/home",
          publicPath: "/images/home/",
        }),
        heroTitleImageLabel: fields.text({
          label: "Überschrift Bild Label",
        }),
        heroBackgroundImage: fields.image({
          label: "Hintergrund Bild",
          directory: "public/images/home",
          publicPath: "/images/home/",
        }),
        topRightImage: fields.image({
          label: "Bild oben rechts/JG Logo",
          directory: "public/images/home",
          publicPath: "/images/home/",
        }),
        topRigthImageLabel: fields.text({
          label: "Logo Label",
        }),
        // content: fields.document({
        //   label: "Content",
        //   formatting: true,
        //   dividers: true,
        //   links: true,
        //   images: true,
        // }),
      },
    }),
  },
});
