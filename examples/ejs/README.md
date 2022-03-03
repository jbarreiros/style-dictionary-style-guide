# Single-page static style guide using EJS templates

Single-page style guide, using the EJS templating engine, and generated with a custom Style Dictionary format.

The following are standard for a Style Dictionary project:

- `./assets/` - Fonts and icons.
- `./dist/` - Target folder for generated design tokens and assets.
- `./src/` - The bare minimum transforms and formats necessary to generate this example.
- `./tokens/`

The following are specific for generating the static style guide:

- `./public/` - Where the style guide is built. Copy the contents of this folder to a publicly accessible location, like GitHub Pages.
- `./src/styleGuide.js` - Style Dictionary formatter, which generates `index.html`.
- `./views/` - EJS templates for `index.html`, as well as formatting for token names, values and samples.
- `style-guide-config.json` - Represents the metadata and structure of the style guide. Tokens are organized into sections and subgroups, and each group can have a different presentation.

Caveats:

- This README needs more work.
- The generated style guide isn't super pretty; I'm not a designer.
- I have zero experience with mobile, and unsure how android/ios apps would affect any of this.

### config.json

The `style-guide/static` format takes the following configuration, merges the associated tokens into each group, and renders `public/index.html`.

```json
{
  "title": "<page title>",
  "introduction": "<optional intro paragraph>",
  "sections": [
    {
      "title": "<section title, e.g. Colors>",
      "groups": [
        {
          "title": "<optional group title, e.g. Primary Colors>",
          "tokensPath": "<tokens path, e.g. color.primary>",
          "order": [
            "<optional override for token order>",
            "e.g. [red-1, red-base, red-3]"
          ],
          "layout": "<table, grid, grid-[1-5]>",
          "nameFormat": "<optional override for the token name>",
          "sampleFormat": "<optional override for the token sample/example>",
          "valueFormat": "<optional override for the token value>"
        }
      ]
    }
  ]
}
```

### Templates

todo
