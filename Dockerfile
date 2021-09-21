FROM node:lts-alpine

RUN apk update && \
  apk add bash && \
  addgroup -S htdocs && \
  adduser http -D -S -G htdocs && \
  npm install --global http-server

COPY --chown=http:htdocs ./build /home/http/public
COPY --chown=node:node ./scripts/docker-entrypoint.sh /home/http/docker-entrypoint.sh

USER http:htdocs
WORKDIR /home/http

EXPOSE 3000

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["http-server", "/home/http/public", "-p", "3000", "-d", "false", "-s", "-U", "--no-dotfiles"]
