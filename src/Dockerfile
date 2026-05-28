# Build stage
FROM docker.io/chainguard/node:latest AS build
WORKDIR /src

COPY --chown=node:node ./src/ ./
RUN npm install
RUN npm run build

# Runtime stage
FROM docker.io/chainguard/node:latest
WORKDIR /app

COPY --from=build --chown=node:node /src/.next /app/.next
COPY --from=build --chown=node:node /src/public /app/public
COPY --from=build --chown=node:node /src/next.config.mjs /app/next.config.mjs
COPY --from=build --chown=node:node /src/package.json /app/package.json
COPY --from=build --chown=node:node /src/node_modules /app/node_modules

ENV NODE_ENV=production
ENV PORT=3005
EXPOSE 3005

ENTRYPOINT []
CMD ["npm", "run", "start"]
