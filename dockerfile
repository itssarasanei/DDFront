# Select the image to use
FROM node:20.12.2

## Install dependencies in the root of the Container
RUN npm i -g pnpm@9.0.4
COPY package.json pnpm-lock.yaml ./
ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
RUN pnpm i --frozen-lockfile

# Add project files to /app route in Container
ADD . /app

# Set working dir to /app
WORKDIR /app
RUN pnpm build

# expose port 3000
EXPOSE 3000
CMD ["pnpm", "start"]