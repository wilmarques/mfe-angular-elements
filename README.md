# MfeAngularElementsEducative

- Generate workspace
  - `npx --ignore-existing create-nx-workspace mfe-angular-elements-educative --preset=empty`
- **Cancelado** - Instalar web plugin
  - `npm install --save-dev @nrwl/web`
- **Cancelado** - Generate container app
  - `npx nx generate @nrwl/web:app container --e2eTestRunner=none --no-interactive`
- Remove web app container to change for VueJS
  - `npx nx generate remove container`
- **Cancelado** - Instalar VueJS plugin
  - `npm install @nx-plus/vue --save-dev --force`
  - Teve que forçar pq ainda não suporta Nx 13, apenas 12
- **Cancelado** - Generate VueJS container app
  - `npx nx generate @nx-plus/vue:app container`
  - Não funcionou porque o plugin pra Vue ainda não suporta Nx 12
  - Mudarei para React
- Instalar React plugin
  - `npm install --save-dev @nrwl/react`
- Generate React container app
  - `npx nx generate @nrwl/react:app container --e2eTestRunner=none --unitTestRunner=none --no-interactive`
- Run the container app to see if it's working
  - `npx nx serve container`
- Changing the container app layout
- Removing the initial component
  - `rm -rf apps/container/src/app/nx-welcome.tsx`
  - Também precisa apagar as referências ao componente no App component
- **Cancelado** - Installing Tailwind on container app
  - Installing Tailwind dependencies
  - `npm install tailwindcss@latest postcss@latest autoprefixer@latest`
  - Initializing on container app
  - `cd apps/container`
  - `npx tailwindcss init -p`
  - The config files for tailwind and postcss had to be changed
  - Tailwind base styles needs to be imported on `styles.css`
- Configuring Pico CSS
  - `npm install @picocss/pico`
  - Changing root element to body
    - Don't do this in production
- Creating header component
  - `nx generate @nrwl/react:component --name=header --project=container --style=none --skipTests --flat --no-interactive`
- Creating home component
  - `nx generate @nrwl/react:component --name=home --project=container --style=none --skipTests --flat --no-interactive`
- Creating profile component
  - `nx generate @nrwl/react:component --name=profile --project=container --style=none --skipTests --flat --no-interactive`
- Adding routing
  - `npm install react-router-dom@6`
  - Reflected the current item on navbar using React Router hooks
- Creating a Custom Element without Angular
  - Adding a web project to workspace
  - `npm install -D @nrwl/web`
  - `nx generate @nrwl/web:app mfe-web --e2eTestRunner=none --unitTestRunner=none --no-interactive`
  - Also changed the `AppElement` file
  - Had to change the port that this project is going to be served during development
  - Changed it on `project.json` file, `port` property
- Embedding the Custom Element on container app
  - Creating a mfe-container component
  - `nx generate @nrwl/react:component --name=mfe-container --project=container --style=none --skipTests --flat --no-interactive`
