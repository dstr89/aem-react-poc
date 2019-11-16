#Headline with CTAs
This component was bootstrapped with [Direflow](https://direflow.io).

## Install dependencies
yarn install

## Run test server
yarn start

## Build the bundle
yarn build

# Usage example
```html
<headline-with-ctas id="headline-with-ctas-1"></headline-with-ctas>

<script>
    const headlineWithCtasComponent = document.getElementById("headline-with-ctas-1");
    headlineWithCtasComponent.title = 'Great shopping';
    headlineWithCtasComponent.subTitle = 'Based on your needs';
    headlineWithCtasComponent.ctas = ['Show now', 'Buy more', 'Spend less'];
</script>
```