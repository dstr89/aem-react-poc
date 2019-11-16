# Goal of the POC

The goal of this POC was to demonstrate a possible/good way to integrate React components with AEM (in a non SPA application context and using Web components as a mediator)

Using React together with AEM is currently possible either:
* via the AEM Standard Editor for non SPAs with not great editing experience (the usual workaround is to refresh the page on every edit)
* via the AEM SPA Editor which is a good fit for SPAs, but lacks certain features of the standard AEM Standard Editor

# Frontend vs Backend in AEM

A common question in AEM projects is should FE and BE should work together in the same project/repository.
There are different pros and cons, but with this POC we try to bring the best of both worlds.

* Pros for working together
    * Better performance, bring the most out of AEM
    * Using the same repository and tools, working on one solution for the client
    * Improved communication and understanding between developers
    * FE developers can still use tools like npm, babel, webpack…
    
* And some cons of course
    * FE developers need to learn a bit of AEM (not so fun)
    * It is hard (or almost impossible) to use React, Vue or Angular in AEM
    * Not possible to do headless, harder to replace AEM as CMS
    * Longer time to build FE code (can drive FE people crazy)
    * Components cannot really be reused outside AEM

# Why React?

React is currently a very popular frontend (FE) framework and most FE developers like to work with the latest and coolest technology:
* Even though the same functionality can be achieved with vanilla JavaScript, it's pretty handy to use a library like React to build the UI
* Note that for long-term projects when you want to avoid FE framework dependencies, vanilla JavaScript might be a better choice

# Why Web components?

Web components are a W3C browser standard technology with increasing support:
* Check https://caniuse.com/#search=web%20components (note that polyfills for are available oder browsers)
* They enable FE developers to create modular components, but in a framework-agnostic way so they can run directly in the browser as custom HTML elements
* They solve the issue of having to refresh the page in AEM on every edit in order to update the component state in React (make the component refresh)

# Why Direflow?

Direflow project combines the best of Web components and React and makes it really easy to get started. It is really nicely documented on https://direflow.io/.
It ships React components in custom elements so they can run natively in the browser (and thus of course the AEM Standard Editor as well).

That being said, if you want to avoid this additional dependency, you can also write you own scripts to hook together React and Web components life-cycle.
Here is a good article on that topic: https://itnext.io/react-and-web-components-3e0fca98a593

# Test React components

## Prerequisites
* Download Node (NPM) from https://nodejs.org/en/
* Install NPX, Direflow and Yarn by running the commands
    * sudo npm install yarn -g
    * sudo npm install npx -g
    * sudo npm install direflow-cli -g

## Test and build
* Position yourself either on a project level or on a component level and run:
    * yarn install (to install dependencies)
    * yarn start (to start a local server for testing and debugging)
    * yarn build (to create the project bundle JS)

# Run AEM project

## Prerequisites
* Download JDK 8u231 or higher from https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
* Download Maven 3.3.9 or higher from https://maven.apache.org/download.cgi
* Have access to AEM 6.4.3 or higher quickstart JAR and a valid licence for running AEM

## Deploy
* Use Maven to install the project on AEM author and publish instances (tested on AEM 6.4, SP 6.4.3):
    * mvn clean install -P autoInstallPackage
    * mvn clean install -P autoInstallPackagePublish

# Things to consider / Not covered in this POC
* In the demo all components are loaded using a single project bundle JS file. For a larger project you may want to consider dynamic script loading (actually load only the components you use on a page)
* In the demo the project bundle JS file is copied to JCR manually (to /apps/aem-react-poc/clientlibs/main/js/projectBundle.js). On a real project you should consider versioning your React components and hosting the components JS files on a server or CDN.
* React is a pretty heavy framework, so the project bundle JS file for this demo has around 570 KB. In order to boost performance, you might consider a faster alternative like https://preactjs.com/

# Licences to consider
* Adobe Experience Manager is a commercial CMS solution that requires a licence provided by Adobe
* This POC was generated using AEM lazbones templates
    * https://github.com/Adobe-Consulting-Services/lazybones-aem-templates/blob/master/LICENSE
* It uses Direflow, a small framework for creating and managing Web component libraries
    * https://github.com/Silind-Software/direflow/blob/master/LICENSE