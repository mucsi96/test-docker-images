FROM maven:3-eclipse-temurin-22 AS build

WORKDIR /workspace/app

COPY pom.xml .
COPY src src

RUN mvn package -DskipTests -B -Dorg.slf4j.simpleLogger.log.org.apache.maven.cli.transfer.Slf4jMavenTransferListener=warn
RUN mkdir -p target/dependency && (cd target/dependency; jar -xf ../*.jar)


FROM bellsoft/liberica-openjre-alpine-musl:22

RUN apk --no-cache add bash curl

VOLUME /tmp

ARG DEPENDENCY=/workspace/app/target/dependency

COPY --from=build ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY --from=build ${DEPENDENCY}/META-INF /app/META-INF
COPY --from=build ${DEPENDENCY}/BOOT-INF/classes /app

ENTRYPOINT ["java", "-classpath", "app:app/lib/*", "-Dspring.profiles.active=prod", "io.github.mucsi96.demo.Application"]