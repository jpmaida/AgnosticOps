FROM registry.access.redhat.com/ubi8/nodejs-18:1-81 AS build

USER root

ADD public public
ADD src src
COPY *.js .
COPY *.json .

RUN npm install && npm run build

USER 1001

FROM registry.access.redhat.com/ubi8/nginx-122:1-42 AS run

USER 0
COPY --from=build /opt/app-root/src/dist/ /tmp/src/

RUN chown -R 1001:0 /tmp/src
USER 1001

# Let the assemble script to install the dependencies
RUN /usr/libexec/s2i/assemble

# Run script uses standard ways to run the application
CMD /usr/libexec/s2i/run