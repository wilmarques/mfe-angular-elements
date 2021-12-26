# MfeAngularElementsEducative

- Generate workspace
  - `npx --ignore-existing create-nx-workspace mfe-angular-elements-educative --preset=empty`
- Instalar web plugin
  - `npm install --save-dev @nrwl/web`
- Generate container app
  - `npx nx generate @nrwl/web:app container --e2eTestRunner=none --no-interactive`
- Run the container app
  - `npx nx server container`
- Remove web app container to change for VueJS
  - `npx nx generate remove container`
- Instalar VueJS plugin
  - 
- Generate VueJS container app
  - `npx nx generate @nx-plus/vue:app container`
- Changing the container app layout
