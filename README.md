# The_princess-s_panties WEB SPA

### Created a project using:
+ Vue 3 Composition Pinia
+ perchance - image-generator
+ 
+ consultant assistance ChatGPT

# Game - The_princess-s_panties


## Playing the game
##### How to play? </br>


## Short video intro:
https://youtu.be/Pz1Ywesi9iE

## Firebase hosting:
https://the-princess-panties.firebaseapp.com


## Screenshots:
![0](https://github.com/user-attachments/assets/635d052a-421b-4490-baa9-b824b2c1451b)
![1](https://github.com/user-attachments/assets/43a19e35-c93f-451d-bf3d-0325dfdbb4b9)
![2](https://github.com/user-attachments/assets/db139b7e-9c6a-45d6-83ec-f9a1c4d4dc40)
![3](https://github.com/user-attachments/assets/b375c0ed-0c8e-4878-af25-92c444c33d8b)
![4](https://github.com/user-attachments/assets/3d9fe0dc-def2-487a-acca-b8ae1ef7db34)
![5](https://github.com/user-attachments/assets/5051d3f2-ddf0-4fcf-8ca3-0caec63b4c04)
![6](https://github.com/user-attachments/assets/9af535cc-22be-4c8e-8fd5-ffdf4dc5f087)
![7](https://github.com/user-attachments/assets/c6d91120-168a-45fe-8c29-ca995e00d40e)
![8](https://github.com/user-attachments/assets/54cb2c28-bec7-4dfa-a2f0-c236b9423460)


### Prerequisites
- https://perchance.org/ai-text-to-image-generator
- 
#### Year:
2025

### Developer
By Abaddon

<br>
<br>

A Phaser 3 project template with ES6 support via [Babel 7](https://babeljs.io/) and [Webpack 4](https://webpack.js.org/) that includes hot-reloading for development and production-ready builds.

This has been updated for Phaser 3.50.0 version and above.

Loading images via JavaScript module `import` is also supported, although not recommended.

## Requirements

[Node.js](https://nodejs.org) is required to install dependencies and run scripts via `npm`.

## Available Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install project dependencies |
| `npm start` | Build project and open web server running project |
| `npm run build` | Builds code bundle with production settings (minification, uglification, etc..) |

## Writing Code

After cloning the repo, run `npm install` from your project directory. Then, you can start the local development server by running `npm start`.

After starting the development server with `npm start`, you can edit any files in the `src` folder and webpack will automatically recompile and reload your server (available at `http://localhost:8080` by default).

## Customizing the Template

### Babel

You can write modern ES6+ JavaScript and Babel will transpile it to a version of JavaScript that you want your project to support. The targeted browsers are set in the `.babelrc` file and the default currently targets all browsers with total usage over "0.25%" but excludes IE11 and Opera Mini.

 ```
"browsers": [
  ">0.25%",
  "not ie 11",
  "not op_mini all"
]
 ```

### Webpack

If you want to customize your build, such as adding a new webpack loader or plugin (i.e. for loading CSS or fonts), you can modify the `webpack/base.js` file for cross-project changes, or you can modify and/or create new configuration files and target them in specific npm tasks inside of `package.json'.

## Deploying Code

After you run the `npm run build` command, your code will be built into a single bundle located at `dist/bundle.min.js` along with any other assets you project depended. 

If you put the contents of the `dist` folder in a publicly-accessible location (say something like `http://mycoolserver.com`), you should be able to open `http://mycoolserver.com/index.html` and play your game.
