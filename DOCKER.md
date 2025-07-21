# Docker Deployment Guide
## John Lembke for City Council Campaign Website

This guide explains how to run the campaign website using Docker for both development and production environments.

## Prerequisites

- Docker installed on your system
- Docker Compose installed (usually comes with Docker Desktop)

## Quick Start

### Production Deployment

1. **Build and run with Docker Compose (Recommended):**
```bash
npm run docker:prod
```
This will build the image and start the container. The website will be available at `http://localhost:3000`

2. **Or build and run manually:**
```bash
# Build the image
npm run docker:build

# Run the container
npm run docker:run
```

### Development Environment

For development with hot reloading:
```bash
npm run docker:dev
```
This will start the development server at `http://localhost:5173` with live reloading.

## Docker Commands Reference

### Production Commands
- `npm run docker:build` - Build production Docker image
- `npm run docker:run` - Run production container on port 3000
- `npm run docker:prod` - Build and run with Docker Compose
- `npm run docker:stop` - Stop and remove containers

### Development Commands
- `npm run docker:dev` - Start development environment with hot reloading

### Manual Docker Commands
```bash
# Build production image
docker build -t john-lembke-campaign .

# Run production container
docker run -p 3000:80 --name campaign-site john-lembke-campaign

# Build development image
docker build -f Dockerfile.dev -t john-lembke-campaign-dev .

# Run development container
docker run -p 5173:5173 -v $(pwd):/app -v /app/node_modules john-lembke-campaign-dev

# Stop containers
docker stop campaign-site
docker rm campaign-site

# View logs
docker logs campaign-site

# Access container shell
docker exec -it campaign-site sh
```

## File Structure

```
├── Dockerfile              # Production build (multi-stage)
├── Dockerfile.dev          # Development build
├── docker-compose.yml      # Production Docker Compose
├── docker-compose.dev.yml  # Development Docker Compose
├── nginx.conf              # Nginx configuration
├── .dockerignore           # Files to exclude from Docker build
└── DOCKER.md              # This guide
```

## Production Features

The production Docker setup includes:

- **Multi-stage build** for smaller final image size
- **Nginx web server** for optimal performance
- **Gzip compression** for faster loading
- **Security headers** for better protection
- **Static asset caching** for improved performance
- **Health checks** for container monitoring
- **Automatic restarts** if container fails

## Development Features

The development Docker setup includes:

- **Hot reloading** for instant code changes
- **Volume mounting** for live file updates
- **All development dependencies** installed
- **Debugging capabilities** with accessible container

## Deployment Options

### Local Deployment
- Use the production Docker setup for local testing
- Access at `http://localhost:3000`

### Cloud Deployment
The Docker images can be deployed to:
- **AWS ECS/Fargate**
- **Google Cloud Run**
- **Azure Container Instances**
- **DigitalOcean App Platform**
- **Heroku Container Registry**

### Example Cloud Deployment (Docker Hub)
```bash
# Tag for Docker Hub
docker tag john-lembke-campaign yourusername/john-lembke-campaign:latest

# Push to Docker Hub
docker push yourusername/john-lembke-campaign:latest

# Deploy anywhere with Docker
docker run -p 80:80 yourusername/john-lembke-campaign:latest
```

## Environment Variables

The container accepts these environment variables:

- `NODE_ENV` - Set to 'production' for production builds
- `PORT` - Internal port (default: 80 for production, 5173 for dev)

## Troubleshooting

### Common Issues

1. **Port already in use:**
   ```bash
   # Check what's using the port
   lsof -i :3000
   
   # Use different port
   docker run -p 8080:80 john-lembke-campaign
   ```

2. **Permission issues on Linux:**
   ```bash
   # Add user to docker group
   sudo usermod -aG docker $USER
   newgrp docker
   ```

3. **Development hot reloading not working:**
   - Ensure CHOKIDAR_USEPOLLING=true is set
   - Check volume mounts are correct

4. **Build fails:**
   ```bash
   # Clean Docker cache
   docker system prune -a
   
   # Rebuild without cache
   docker build --no-cache -t john-lembke-campaign .
   ```

### Performance Tips

- Use `.dockerignore` to exclude unnecessary files
- Multi-stage builds keep production images small
- Nginx serves static files efficiently
- Enable gzip compression (already configured)

## Security Considerations

- Production images run as non-root user
- Security headers configured in Nginx
- No sensitive information in images
- Regular base image updates recommended

## Monitoring

### Health Checks
The production container includes health checks:
```bash
# Check container health
docker ps
# Look for "healthy" status

# Manual health check
docker exec campaign-site wget --spider http://localhost:80
```

### Logs
```bash
# View container logs
docker logs john-lembke-campaign

# Follow logs in real-time
docker logs -f john-lembke-campaign
```

This Docker setup provides a robust, scalable deployment solution for the John Lembke campaign website.
