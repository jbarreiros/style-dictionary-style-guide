# Single-page static style guide using EJS templates

Single-page style guide, using the EJS templating engine, and generated with a Style Dictionary format.

- `style-guide-config.json` - Represents the metadata and structure of the style guide. Tokens are organized into sections and subgroups, and each group can have a different presentation.
- `./views/` contains the EJS templates.
- `./public/` is where the static style guide is built. Copy the contents of this folder to a publicly accessible location, like GitHub Pages.
- `./src/` contains the bare minimum transforms and formats necessary to generate a functional style guide. The `styleGuide.js` format is the critical bit, which generates the static `index.html`.
- `./assets/` and `./tokens/` are standard folders found in most Style Dictionary examples.

Caveats:

- This README needs more work.
- The generated style guide isn't super pretty; I'm not a designer.
- I have zero experience with mobile, and unsure how android/ios apps would affect any of this.

### config.json

The `style-guide/static` format takes the following configuration, merges the associated tokens into each group, and renders the static `index.html`.

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
