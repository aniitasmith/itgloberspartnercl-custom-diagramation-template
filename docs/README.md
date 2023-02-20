📢 Use this project, [contribute](https://github.com/{OrganizationName}/{AppName}) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# Custom Diagramation
<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

The custom-diagramation-template component allows you to give multiple options to the client to change the position of the elements on the screen.

Desktop
  Grid 1
<img width="1125" alt="image" src="https://user-images.githubusercontent.com/66226368/220023505-79f45cbb-ebb4-4c15-9ed6-c6ca2ec585a9.png">

Desktop Grid 2
<img width="824" alt="image" src="https://user-images.githubusercontent.com/66226368/220025324-029b0ecf-dc0b-4e85-9fac-693ee4b27b88.png">

Desktop Grid 3
<img width="828" alt="image" src="https://user-images.githubusercontent.com/66226368/220025384-368e40a4-37af-4623-938b-d5ae9912523d.png">

Desktop Grid 4
<img width="843" alt="image" src="https://user-images.githubusercontent.com/66226368/220025489-287ef993-9d9e-48ee-9ef3-310220736b27.png">

Mobile
<img width="295" alt="image" src="https://user-images.githubusercontent.com/66226368/220025696-7edb5571-9bae-4f27-af07-f7d2cb3a11a5.png">

## Configuration 

1. Import the  Quick order's app to your theme's dependencies in the manifest.json, for example:
```json
  dependencies: {
    "{vendor}.special-diagramation": "0.x"
  }
 ```
 
 2. Add the Quick order block to the store-theme. For example:
```json
 "flex-layout.col#component--special-diagramation":{
    "children": [
      "rich-text#cmponent06",
      "custom-grid"
    ]
  },
  "custom-grid":{
    "children": [
      "image#custom-grid-1",
      "image#custom-grid-2",
      "image#custom-grid-3",
      "image#custom-grid-4",
      "image#custom-grid-5"
    ]
  },
   ```
|  Block name     | Description                                     |
| -------------- | ----------------------------------------------- |
| `custom-grid` | ![https://img.shields.io/badge/-Mandatory-red](https://img.shields.io/badge/-Mandatory-red)  Top level block that must be declared in the store theme block to render a default custom grid block.   |

## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

|CSS HANDLES |
| ----------- | 
|` grid__${gridType} `|
|` gridTypeClass `|
|` custom-grid-item-big `|
|` custom-grid-item-small `|

<!-- DOCS-IGNORE:start -->

## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

<!-- DOCS-IGNORE:end -->

---- 

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)
