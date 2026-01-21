# assignment-2

Note: only the dummy application is used for this use case focusing on the assignment

## CI/CD Pipeline

The pipeline builds and pushes all three services (api-service, frontend-service, worker-service) to Docker Hub on every push to main branch.

**Note:** 
- Image tagging with semantic versioning (e.g., v1.0.0) is intentionally not implemented in this assignment. Tagging strategies and release workflows will be covered in a separate assignment.
- Branching strategy (e.g., GitFlow, trunk-based) is not used as this is only for the assignment purpose.