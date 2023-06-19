import { IHealthCheckDto } from "./dto/health-check-dto";

export class HealthCheckHandler {
  async handler(inputEvent: IHealthCheckDto, context) {
    return {
      appName: inputEvent.appName || "aws-serverless-template",
      appVersion: inputEvent.appVersion || "v1",
      functionVersion: context.functionVersion,
      functionName: context.functionName,
    };
  }
}
