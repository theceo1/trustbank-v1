# Essential Dependencies
npm install react react-dom next --legacy-peer-deps

# Tailwind CSS and related dependencies
npm install tailwindcss postcss autoprefixer --legacy-peer-deps
npx tailwindcss init -p

# Heroicons
npm install @heroicons/react --legacy-peer-deps

npm install jwt-decode --legacy-peer-deps
npm install nookies --legacy-peer-deps
npm install next-transpile-modules --legacy-peer-deps
npm install ajv ajv-keywords --legacy-peer-deps
npm install babel-loader --legacy-peer-deps
npm install twilio --legacy-peer-deps
npm install css-loader style-loader --legacy-peer-deps
npm install webpack sass --legacy-peer-deps
npm install critters webpack --legacy-peer-deps
npm install webpack sass-loader source-map-loader file-loader style-loader css-loader --legacy-peer-deps
npm install next-compose-plugins --legacy-peer-deps
npm install next-compose-plugins next-transpile-modules path sass ignore-loader source-map-loader file-loader style-loader css-loader sass-loader @babel/plugin-transform-block-scoping --legacy-peer-deps
npm install cypress --save-dev --legacy-peer-deps
npm install next --legacy-peer-deps
npm install setimmediate --legacy-peer-deps
npm install openid-client@latest @auth0/nextjs-auth0@latest --legacy-peer-deps


# Testing dependencies
npm install --save-dev jest babel-jest @testing-library/react @testing-library/jest-dom cypress --legacy-peer-deps

# Additional dependencies for project functionality
npm install framer-motion react-chartjs-2 react-hook-form socket.io-client --legacy-peer-deps

# Ensure the tailwind.config.js and postcss.config.js exist
if [ ! -f tailwind.config.js ]; then
  npx tailwindcss init
fi

if [ ! -f postcss.config.js ]; then
  cat <<EOT >> postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOT
fi

echo "All dependencies have been installed."
