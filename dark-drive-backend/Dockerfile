# ---- Stage 1: Build the application ----
FROM maven:3.9.6-eclipse-temurin-21 AS build

WORKDIR /app
COPY . .

# Make sure the Maven wrapper is executable
RUN chmod +x mvnw

# Build the app, skipping tests
RUN ./mvnw clean package -DskipTests

# ---- Stage 2: Run the application ----
FROM eclipse-temurin:21-jdk

WORKDIR /app

# Copy the built jar from the previous stage
COPY --from=build /app/target/*.jar app.jar

# Expose the port (Render will set the actual port via $PORT)
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
