import { HealthCheckHandler } from "./functions/healthCheck/handler";

const healthCheck = new HealthCheckHandler().handler;

export { healthCheck };
