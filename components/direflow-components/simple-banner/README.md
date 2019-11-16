# Simple banner
This component was bootstrapped with [Direflow](https://direflow.io).

## Install dependencies
yarn install

## Run test server
yarn start

## Build the bundle
yarn build

# Component usage
```html
<simple-banner id="simple-banner-1"></simple-banner>

<script>
    const simpleBannerComponent = document.getElementById("simple-banner-1");
    simpleBannerComponent.title = 'Experience true nature';
    simpleBannerComponent.backgroundImage = 'https://placeimg.com/750/250/nature';
    simpleBannerComponent.textColor = '#FFFFFF';
</script>
```